# Quick.DB
The hackable **[quick.db](https://npmjs.com/package/quick.db)**.

> **You can easily switch between this library and quick.db if you are using `json.sqlite` file as database.**

# Features
- Beginner friendly
- Custom database file
- More control over your database
- More utility methods
- Simple and easy to use
- Based on original quick.db
- Key value based
- Easy to migrate from/to quick.db
- ~~Definitely not for professional people~~

# Examples
## Getting Started

```js
const { Database } = require("@devsnowflake/quick.db");
const db = new Database("./data/storage.db", { path: "./data", table: "ROOT" }); // you can also specify custom path/name

// add some data
db.set("foo", "bar");
db.set("hello", "world");

// log all data. You can also use db.all()
for (const data of db) {
    console.log(data);
}
```

## Basic Example

```js
// Setting an object in the database:
console.log(db.set('userInfo', { difficulty: 'Easy' }))
// -> { difficulty: 'Easy' }

// Pushing an element to an array (that doesn't exist yet) in an object:
console.log(db.push('userInfo.items', 'Sword'))
// -> { difficulty: 'Easy', items: ['Sword'] }

// Adding to a number (that doesn't exist yet) in an object:
console.log(db.add('userInfo.balance', 500))
// -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

// Repeating previous examples:
console.log(db.push('userInfo.items', 'Watch'))
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
console.log(db.add('userInfo.balance', 500))
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

// Fetching individual properties
console.log(db.get('userInfo.balance')) // -> 1000
console.log(db.get('userInfo.items')) // ['Sword', 'Watch']
```

## Creating a table

```js
const mytable = db.createTable("tableName");

db.set("foo", "bar");
mytable.set("foo", 123);

db.get("foo"); // bar
mytable.get("foo"); // 123
```

## List all tables

```js
const tables = db.tables();
console.log(tables);
// { count: 2, tables: [ 'JSON', 'tableName' ] }
```

## Executing SQL query

```js
const sqlite = db.database;

const statement = sqlite.prepare("SELECT * FROM JSON WHERE ID IS NOT NULL");

for (const item of statement.iterate()) {
    console.log(item);
}
```

## Static usage
This db behaves like quick.db.

### Basic Example

```js
const db = require("@devsnowflake/quick.db").static();

db.set("foo", "bar");

console.log(db.get("foo"));
```

### Or custom name

```js
const db = require("@devsnowflake/quick.db").static("./json.db");

db.set("foo", "bar");

console.log(db.get("foo"));
```

# Quick.db API
## db.all(options)
This method returns currently used table (or specified table) as array.

## db.fetchAll(options)
Alias of `db.all()`.

## db.add(key, number, options)
This method can be used for addition (numbers).

## db.delete(key, options)
This method can be used to remove specific data with its key.

## db.fetch(key, options)
This method can be used to get data from the database.

## db.get(key, options)
Alias of `db.fetch`.

## db.set(key, value, options)
This method can be used to update existing data or add new data.

## db.subtract(key, number, options)
Similar to `db.add`, this method can be used for subtraction.

## db.has(key, options)
Returns true if it finds the requested key in the database.

## db.type(key, options)
Returns data type of the value assigned to this key.

## db.push(key, valueOrValues)
This method can be used to push the data (Similar to `Array.prototype.push`).

# Non-quick.db API
## Methods
### db.find(fn, options)
Similar to `Array.prototype.find`.

### db.some(fn, options)
Similar to `Array.prototype.some`.

### db.map(fn, options)
Similar to `Array.prototype.map`.

### db.flatMap(fn, options)
Similar to `Array.prototype.flatMap`.

### db.forEach(fn, options)
Similar to `Array.prototype.forEach`.

### db.every(fn, options)
Similar to `Array.prototype.every`.

### db.findIndex(fn, options)
Similar to `Array.prototype.findIndex`.

### db.indexOf(searchElement, fromIndex)
Similar to `Array.prototype.indexOf`.

### db.reduce(fn, options)
Similar to `Array.prototype.reduce`.

### db.reduceRight(fn, options)
Similar to `Array.prototype.reduceRight`.

### db.sort(fn, options)
Similar to `Array.prototype.sort`.

### db.tables()
Returns all table name.

### db.createTable(name)
If not available, creates a new table with the given name otherwise uses existing table and returns new database with that table as root table.

### db.drop(options)
Drops current table or specified table.

### db.keyArray(options)
Returns array of keys.

### db.valueArray(options)
Returns array of values.

### db.array()
Returns array of this table.

### db.divide(key, number, options)
Division for existing data with the given number.

### db.multiply(key, number, options)
Multiplication for existing data with the given number.

### db.modulus(key, number, options)
Modulus for existing data with the given number.

### db.startsWith(key, options)
Similar to `db.all` but easier method to sort by key.

### db.endsWith(key, options)
Similar to `db.all` but easier method to sort by key.

### db.pull(key, itemOrItems, options)
Used to pull data from the array stored inside the database. (Reverse `.push`)

### db.deleteAll(options)
Deletes all data from the specified table.

### db.size()
File size of this db.

### db.eval(x)
Allows you to evaluate anything inside `Database` class using `this`.

### db.prepareTable(name)
A method that just creates table rather than returning new database.

### db.export(options)
Exports database into json data.

### db.use(database)
This method updates current database manager with a new one. Database parameter can either be `Database` instance or `BetterSQLite3.Database` instance.

### db.allTableArray()
Returns array of all tables with their table name.

### db.flat()
This method is similar to `db.allTableArray` but returns whole data as single array (like `db.all`).

## Properties
### db.database
Current database manager.

### db.rowCount
Number of rows in this table.

### db.path
Database path.

### db.name
Database file name.

### db.tableName
Root table name used while instantiating this database.

### db.length
Alias of `db.rowCount`.

# Join our Discord Server
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)