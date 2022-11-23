
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;

// var canvas = document.getElementById('canvas')
// var context = canvas.getContext('2d')

// var Player = require('../public/javascripts/Player')

// var player = new Player()
// player.testme()