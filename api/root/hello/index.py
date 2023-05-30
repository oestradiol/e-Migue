from api.dtos.ISayHelloDto import ISayHelloDto
from api.main import app

# Hello controller

@app.get("/api/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post("/api/hello")
async def hello_message(dto: ISayHelloDto):
    return {"message": f"Hello {dto.message}"}
