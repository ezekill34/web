const sqlite3 = require('sqlite3').verbose();
const { DATABASE_FILE } = process.env;
const db = new sqlite3.Database(DATABASE_FILE || './data/petshop.db');
module.exports = db;