let nome = prompt("Digite aqui seu nome");

console.log(`O nome digitado foi ${nome}`);

alert(`olá seja bem vindo,${nome}!!!`);

let entrada = prompt("Digite um número:");

if(entrada.trim()){
    let numero = Number(entrada);
    if(numero > 15){
        console.log("Número maior que quinze.");
    }
    else if(numero < 15){
        console.log("Número menor que quinze.");
    }
    else if(numero === 15){
        console.log("Número igual a quinze.");
    }
    else{
        console.log("Valor invalido.");
    }
}
else{
    console.log("Nenhum valar digitado.");
}




