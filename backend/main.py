from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import sentiment, chatbot, auth

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(sentiment.router)
app.include_router(chatbot.router)
app.include_router(auth.router)

@app.get("/")
def home():
    return {"message": "Stock Market Sentiment API is running!"}