from fastapi import FastAPI, Request, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import List
from .services import process_image, process_pdf, get_structured_data
from .utils import save_upload_file
from .models import DocumentData
import os

app = FastAPI()

# CORS setup for Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

current_dir = os.path.dirname(os.path.abspath(__file__))

app.mount("/static", StaticFiles(directory=os.path.join(current_dir, "static")), name="static")

templates = Jinja2Templates(directory=os.path.join(current_dir, "templates"))

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Single upload
@app.post("/upload/", response_model=DocumentData)
async def upload_file(file: UploadFile = File(...)):
    file_path = save_upload_file(file)
    file_extension = file.filename.split(".")[-1].lower()

    if file_extension in ["png", "jpg", "jpeg"]:
        text = process_image(file_path)
    elif file_extension == "pdf":
        text = process_pdf(file_path)
    else:
        raise HTTPException(status_code=400, detail="Unsupported file type")

    structured_data = get_structured_data(file.filename, text)
    return structured_data

#  Bulk upload
@app.post("/upload/bulk/", response_model=List[DocumentData])
async def bulk_upload(files: List[UploadFile] = File(...)):
    results = []
    for file in files:
        file_path = save_upload_file(file)
        file_extension = file.filename.split(".")[-1].lower()

        if file_extension in ["png", "jpg", "jpeg"]:
            text = process_image(file_path)
        elif file_extension == "pdf":
            text = process_pdf(file_path)
        else:
            raise HTTPException(status_code=400, detail=f"Unsupported file type: {file.filename}")

        structured_data = get_structured_data(file.filename, text)
        results.append(structured_data)

    return results
