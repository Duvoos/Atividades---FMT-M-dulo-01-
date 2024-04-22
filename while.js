let totalRuins = 43;
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a sua avaliação para a série stranger things? (bom), (ruim) ou (excelente)");
    if(resposta == "ruim" ) {
        totalRuins++;
    }

    contador++;
}

console.log(`Total de usuários que avaliou a série como ruim: ${totalRuins}`);



