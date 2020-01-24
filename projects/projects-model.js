const db = require("../data/db-config");

function find(table) {
  return db(table);
}

function insert(table, data) {
  return db(table).insert(data);
}

function findTasks(id) {
  return db("tasks as t")
    .join("projects as p", "t.projectid", "p.id")
    .select(
      "t.description as TaskDescrption",
      "Notes",
      "Name as ProjectName",
      "p.Description as ProjectDescription",
      "t.completed as IsTaskCompleted",
      "p.completed as IsProjectCompleted"
    )
    .where("t.projectid", id);
}

module.exports = {
  find,
  insert,
  findTasks
};
