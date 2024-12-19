# models.py
from sqlalchemy import String, Integer, Column
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String(45), nullable=False)
    lastname = Column(String(45), nullable=False)
    password = Column(String(255), nullable=False)
