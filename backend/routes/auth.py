from fastapi import APIRouter
from pydantic import BaseModel
from firebase_admin import auth

router = APIRouter()

class User(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: User):
    user_record = auth.create_user(email=user.email, password=user.password)
    return {"message": "User created", "uid": user_record.uid}

@router.post("/login")
def login(user: User):
    return {"message": "Login successful"}

@router.get("/logout")
def logout():
    return {"message": "Logout successful"}