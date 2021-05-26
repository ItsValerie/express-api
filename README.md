# express-api

## Project Overview
This REST API was built to deepen current skills and further dive into nodejs. For this purpose I made use of express and connected to the relational-database of Postgres using Sequelize as a ORM

Npm packages used: 

 - bcrypt 2.3.3
 - body-parser 1.19.0
 - dotenv 10.0.0
 - express 4.17.1
 - jsonwebtoken 8.5.1
 - passport 0.4.1
 - passport-jwt 4.0.0
 - pg 8.6.0
 - pg-hstore 2.3.3
 - sequelize 6.6.2
 
## Subject of this project

This project is focussed on manufacturer and phones. Each manufacturer has many phone models, whereas one phone belongs to a manufacturer, making this a 1:n relationship. The User Model is used for authorization purposes given that some routes are protected and need a Bearer token you get when logging in successfully.


## Getting started

1. After cloning this project with the SSH Key, add an .env fiel to the root folder. This should contain the following variables added with your keys
```
PG_HOST=YOUR_SPECIFICATIONS
PG_PORT=YOUR_SPECIFICATIONS
PG_DATABASE=YOUR_SPECIFICATIONS
PG_USERNAME=YOUR_SPECIFICATIONS
PG_PASSWORD=YOUR_SPECIFICATIONS
SECRET=YOUR_SPECIFICATIONS
```

2. To get started simply run this command in your terminal to start the server 
```
npm start
```
3. As I used sequelize as ORM, run the following command to migrate
```
sequelize db:migrate
```
4. There is a seed file added to make testing of this API easier. Simply run this command
```
sequelize db:seed:all
```
5. I did implement some unit test which you can execute by running the following command in your terminal
```
npm test
```

## Some example routes 
I suggest Postman to test this API. 

!! Note that the routes for manufacturer and phone do have a namespace of api/v1/ whereas the user routes don't. 

```
api/v1/manufacturers
api/v1/phone/create/{manufacturer_id}
user/register
```

## Outlook
I am planning to implement further testing to this project. This will be in the form of Integration tests with the Supertest Package. Stay tuned!
