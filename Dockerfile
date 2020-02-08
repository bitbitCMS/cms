FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon mysql2 sequelize sequelize-cli

RUN mkdir data

EXPOSE 4000

ENTRYPOINT npm install && nodemon