FROM node:10-alpine as sdk

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh python make g++

WORKDIR /home/ut-preview/

RUN npm install -g ionic

COPY ./ ./
RUN npm install

RUN ionic build --prod

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=sdk /home/ut-preview/www /usr/share/nginx/html
