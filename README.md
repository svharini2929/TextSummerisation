# AI Text Summarizer

A web-based text summarization tool built with **Flask** and **Hugging Face Transformers**. It uses Meta's **BART-Large-CNN** model to generate concise summaries from long text input. Users paste their text into the interface and get an AI-generated summary instantly. The app features a modern glassmorphism UI with a dark purple theme.

## Tech Stack

- Python
- Flask
- Hugging Face Transformers
- BART-Large-CNN
- HTML, CSS, JavaScript

## Features

- AI-powered text summarization using a pre-trained NLP model
- Clean, responsive dark-themed UI
- REST API endpoint for summarization
- Real-time error handling and input validation

## How to Run

```bash
cd project3
python -m venv .venv
.venv\Scripts\activate
pip install flask transformers torch
python app.py
