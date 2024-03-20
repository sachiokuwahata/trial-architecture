FROM node:18.17-alpine

RUN apk update && \
    npm install -g npm 

WORKDIR /app/front
COPY ./app/front/package*.json ./
RUN npm ci

EXPOSE 3000
ENV HOST='0.0.0.0'
ENV TZ='Asia/Tokyo'

CMD ["npm", "run", "dev"]
