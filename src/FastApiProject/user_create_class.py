from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    lastname: str
    password: str

