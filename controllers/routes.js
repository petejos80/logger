var express = require('express');
var router = express.Router();
var logger = require('../models/logger.js');;

// Connect models with ORM
router.get('/', function(req, res){
    logger.all(function(logger_data){
        console.log(logger_data);
        res.render('index');
    })
})

module.exports = router;