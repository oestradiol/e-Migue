from fastapi import Request
from pysrc.__main__ import app

@app.get("/api/teste/{full_path:path}")
async def get_all_urls_from_request(request: Request, full_path: str):
    url_list_from_request = [
        {"path": route.path, "name": route.name} for route in request.app.routes
    ]
    url_list = [{"path": route.path, "name": route.name} for route in app.routes]
    return f"""full path: /{full_path}.
              raw_url: {request.url._url}.
              url_list_from_request: {url_list_from_request}.
              url_list: {url_list}"""

@app.get("/api/hello")
async def say_hello():
    return {"message": "Hello from Index Controller!"}


@app.get("/api/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello from Index Controller, {name}!"}


@app.post("/api/hello")
async def say_hello(model):
    return {"message": f"Hello from Index Controller, {model.message}!"}