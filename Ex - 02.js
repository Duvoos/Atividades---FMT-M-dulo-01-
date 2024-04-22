function imparoupar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par";
    } else {
        return "O número " + numero + " é ímpar";
    }
}

let numero = 17;
console.log(imparoupar(numero));