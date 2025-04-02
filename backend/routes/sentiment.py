from fastapi import APIRouter
from pydantic import BaseModel
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from firebase_config import db

nltk.download('vader_lexicon')

router = APIRouter()

class SentimentRequest(BaseModel):
    text: str

@router.post("/analyze")
def analyze_sentiment(request: SentimentRequest):
    sia = SentimentIntensityAnalyzer()
    scores = sia.polarity_scores(request.text)
    sentiment = "positive" if scores['compound'] > 0 else "negative" if scores['compound'] < 0 else "neutral"
    
    db.collection("sentiments").add({"text": request.text, "sentiment": sentiment})
    
    return {"sentiment": sentiment, "scores": scores}