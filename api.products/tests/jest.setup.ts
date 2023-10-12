import Knex, { Knex as KnexInterface } from 'knex';
import { Model, transaction } from 'objection';

declare global {
  var knex: KnexInterface;
  var txn: any;
}

global.beforeAll(async () => {
  global.knex = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
  });
  await knex.schema.createTable('Product', (table: any) => {
    table.increments('ProductID').primary();
    table.string('ProductName');
    table.string('ProductPhotoURL');
    table.enum('ProductStatus', ['Active', 'InActive']).defaultTo('InActive');
  });
});

global.beforeEach(async () => {
  global.txn = await transaction.start(knex);
  Model.knex(global.txn);
});

global.afterEach(async () => {
  await global.txn.rollback();
  Model.knex(knex);
});

global.afterAll(async () => {
  await knex.destroy();
});