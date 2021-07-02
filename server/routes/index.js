const express = require('express');
const db = require('../db');

const router = express.Router();

 router.get('/', async (req, res, next) =>  {

    try {
         let results = await db.all(res);
         res.json(results);
    } catch {
        res.sendStatus(50);
    }
  
});

module.exports = router;