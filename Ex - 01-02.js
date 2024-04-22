//Exercio 01 - S05

// const frutas = ["Amora", "Limão", "Morango"]
// console.log(frutas[1])

// Desafio 

const prompt = require("prompt-sync")()
const frutas = []

for(let i = 0; i < 3; i++){
    frutas.push(prompt("Digite o nome de uma frutas: "))
}
//  console.log(frutas[1])

 // Fim do exercício 01

 // INICIO DO EXERCÍCIO 02 - S05

 frutas.push(prompt("Digite uma frutas adicional: "))
frutas.shift()

console.log(frutas)

// FIM