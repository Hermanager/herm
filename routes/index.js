var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'herm: Bringing Women Together' });
});
// router.get('/index', function (req, res) {
//     res.render('index', { title: 'herm: Bringing Women Together' });
// });

router.get('/about', function (req, res) {
    res.render('aboutus', { title: 'herm: Bringing Women Together' });
});

module.exports = router;