var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.use(express.static('./public'));

  //middlewares
  app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

  consign({cwd: 'app'})
        .include('routes')
        .then('servicos')
        .into(app);

        return app;

};
