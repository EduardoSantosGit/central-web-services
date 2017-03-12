var soap = require('soap');

function correiosSOAPClient(){
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

correiosSOAPClient.prototype.CalcPrazo = function(args,callback){
      soap.createClient(this._url, function(erro,client){
            client.CalcPrazo(args,callback);
      });
};

correiosSOAPClient.prototype.CalcPrazoData = function(args,callback){

    soap.createClient(this._url, function(erro,client){
        client.CalcPrazoData(args,callback);
    });
};


module.exports = function(){
  return correiosSOAPClient;
}
