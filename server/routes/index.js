
const express = require('express');
const router = express.Router();


router.use(express.static(__dirname + '/../../client'));

/* GET index.html (client) */
router.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

module.exports = router;