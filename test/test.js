process.env.PORT = 8081;
process.env.TEST_DATABASE = './test/test.sqlite';

const puppeteer = require('puppeteer');
const sqlite3 = require('sqlite3');
const {assert, expect} = require('chai');

const testDb = new sqlite3.Database(process.env.TEST_DATABASE);
let browser;
let page;

// FEATURE TESTS
describe('User visits the app', function() {
    this.timeout(10000);

    beforeEach( async function() {
        browser = await puppeteer.launch({timeout: 10000});
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    })

    afterEach( async function() {
        await browser.close();
    })

    it('should have a main heading describing what it is', async function() {
        const h1 = await page.$eval('h1', heading => heading.innerText);
        assert.equal(h1, 'Boozy Notebook');
    })
})