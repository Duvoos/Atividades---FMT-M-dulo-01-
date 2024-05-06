function salvarInformacoesUsuario() {
    // Pedir informações ao usuário
   let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
   let email = prompt("Digite seu email:");
  
    // Criar um objeto com as informações fornecidas
    const usuario = {
      nome: nome,
      idade: idade,
      email: email
    };
  
    // Converter o objeto para JSON
    const usuarioJSON = JSON.stringify(usuario);
  
    // Salvar o objeto no localStorage com a chave "user"
    localStorage.setItem("user", usuarioJSON);
  
    console.log("Informações do usuário foram salvas com sucesso no localStorage.");
  }
  
  // Chamar a função para salvar as informações do usuário
  salvarInformacoesUsuario();