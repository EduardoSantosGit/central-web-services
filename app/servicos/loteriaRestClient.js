var restify = require('restify');

function LoteriaClient(){
   this._loteria = restify.createJsonClient({
     url: 'http://wsloterias.azurewebsites.net'
   });
}

LoteriaClient.prototype.buscaMegaSena = function(args,callback){
    this._loteria.get('/api/sorteio/getresultado/1/' + args.concurso ,callback);
}


module.exports = function(){
  return LoteriaClient;
}
