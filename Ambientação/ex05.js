const v1 = Math.floor(Math.random() * 100);
console.clear();

console.log(v1);

let soma = 0
let anterior = 0
let proximo = 1

for(let i = 0; i < v1; i++){
    soma = anterior + proximo
    anterior = proximo
    proximo = soma
    console.log(`Fibonacci de ${v1}: ${anterior}`)
}


