# Client Lookup App
A simple rest app written in PHP using Slim framework as the API and Angular as the Frontend

# Build Instructions
I have used Composer and NPM as package managers.Follow the steps:
- Update the url of the REST API (baseURL) at /dist/js/service.js;
- Set the environment variables: CL_MYSQL_PASS and CL_MYSQL_USER according to your MySQL config;
```
$ npm install
$ bower install
$ gulp default
```
After these steps, the production version of the frontend app will be at /dist directory.
Start your Apache server and access the application according to your config.
