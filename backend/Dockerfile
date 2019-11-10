FROM openjdk:11
ARG APP_DIR=back_serv
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY target/gs-serving-web-content-0.1.0.jar gs-serving-web-content-0.1.0.jar
ENTRYPOINT ["java", "-jar", "gs-serving-web-content-0.1.0.jar"]