const path = require("path");
const fs = require("fs");

const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

module.exports = function getLowdb(dbPath, defaults = {}) {
  let separated = dbPath.split("/");
  let name = separated.pop();
  let joined = separated.join("/");

  let dirPath = path.join(__dirname, joined);
  let fullPath = path.join(dirPath, name + ".json");

  try {
    if (!fs.existsSync(fullPath)) {
      fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) throw err;
      });

      fs.writeFileSync(fullPath, JSON.stringify(defaults, null, 2));
    }
  } catch(err) {
    console.error(err)
  }

  return low(new FileSync(fullPath));
}