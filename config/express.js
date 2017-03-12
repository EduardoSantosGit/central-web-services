var express = require('express');
var consign = require('consign');

module.exports = function(){
  var app = express();

  app.use(express.static('./public'));

  consign({cwd: 'app'})
        .include('routes')
        .then('servicos')
        .into('app');

        return app;

};
