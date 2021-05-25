require('dotenv').config();

module.exports = {
"development": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres"
  },
"test": {
    "username": "Valerie",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
"production": {
    "username": "Valerie",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};
