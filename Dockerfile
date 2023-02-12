FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /TibiaPal
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . /TibiaPal
COPY .env .