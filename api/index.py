from fastapi import FastAPI, Depends, HTTPException
from contextlib import asynccontextmanager
from typing import Annotated
import psycopg
from pysrc import models
from pysrc.connection import config_db, get_db


Connection = Annotated[psycopg.AsyncConnection, Depends(get_db)]

@asynccontextmanager
async def lifespan(app: FastAPI):
    await config_db()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/api/professores")
async def get_professores(
        conn: Connection
) -> list[models.ProfessorItem]:
    return await models.get_all_professores(conn)

@app.get("/api/disciplinas")
async def get_disciplinas(
        conn: Connection
) -> list[models.DisciplinaItem]:
    return await models.get_all_disciplinas(conn)

@app.get("/api/disciplina/{disciplina_id}")
async def get_disciplina(
        conn: Connection,
        disciplina_id: int
) -> models.DisciplinaInfo:
    return await models.get_disciplina_info(conn, disciplina_id)

@app.get("/api/professor/{professor_id}")
async def get_professor(
        conn: Connection,
        professor_id: int
        ) -> models.ProfessorInfo:
    return await models.get_professor_info(conn, professor_id)

@app.get("/api/turma/{turma_id}")
async def get_turma(
        conn: Connection,
        turma_id: int
        ) -> models.TurmaInfo:
    turma = await models.get_turma_info(conn, turma_id)

    if turma is None:
        raise HTTPException(status_code=404, detail="Turma not found")
    return turma

@app.post("/api/turma/{turma_id}/avaliacao")
async def add_avaliacao(
        conn: Connection,
        turma_id: int,
        avaliacao: models.AvaliacaoIn
        ) -> models.Avaliacao:
    new_avaliacao = await models.add_avaliacao_to_turma(conn, turma_id, avaliacao)
    return new_avaliacao
