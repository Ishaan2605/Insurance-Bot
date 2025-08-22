from fastapi import FastAPI
from pydantic import BaseModel
from scripts.recommendation.predict import predict
from scripts.llm.llm_client import generate_explanations

app = FastAPI(title="Insurance Recommendation API")

class RecommendationRequest(BaseModel):
    country: str
    policy: str
    data: dict

@app.post("/recommend")
def recommend(inp: RecommendationRequest):
    result = predict(inp.country, inp.policy, inp.data)
    explanations = generate_explanations(
        user_input=inp.data,
        prediction=result,
        knowledge="Graph RAG knowledge if available",
    )
    return {
        "country": inp.country,
        "policy": inp.policy,
        "recommendation": result,
        "explanations": explanations,
    }
