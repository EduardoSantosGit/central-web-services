var restity = require('restify');

function CepClient(){
   this._cep = restity.createJsonClient({
     url: 'viacep.com.br'
   });
}

CepClient.prototype.buscaCep = function(args,callback){
    this._cep.get('/ws/01001000/json/', callback);
    console.log(callback);
}


module.exports = function(){
  return CepClient;
}
