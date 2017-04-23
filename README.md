# Client Lookup App
A simple rest app written in PHP using Slim framework as the API and Angular as the Frontend

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
