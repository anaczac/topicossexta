const express = require('express');

//Criando um servidor web através do express
const app = express();

//configurar a aplicação para receber dados no formato json
app.use(express.json());

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
app.get("/", function(request, response){
    response.status(200).json({ message : "Reposta enviada em JSON"});
});

//EXERCICIO - CRIAR UMA NOVA ROTA/FUNCIONALIDADE PARA RECEBER UMA
//INFORMAÇÃO PELO CORPO DA REQUISIÇÃO
//POSTMAN, INSOMNIA e RESTCLIENT
app.get("/:categoria/:produto", (request, response) => { // pode ser feito assim também, o => substitui o function
    // const produto = request.params.produto;
    // const categoria = request.params.categoria;    // ou
    const { produto, categoria} = request.params;
    console.log(produto, categoria);
    response.status(200).json({message : "Categoria: " + categoria + " Produto: " + produto});
    // console.log(request.params.produto, request.params.categoria);
})

app.post("/", (request, response) => {
    console.log(request.body);
    response.status(201).json({ message : "Categoria cadastrada!", categoria : request.body});
});

// O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000.");
});