# On Demand Lowdb
Very simple wrapper for [lowdb](https://www.npmjs.com/package/lowdb). It lets you create and access multiple `.json` files using lowdb on the fly.

- Simple and clean syntax.
- Automatically creates files/folders for you.
- Returns the full `lowdb` instance.

## Usage
```js
const db = require("odlowdb");

// store in data/db/people.json
db("data/db/people")
  .get("members")
  .push({name: "Bob", age: 21})
  .write()

// store in data/config.json
// with default values if file doesn't exist
db("data/config", {a: 234, b: 5})
  .get("a")
  .value() // 234
```

For more info on how to use it, check [lowdb](https://www.npmjs.com/package/lowdb)!