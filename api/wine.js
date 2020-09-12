const express = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');
const wineRouter = express.Router();

// Params
wineRouter.param('wineId', (req, res, next, wineId) => {
    const sql = `SELECT * FROM Wine WHERE id = $wineId`;
    const values = {$wineId: wineId};

    db.get(sql, values, (err, row) => {
        if (err) {
            next(err);
        } else if (row) {
            req.wine = row;
            next();
        } else {
            res.sendStatus(404);
        }
    })
})

// /api/wine
wineRouter.get('/', (req, res, next) => {
    const sql = `SELECT * FROM Wine`;

    db.all(sql, (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({wines: rows});
        }
    })
})

wineRouter.post('/', (req, res, next) => {
    const vineyard = req.body.wine.vineyard;
    const grape = req.body.wine.grape;
    const rating = req.body.wine.rating;
    const sql = `INSERT INTO Wine (vineyard, grape, rating)
    VALUES ($vineyard, $grape, $rating)`;
    const values = {
        $vineyard: vineyard,
        $grape: grape,
        $rating: rating
    }

    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Wine WHERE id = ${this.lastID}`, (err, row) => {
                if (err) {
                    next(err);
                } else {
                    res.status(201).json({wine: row});
                }
            });
        }
    })
})

// /api/wine/:wineId
wineRouter.get('/:wineId', (req, res, next) => {
    res.status(200).json({wine: req.wine});
})

wineRouter.put('/:wineId', (req, res, next) => {
    const vineyard = req.body.wine.vineyard;
    const grape = req.body.wine.grape;
    const rating = req.body.wine.rating;
    const sql = `UPDATE Wine SET vineyard = $vineyard, grape = $grape, rating = $rating WHERE id = $wineId`;
    const values = {
        $vineyard: vineyard,
        $grape: grape,
        $rating: rating,
        $wineId: req.params.wineId
    }

    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Wine WHERE id = ${req.params.wineId}`, (err, row) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({wine: row});
                }
            });
        }
    })
})

wineRouter.delete('/:wineId', (req, res, next) => {
    const sql = `DELETE FROM Wine WHERE id = $wineId`;
    const values = {$wineId: req.params.wineId};

    db.run(sql, values, (err) => {
        if (err) {
            next(err);
        } else {
            res.sendStatus(204);
        }
    })
})

module.exports = wineRouter;