const Database = require("./Database");
const db = new Database("json.sqlite", {
    path: "./",
    table: "json"
});

module.exports = () => db;