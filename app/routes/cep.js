module.exports = function(app){

  app.post('/cep', function(req,res){

      var dadosEntrada = req.body;
      console.log(dadosEntrada);
      var cepRestClient = new app.servicos.cepRestClient();
      cepRestClient.buscaCep(dadosEntrada,function(exception,request,response,retorno){
        console.log('controller' + JSON.stringify(retorno));

        if(exception){
          res.status(500).send(exception);
          return;
        } else {
          res.status(200).json(retorno);
        }

      });
  });

}
