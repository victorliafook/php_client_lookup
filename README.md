# Client Lookup App
A simple rest app written in PHP using Slim framework as the API and Angular as the Frontend

# Heroku Live Preview
[https://php-client-lookup.herokuapp.com](https://php-client-lookup.herokuapp.com/index.html)

# Build Instructions
I have used Composer, NPM and bower as package managers. Follow the steps:
- install npm, bower globally.
- Update the url of the REST API (baseURL) at /dist/js/service.js;
- Set the environment variables: CL_MYSQL_PASS and CL_MYSQL_USER according to your MySQL config;
- Execute:
```
$ curl -sS https://getcomposer.org/installer | php
or
$ php -r "readfile('https://getcomposer.org/installer');" | php
```
Then:
```
$ php composer.phar install
$ npm install
$ bower install
$ gulp default
```
After these steps, the production version of the frontend app will be at /dist directory.
Start your Apache server and access the application according to your config.

# Database Setup
You must have MySQL installed. Then create a database named cl_client_lookup and then run the database.sql and the sample.sql for sample data, otherwise the database will be empty.