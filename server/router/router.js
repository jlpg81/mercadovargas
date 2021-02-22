var express = require('express');
var router = express.Router();

const {mainView} = require('../controllers/controllers')

router.get('/', mainView);



module.exports = router;
