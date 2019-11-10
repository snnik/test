FROM node:8
ARG APP_DIR=front_serv
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY ./build .
EXPOSE 3000
# RUN ["npm", "run", "build"]
RUN ["npm", "install", "-g", "serve"]
ENTRYPOINT [ "serve", "-l", "3000", "-s"]