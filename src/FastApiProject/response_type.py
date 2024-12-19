from pydantic import BaseModel

class UserResponse(BaseModel):
    id: int
    name: str
    lastname: str

    class Config:
        from_attributes = True
