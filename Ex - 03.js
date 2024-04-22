const numeros = (exertrello)=>{
    let soma = 0;
        for(let numero of exertrello){
            soma += numero;
        }
    let media = soma/exertrello.length;
    return media;
    }

    let arrayNumeros = [ 10,10,10,10];
    console.log(numeros(exertrelloNumeros));