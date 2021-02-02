# Quick.DB
The hackable **[quick.db](https://npmjs.com/package/quick.db)**.

# Under Development
🚧

> **You can easily switch between this library and quick.db if you are using `json.sqlite` file as database.**

# Examples
## Getting Started

```js
const { Database } = require("@devsnowflake/quick.db");
const db = new Database(); // you can also specify custom path/name

// add some data
db.set("foo", "bar");
db.set("hello", "world");

// log all data. You can also use db.all()
for (const data of db) {
    console.log(data);
}
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
This db behaves like quick.db where you cannot specify custom path/default table while creating your database.

```js
const db = require("@devsnowflake/quick.db").static();

db.set("foo", "bar");

console.log(db.get("foo"));
```

# Quick.db API
- db.all()
- db.fetchAll()
- db.add()
- db.delete()
- db.fetch()
- db.get()
- db.set()
- db.subtract()
- db.has()
- db.type()
- db.push()

# Non-quick.db API
## Methods
- db.find()
- db.some()
- db.map()
- db.flatMap()
- db.forEach()
- db.every()
- db.findIndex()
- db.indexOf()
- db.reduce()
- db.reduceRight()
- db.sort()
- db.tables()
- db.createTable()
- db.drop()
- db.keyArray()
- db.valueArray()
- db.array()
- db.divide()
- db.multiply()
- db.modulus()
- db.startsWith()
- db.endsWith()
- db.pull()
- db.deleteAll()
- db.size()
- db.eval()
- db.prepareTable()

## Properties
- db.database
- db.rowCount
- db.path
- db.name
- db.tableName
- db.length

# Join our Discord Server
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)