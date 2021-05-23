require('dotenv/config');

module.exports = {
  development: {
    databases: {
      database_development: {
        database: process.env.PG_DATABASE,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
      },
    },
  },
  test: {
    databases: {
      database_test: {
        database: process.env.PG_DATABASE,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
      },
    },
  },
  production: {
    databases: {
      database_production: {
        database: process.env.PG_DATABASE,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
      },
    },
  },
};
