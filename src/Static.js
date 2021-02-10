const Database = require("./Database");

// lazy load db to make only one instance for static
let db;

/**
 * Satic quick.db
 * @param {string} [name] Database name
 * @param {string} [path] Database path
 * @param {string} [table] Database table name
 * @returns {Database}
 */
module.exports = (name, path, table) => {
    if (!db) db = new Database(name || "json.sqlite", {
        path: path || "./",
        table: table || "JSON"
    });

    return db;
};