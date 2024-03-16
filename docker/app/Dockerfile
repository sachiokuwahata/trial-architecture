FROM php:8.1-fpm

COPY ./docker/app/php.ini /usr/local/etc/php/

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y zlib1g-dev \ 
    libzip-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmagickwand-dev --no-install-recommends \
    zip \
    unzip

WORKDIR /var/www
