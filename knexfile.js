// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './db/database.db3'
    },
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

  // production: {
  //   client: 'pg',
  //   connection: productionDBConnection, //object or string
  //   migrations: {
  //     directory: './db/migrations',
  //   },
  //   seeds: {
  //     directory: './db/seeds',
  //   },
  // }

};
