var express = require('express');
var router = express.Router();
var logger = require('../models/logger.js');;

// Connect models with ORM
router.get('/', function(req, res){
    logger.all(function(logger_data){
        console.log(logger_data);
        res.render('index', {logger_data});
    });
});

router.put('/loggers/update', function(req,res){
    logger.update(req.body.logger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/loggers/create', function(req,res) {
    logger.create(req.body.logger_name, function(result){
        res.redirect('/');
    })
})

module.exports = router;