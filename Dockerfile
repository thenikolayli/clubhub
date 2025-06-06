FROM node:alpine AS frontend_build

COPY ./frontend /frontend

WORKDIR /frontend
RUN npm install && npm run build
# static files are built and are in the /frontend/static folder


FROM maven:3-eclipse-temurin-21-alpine AS main

COPY --from=frontend_build /frontend/static /static
COPY ./demo /backend
# compiles
WORKDIR /backend
RUN mvn clean package -Dskiptests
# jarfile is target/demo-0.0.1.jar