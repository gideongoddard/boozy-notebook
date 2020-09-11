const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Beer (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        brewery TEXT NOT NULL,
        rating INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Wine (
        id INTEGER PRIMARY KEY NOT NULL,
        vineyard TEXT NOT NULL,
        grape TEXT NOT NULL,
        rating INTEGER NOT NULL
    )`);
}) 