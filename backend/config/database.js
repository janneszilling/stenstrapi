const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "mysql"),
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi"),
      uswer: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "root"),
    },
  },
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },
});
