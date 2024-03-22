// INÍCIO EXERCÍCIO 03 - S05
const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1} número é ${numeros[i]}`)
}
// FIM EXERCÍCIO 03


// INÍCIO EXERCÍCIO 04 - S05
const soma = numeros.reduce((somador, valorAtual) => {
  return somador + valorAtual
}, 0)

console.log("A soma dos números é ", soma)
// FIM EXERCÍCIO 04 


// INÍCIO EXERCÍCIO 05 - S05
const numerosOrdenados = [...numeros]
//                                            
numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)
console.log(`A ordenados dos números é ${numerosOrdenados}`)
//o sort coloca os numeros em ordem atraz da subtração dos numeros, no caso ele ve se vai ser negativo ou positivo.

// FIM EXERCÍCIO 05

// INÍCIO EXERCÍCIO 06 - S05

const pares = numeros.filter(valorAtual => {
  if(valorAtual % 2 == 0){
    return true
  }
})

console.log("O array com os números pares é ", pares)

// FIM EXERCÍCIO 06

// INÍCIO EXERCÍCIO 07 - S05

const quadrados = numeros.map(numeroatual => numeroatual * numeroatual)

console.log("O quadrado dos números do array é  ", quadrados)

// FIM EXERCÍCIO 07