// Update with your config settings.

//fake Postgres config to keep knex from freaking out
const localPg = {
  host: 'localhost',
  database: 'db',
  user: 'user',
  password: 'password123'
}

// Tell production environment to look at environment variable for DB url
const productionDBConnection = process.env.DATABASE_URL || localPg

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './db/database.db3'
    },
    debug: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: productionDBConnection, //object or string
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  }

};
