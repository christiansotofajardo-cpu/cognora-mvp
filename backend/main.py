from datetime import datetime
from typing import Any, Dict, List, Optional
from uuid import uuid4

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


app = FastAPI(
    title="Cognora API",
    description="Backend inicial para evaluaciones adaptativas Cognora.",
    version="0.1.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://cognora-mvp.onrender.com",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EvaluationPayload(BaseModel):
    id: Optional[str] = None
    status: str = "preliminary_report_ready"
    createdAt: Optional[str] = None
    source: str = "cognora_frontend_mvp"

    organization: Dict[str, Any] = Field(default_factory=dict)
    role: Dict[str, Any] = Field(default_factory=dict)
    adaptiveProfile: Dict[str, Any] = Field(default_factory=dict)
    criticalVariables: List[str] = Field(default_factory=list)
    candidate: Dict[str, Any] = Field(default_factory=dict)
    scenario: Dict[str, Any] = Field(default_factory=dict)
    interpretiveMetadata: Dict[str, Any] = Field(default_factory=dict)


evaluations_store: List[Dict[str, Any]] = []


@app.get("/")
def root():
    return {
        "service": "Cognora API",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat(),
        "evaluations_count": len(evaluations_store),
    }


@app.post("/evaluations")
def create_evaluation(payload: EvaluationPayload):
    evaluation = payload.model_dump()

    if not evaluation.get("id"):
        evaluation["id"] = f"cognora_eval_{uuid4().hex}"

    if not evaluation.get("createdAt"):
        evaluation["createdAt"] = datetime.utcnow().isoformat()

    evaluation["backendReceivedAt"] = datetime.utcnow().isoformat()

    evaluations_store.insert(0, evaluation)

    return {
        "message": "Evaluation stored successfully",
        "evaluation": evaluation,
        "count": len(evaluations_store),
    }


@app.get("/evaluations")
def list_evaluations():
    return {
        "count": len(evaluations_store),
        "evaluations": evaluations_store,
    }


@app.get("/evaluations/{evaluation_id}")
def get_evaluation(evaluation_id: str):
    for evaluation in evaluations_store:
        if evaluation.get("id") == evaluation_id:
            return evaluation

    raise HTTPException(status_code=404, detail="Evaluation not found")
