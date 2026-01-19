FROM postgres:18-alpine

COPY dump.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432

ENV POSTGRES_USER=kodilla
ENV POSTGRES_PASSWORD=kodilla
ENV POSTGRES_DB=kodilla-quotes
