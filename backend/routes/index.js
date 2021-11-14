var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express by โอ็ตเองไม่ใช่โอ๊ตเอ็น' });
});

module.exports = router;
