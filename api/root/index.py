from api.main import app

# Root controller

@app.get("/api")
async def root():
    return {"message": "Hello from Root!"}