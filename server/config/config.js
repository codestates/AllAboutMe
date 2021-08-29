require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PRODUCTION_DATABASE_USER,
    "password": process.env.PRODUCTION_DATABASE_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE_NAME,
    "host": process.env.PRODUCTION_DATABASE_HOST,
    "port": process.env.PRODUCTION_DATABASE_PORT,
    "dialect": "mysql"
  }
}
