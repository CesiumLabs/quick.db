const Database = require("./Database");

// lazy load db to make only one instance for static
let db;

/**
 * Satic quick.db
 * @returns {Database}
 */
module.exports = () => {
    if (!db) db = new Database("json.sqlite", {
        path: "./",
        table: "json"
    });

    return db;
};