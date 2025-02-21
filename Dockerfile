# Primera etapa: Compilación
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Segunda etapa: Ejecución
FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/clinicarajem-1.0.0.jar clinicarajem.jar
EXPOSE 80
ENTRYPOINT ["java", "-jar", "clinicarajem.jar"]

