# Just an example Dockerfile which builds a basic Django application.
# You will want to swap this out for your own Dockerfile.

FROM python:3.10

ENV PYTHONUNBUFFERED 1

RUN mkdir /SOMETHING
WORKDIR /SOMETHING
RUN pip install --trusted-host pypi.python.org django
COPY . /SOMETHING/

EXPOSE 8000
CMD ["python", "manage.py", "runserver"]
