const express = require('express');

//criando um servidor web através do express
const app = express();

//configurando uma requisição com o metodo get para 
// a raiz da aplicação
app.get("/", function(require, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message: "Resposta enviada em JSON"});
});

//EXERCICIO - CRIAR UMA NOVA ROTA/FUNCIONALIDADE PARA RECEBER UMA
//INFORMAÇÃO PELO CORPO DA REQUISIÇÃO

//EXERCICIO - CRIAR UMA NOVA ROTA/FUNCIONALIDADE PARA RECEBER UMA
//INFORMAÇÃO PELA URL DA REQUISIÇÃO

// O camando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
})