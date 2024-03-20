FROM node:18.17-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm 

EXPOSE 3000
ENV HOST='0.0.0.0'
ENV TZ='Asia/Tokyo'
