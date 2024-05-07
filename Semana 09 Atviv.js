// Inicio Exercicio 01 Semana 09

const express = require("express"); 
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Entrou aqui");
  res.send("Hello World!");
}); 

// Fim do Exercicio 01

// Inicio Exercicio 02

app.get("/sobre", (req, res) => {
  res.send("Aqui é a pagina SOBRE"); 
});

app.get("/contato", (req, res) => {
  res.send("Aqui é a pagina CONTATO");
}); 

// Fim do Exercicio 02

const logHoraMiddleware = (req, res, next) => {
    
  // Inicio Exercicio 03 

  const horaAtual = new Date().toISOString();
  console.log(
    `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
  );
  next();
};

app.use(logHoraMiddleware);

//Fim do Exercicio 03

app.get("/produto/:id", (req, res) => {

  // inicio do Exercicio 04

  const id = req.params.id;
  res.status(200).send(`ID do produto: ${id}`);
}); 

// Fim do Exercicio 04

app.get("/", (req, res) => {

  // inicio do Exercicio 05

  res.sendFile(__dirname + "/public/index.html");
}); 

// Fim do Exercicio 05

// inicio do Exercicio 06

let users = [];
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("Usuário não encontrado!");
    return;
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push(user);
  res.status(201).send(`Usuário adicionado com sucesso!`);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) {
    res.status(404).setDefaultEncoding("Usuário não encontrado!");
    return;
  }
  users[index] = { ...users[index], ...newData };
  res.status(200).send("Usuário atualizado com sucesso!");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) {
    res.status(404).send("Usuário não encontrado!");
    return;
  }
  users.splice(index, 1);
  res.status(200).send("Usuário deletado com sucesso!");
});

//fim do exercicio 06

app.listen(PORT, () => {
  console.log(`App online na porta ${PORT}`);
});