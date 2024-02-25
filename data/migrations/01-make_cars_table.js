const { table } = require("console");

exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 128).notNullable()

    tbl.string('model', 128).notNullable()

    tbl.numeric('mileage').notNullable()

    tbl.string('title', 128).defaultTo('gotta figure this out!')

    tbl.string('transmission', 128).defaultTo('gotta figure this out!')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
