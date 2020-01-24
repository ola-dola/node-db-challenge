const db = require("../data/db-config");

function find(table) {
  return db(table);
}

function insert(table, data) {
  return db(table).insert(data);
}

module.exports = {
  find,
  insert
};
