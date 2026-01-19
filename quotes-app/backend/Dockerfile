FROM eclipse-temurin:17.0.17_10-jdk-ubi10-minimal

WORKDIR /opt/app

ARG JAR_FILE

COPY ${JAR_FILE} app.jar

ENV POSTGRES_USER=kodilla
ENV POSTGRES_PASSWORD=kodilla
ENV POSTGRES_DB=kodilla-quotes

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]