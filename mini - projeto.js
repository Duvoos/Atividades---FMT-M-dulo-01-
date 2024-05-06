// Exercicio 01 SEMANA 07
class Produto {
  nome;
  preco;
  quantidade;

  // Exercicio 02 SEMANA 07
  constructor(valorNome, valorPreco, valorQuantidade) {
    this.nome = valorNome;
    this.preco = valorPreco;
    this.quantidade = valorQuantidade;
  }

  //Exercicio 03 SEMANA 07
  Vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade) {
      console.log("Estoque Insuficiente");
      console.log(`Existem apenas ${this.quantidade} unidades disponíveis.`);
      return;
    }
    this.quantidade -= quantidadeVendida;
  }

  // Exercicio 04 SEMANA 07
  Repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
  }

  // Exercicio 05 SEMANA 07
  MostrarEstoque() {
    console.log(
      `O produto ${this.nome} custa R$${this.preco} e possui ${this.quantidade} unidades disponíveis.\n`
    );
  }

  //Exercicio 06 SEMANA 07
  AtualizarPreco(novoValor) {
    this.preco = novoValor;
  }
}

// Exercicio 07 SEMANA 07
class Pessoa {
  nome;
  idade;
  profissao;

  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

// Exercicio 08 SEMANA 07
class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }

  MostrarDadosCliente() {
    console.log(
      `Dados do cliente: \nNome: ${this.nome}\nIdade: ${this.idade}\nProfissão: ${this.profissao}\nTelefone: ${this.telefone}\nEmail: ${this.email}\nCliente Desde: ${this.clienteDesde}`
    );
  }
}

cliente.MostrarDadosCliente();