const express = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');
const beerRouter = express.Router();

// Params
beerRouter.param('beerId', (req, res, next, beerId) => {
    const sql = `SELECT * FROM Beer WHERE id = $beerId`;
    const values = {$beerId: beerId};

    db.get(sql, values, (err, row) => {
        if (err) {
            next(err);
        } else if (row) {
            req.beer = row;
            next();
        } else {
            res.sendStatus(404);
        }
    })
})

// /api/beer
beerRouter.get('/', (req, res, next) => {
    const sql = `SELECT * FROM Beer`;

    db.all(sql, (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({beers: rows});
        }
    })
})

beerRouter.post('/', (req, res, next) => {
    const name = req.body.beer.name;
    const brewery = req.body.beer.brewery;
    const rating = req.body.beer.rating;
    const sql = `INSERT INTO Beer (name, brewery, rating)
    VALUES ($name, $brewery, $rating)`;
    const values = {
        $name: name,
        $brewery: brewery,
        $rating: rating
    }

    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Beer WHERE id = ${this.lastID}`, (err, row) => {
                if (err) {
                    next(err);
                } else {
                    res.status(201).json({beer: row});
                }
            });
        }
    })
})

// /api/beer/:beerId
beerRouter.get('/:beerId', (req, res, next) => {
    res.status(200).json({beer: req.beer});
})

beerRouter.put('/:beerId', (req, res, next) => {
    const name = req.body.beer.name;
    const brewery = req.body.beer.brewery;
    const rating = req.body.beer.rating;
    const sql = `UPDATE Beer SET name = $name, brewery = $brewery, rating = $rating WHERE id = $beerId`;
    const values = {
        $name: name,
        $brewery: brewery,
        $rating: rating,
        $beerId: req.params.beerId
    }

    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Beer WHERE id = ${req.params.beerId}`, (err, row) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({beer: row});
                }
            });
        }
    })
})

beerRouter.delete('/:beerId', (req, res, next) => {
    const sql = `DELETE FROM Beer WHERE id = $beerId`;
    const values = {$beerId: req.params.beerId};

    db.run(sql, values, (err) => {
        if (err) {
            next(err);
        } else {
            res.sendStatus(204);
        }
    })
})

module.exports = beerRouter;