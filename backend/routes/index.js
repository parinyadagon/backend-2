var express = require('express');
// const article = require('../models/article');
var router = express.Router();
const db = require('../models/index');
const { article } = db


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express by โอ็ตเองไม่ใช่โอ๊ตเอ็น' });
});

router.post('/get_data', async function (req, res, next) {
  try {
    const data = await article.findAll();
    console.log("data", data);
    res.json(query);

  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
