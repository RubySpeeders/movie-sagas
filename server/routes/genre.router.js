const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500);
});

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT "genres".name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genres_id
  JOIN "movies" ON "movies_genres".movies_id = "movies".id
  WHERE "movies".id = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing genres details', err);
      res.sendStatus(500);
    });
});

module.exports = router;
