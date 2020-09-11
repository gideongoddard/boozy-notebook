process.env.PORT = 8081;
process.env.TEST_DATABASE = './test/test.sqlite';

const sqlite3 = require('sqlite3');

const testDb = new sqlite3.Database(process.env.TEST_DATABASE);