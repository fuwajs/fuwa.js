FROM node:16

COPY package*.json ./

RUN yarn install

COPY . .
