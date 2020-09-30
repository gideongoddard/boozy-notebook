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

describe('User clicks button to add a drink', function() {
    this.timeout(10000);

    beforeEach(async function() {
        browser = await puppeteer.launch({timeout: 10000});
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    })

    afterEach( async function() {
        await browser.close();
    })

    it('should open the form for adding drinks', async function() {
        // await page.click('#add-drink-2', {clickCount: 1});
        await page.evaluate(() => {
            document.querySelector('#add-drink').click();
        })
        const formHeading = await page.$eval('h1', heading => heading.innerText);
        assert.equal(formHeading, 'What are you drinking?');
    })
})