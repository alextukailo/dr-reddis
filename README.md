# IGPA wordpress theme

The University of Illinois

## Getting Started

Required stack: Wordpress PHP, SQL, Vanila JS, ReactJs, Tailwind, CSS, SCSS, PostCSS

Setup Wordpress with Docker.

Create a docker-compose.yaml file in the root.
The example of .yaml file

```
version: '3.1'

services:
  # Database
    db:
      image: mysql:8
      volumes:
        - db_data:/var/lib/mysql
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: password
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wordpress
        MYSQL_PASSWORD: wordpress
      networks:
        - wpsite
  # phpmyadmin
    phpmyadmin:
      depends_on:
        - db
      image: phpmyadmin/phpmyadmin
      restart: always
      ports:
        - '8080:80'
      environment:
        PMA_HOST: db
        MYSQL_ROOT_PASSWORD: password
      networks:
        - wpsite
  # Wordpress
    wordpress:
      depends_on:
       - db
      image: wordpress:latest
      ports:
       - '8000:80'
      restart: always
      volumes: ['./:/var/www/html']
      environment:
        WORDPRESS_DB_HOST: db:3306
        WORDPRESS_DB_USER: wordpress
        WORDPRESS_DB_PASSWORD: wordpress
      networks:
       - wpsite
networks:
  wpsite:
volumes:
  db_data:
```

Run commands bellow.

```
    docker-compose up -d
    docker ps
```

or use MAMP, Local form Flywheel or etc.

Pull current theme to the "themes" folder of the Wordpress.

```
    npm install
    npm run dev
```

Open [localhost:8000](http://localhost:8000/)

## Installing

Before using the IGPA wordpress theme you have to install packages

    npm install

---

## Start dev server

    npm run dev

---

## Build project

    npm run build

The Front-end prod build is in "dist" folder

---
