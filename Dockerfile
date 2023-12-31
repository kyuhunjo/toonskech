FROM node:latest as builder
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

