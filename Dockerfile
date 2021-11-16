FROM node:17

COPY package*.json ./

RUN yarn install

COPY . .
