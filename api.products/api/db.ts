import Knex from 'knex';

const db = Knex({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST || '0.0.0.0',
    port: Number(process.env.MYSQL_PORT) || 3307,
    user: process.env.MYSQL_USER || 'interviewer',
    password: process.env.MYSQL_PASSWORD || 'changeme',
    database: 'marz',
  }
});

export default db;