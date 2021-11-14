var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express by โอ็ตเองไม่ใช่โอ๊ตเอ็น' });
});

router.get('/get_data', function (req, res, next) {
  let query = 'select * from article'

  res.send({ name: "oat index get data" });

});

module.exports = router;
