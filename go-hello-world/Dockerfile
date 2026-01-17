FROM golang:alpine

WORKDIR /usr/src/app

RUN go mod init gohelloworld

COPY . .

EXPOSE 8080

CMD ["go", "run", "main.go"]
