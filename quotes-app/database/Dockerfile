FROM postgres:18-alpine

COPY dump.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
