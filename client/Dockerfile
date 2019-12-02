FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon

EXPOSE 3000

ENTRYPOINT npm install && nodemon
