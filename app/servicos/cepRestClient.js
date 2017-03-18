var restify = require('restify');

function CepClient(){
   this._cep = restify.createJsonClient({
     url: 'http://viacep.com.br'
   });
}

CepClient.prototype.buscaCep = function(args,callback){
    this._cep.get('/ws/'+ args.cep +'/json/',callback);
}


module.exports = function(){
  return CepClient;
}
