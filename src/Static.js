const Database = require("./Database");
const db = new Database("json.sqlite", {
    path: "./",
    table: "json"
});

db.prototype.table = db.createTable;

module.exports = db;