from fastapi import FastAPI
from pydantic import BaseModel
from classify import classify

app = FastAPI(
    title="BrightMoney ML Service",
    version="1.0.0"
)


class CategorizeRequest(BaseModel):
    description: str


class CategorizeResponse(BaseModel):
    category: str
    confidence: float


@app.get("/")
def root():
    return {
        "message": "BrightMoney ML Service Running"
    }


@app.post("/categorize", response_model=CategorizeResponse)
def categorize_transaction(req: CategorizeRequest):
    result = classify(req.description)

    return {
        "category": result["category"],
        "confidence": result["confidence"]
    }