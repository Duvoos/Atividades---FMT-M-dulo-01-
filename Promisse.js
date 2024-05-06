function verificarPar(numero) { //function: Define uma função chamada verificarPar que aceita um parâmetro numero.
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve("Sucesso: número informado é par");
      } else {
        reject(new Error("Error: número informado é ímpar"));
      }
    });
  }

  const numero = 4;
  
  verificarPar(numero)
    .then(mensagem => {
      console.log(mensagem); //Sucesso: número informado é par ==== .then(): Método para lidar com o sucesso da Promise.
    })                       // Se a Promise for resolvida (ou seja, o número é par), a função de retorno de chamada passada para .then() é chamada.
    .catch(error => {
      console.error(error.message); //Error: número informado é ímpar ==== //.catch(): Método para lidar com falhas na Promise.
    });                             // Se a Promise for rejeitada (ou seja, o número é ímpar), a função de retorno de chamada passada para .catch() é chamada.
                

    //O código então invoca a função verificarPar com o número 4 e lida com o resultado usando .then() para sucesso e .catch() para falha.

