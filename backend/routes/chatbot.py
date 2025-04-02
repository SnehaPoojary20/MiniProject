from fastapi import APIRouter
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    question: str

@router.post("/chatbot")
def chatbot_query(query: ChatRequest):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Answer this stock market query: {query.question}",
        max_tokens=100
    )
    return {"answer": response['choices'][0]['text'].strip()}