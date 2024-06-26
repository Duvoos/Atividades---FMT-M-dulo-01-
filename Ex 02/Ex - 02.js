
// EXERCÍCIO 02 SEMANA 06

/* Neste código JavaScript, há uma função getUserInfo() que retorna uma Promise. 
Essa função simula uma operação assíncrona com setTimeout(), que é executada após 2 segundos. 
Dentro do setTimeout(), um objeto de usuário com propriedades como nome, idade e email
 é criado e passado para a função resolve() da Promise. */

 function getUserInfo() {
    return new Promise((resolve, reject) => { // => Cria uma nova instância de Promise, que recebe duas funções de retorno de chamada:
      setTimeout(() => {                       //resolve e reject. Dentro desta Promise, uma operação assíncrona (simulada com setTimeout()) é realizada.
        let user = {
          nome: "Eduardo Voos",
          idade: 22,
          email: "eduardovoos07@gmail.com",
        };
        resolve(user);
      }, 2000);
    });
  }

    async function mostrarInfoUsuario() {
    try {
    const userInfo = await getUserInfo();
    
    console.log("Informações do usuário:");
    console.log("Nome:", userInfo.nome);
    console.log("Idade:", userInfo.idade);
    console.log("Email:", userInfo.email);
    } catch (error) {
    console.error("Ocorreu um erro ao obter as informações do usuário:", error);
    }
    }
    
    mostrarInfoUsuario();