import os
from datetime import datetime
from typing import Any, Dict, List, Optional
from uuid import uuid4

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from sqlalchemy import Column, DateTime, String, Text, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker


DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not configured")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class EvaluationDB(Base):
    __tablename__ = "evaluations"

    id = Column(String, primary_key=True, index=True)
    status = Column(String, default="preliminary_report_ready")
    source = Column(String, default="cognora_frontend_mvp")
    payload = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    backend_received_at = Column(DateTime, default=datetime.utcnow)


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Cognora API",
    description="Backend inicial para evaluaciones adaptativas Cognora con PostgreSQL.",
    version="0.2.0",
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


def get_db():
    db = SessionLocal()
    try:
        return db
    except Exception:
        db.close()
        raise


@app.get("/")
def root():
    return {
        "service": "Cognora API",
        "status": "running",
        "version": "0.2.0",
        "storage": "postgresql",
    }


@app.get("/health")
def health():
    db = SessionLocal()
    try:
        count = db.query(EvaluationDB).count()
        return {
            "status": "ok",
            "timestamp": datetime.utcnow().isoformat(),
            "evaluations_count": count,
            "storage": "postgresql",
        }
    finally:
        db.close()


@app.post("/evaluations")
def create_evaluation(payload: EvaluationPayload):
    import json

    evaluation = payload.model_dump()

    if not evaluation.get("id"):
        evaluation["id"] = f"cognora_eval_{uuid4().hex}"

    if not evaluation.get("createdAt"):
        evaluation["createdAt"] = datetime.utcnow().isoformat()

    evaluation["backendReceivedAt"] = datetime.utcnow().isoformat()

    db = SessionLocal()

    try:
        record = EvaluationDB(
            id=evaluation["id"],
            status=evaluation.get("status", "preliminary_report_ready"),
            source=evaluation.get("source", "cognora_frontend_mvp"),
            payload=json.dumps(evaluation, ensure_ascii=False),
            created_at=datetime.utcnow(),
            backend_received_at=datetime.utcnow(),
        )

        db.add(record)
        db.commit()
        db.refresh(record)

        count = db.query(EvaluationDB).count()

        return {
            "message": "Evaluation stored successfully in PostgreSQL",
            "evaluation": evaluation,
            "count": count,
        }

    finally:
        db.close()


@app.get("/evaluations")
def list_evaluations():
    import json

    db = SessionLocal()

    try:
        records = (
            db.query(EvaluationDB)
            .order_by(EvaluationDB.backend_received_at.desc())
            .all()
        )

        evaluations = [json.loads(record.payload) for record in records]

        return {
            "count": len(evaluations),
            "evaluations": evaluations,
            "storage": "postgresql",
        }

    finally:
        db.close()


@app.get("/evaluations/{evaluation_id}")
def get_evaluation(evaluation_id: str):
    import json

    db = SessionLocal()

    try:
        record = (
            db.query(EvaluationDB)
            .filter(EvaluationDB.id == evaluation_id)
            .first()
        )

        if not record:
            raise HTTPException(status_code=404, detail="Evaluation not found")

        return json.loads(record.payload)

    finally:
        db.close()

