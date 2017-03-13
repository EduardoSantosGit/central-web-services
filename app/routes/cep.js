module.exports = function(app){

  app.post('/cep', function(req,res){

      var dadosEntrada = '';//req.body;
      console.log('chegou');
      var cepRestClient = new app.servicos.cepRestClient();
      cepRestClient.buscaCep(dadosEntrada,function(callback){

              console.log(callback);
          
      });

  });

}
