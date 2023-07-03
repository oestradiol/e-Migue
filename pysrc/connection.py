import psycopg
import dotenv
import os

class Database:
    host: str
    port: str
    db_name: str
    password: str
    user: str

    @staticmethod
    def config_db():
        pass

async def get_db():
    async with await psycopg.AsyncConnection.connect(
            f"""
            host={Database.host}
            port={Database.port}
            dbname={Database.db_name}
            password={Database.password}
            user={Database.user}
            """
    ) as aconn:
        yield aconn

    return

async def config_db():
    dotenv.load_dotenv("./dev.env")
    host = os.getenv("POSTGRES_HOST")
    if host is None:
        host = "172.17.0.2"

    db_name = os.getenv("POSTGRES_DATABASE")
    if db_name is None:
        db_name = "emigue"

    user = os.getenv("POSTGRES_USER")
    if user is None:
        user = "postgres"

    port = os.getenv("POSTGRES_5432")
    if port is None:
        port = "5432"

    password = os.getenv("POSTGRES_PASSWORD")
    if password is None:
        password = "1234"

    Database.host = host 
    Database.db_name = db_name 
    Database.user = user 
    Database.port = port 
    Database.password = password 


