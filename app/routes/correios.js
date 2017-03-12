module.exports = function(app){

    app.post('/correios/calculaPrazoDias', function(req,res){
        var dadosEntrada = req.body;
        var correiosSOAPClient = new app.servicos.correiosSOAPClient();
        correiosSOAPClient.CalcPrazo(dadosEntrada, function(erro,resultado){
            if(erro){
              res.status(500).send(erro);
              return;
            } else {
              console.log(JSON.stringify(resultado));
              res.status(200).json(resultado);
            }
        });
    });

  app.post('/correios/calculaPrazoData', function(req,res){

      var dadosEntrada = req.body;
      var correiosSOAPClient = new app.servicos.correiosSOAPClient();
      correiosSOAPClient.CalcPrazoData(dadosEntrada, function(erro,resultado){
          if(erro){
            res.status(500).send(erro);
          } else {
            console.log(JSON.stringify(resultado));
            res.status(200).json(resultado);
          }
      });

  });

};
