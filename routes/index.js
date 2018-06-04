var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'herm: Bringing Women Together' });
});

module.exports = router;