from typing import List
from user_create_class import UserCreate
from fastapi import FastAPI, status, HTTPException, Depends
from database.database_connect import get_db
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from database import models
from response_type import UserResponse
app = FastAPI()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@app.get('/users', response_model=List[UserResponse], status_code=200)
async def get_all_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users


@app.get("/users/{user_id}", response_model=UserResponse, status_code=status.HTTP_200_OK)
async def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(id=user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/users", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter_by(name=user.name, lastname=user.lastname).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = pwd_context.hash(user.password)

    new_user = models.User(
        name=user.name,
        lastname=user.lastname,
        password=hashed_password,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

@app.put("/users/{user_id}", response_model=UserResponse, status_code=status.HTTP_200_OK)
async def update_user(user_id: int, user: UserCreate, db: Session = Depends(get_db)):
    attribute_to_update = db.query(models.User).filter_by(id=user_id).first()
    attribute_to_update.name = user.name
    attribute_to_update.lastname = user.lastname

    db.commit()
    return attribute_to_update

@app.delete("/users/{user_id}", response_model=UserResponse, status_code=status.HTTP_200_OK)
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    attribute_to_delete = db.query(models.User).filter_by(id=user_id).first()

    if attribute_to_delete is None:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(attribute_to_delete)
    db.commit()

    return attribute_to_delete
