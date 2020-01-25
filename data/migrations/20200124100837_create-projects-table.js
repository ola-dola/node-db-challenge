exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("Name", 128)
        .unique()
        .notNullable();
      tbl.text("Description");
      tbl.boolean("Completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("Name", 128)
        .unique()
        .notNullable();
      tbl.text("Description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("Description").notNullable();
      tbl.text("Notes");
      tbl.boolean("Completed").defaultTo(false);
      tbl
        .integer("ProjectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ResourceID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
