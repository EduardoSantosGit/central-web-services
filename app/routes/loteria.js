module.exports = function(app){


    app.post('/loteria', function(req,res){

        var dadosEntrada = req.body;
        console.log(dadosEntrada);

        var loteriaRestClient = new app.servicos.loteriaRestClient();
        loteriaRestClient.buscaMegaSena(dadosEntrada,function(exception,request,response,retorno){

          if(exception){
            res.status(500).send(exception);
            return;
          } else {
            res.status(200).json(retorno);
          }

        });
    });


};
