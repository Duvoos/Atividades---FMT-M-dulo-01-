let sumOfProducts = [0, 0, 0, 0, 0]; 

let option;
do {
  option = parseInt(
    prompt(
      "Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar Pedido"
    )
  ); 

  if (option < 1 || option > 6) { 
    
    alert("Opção inválida. Tente novamente.");
    break;
  }
  if (option === 6) { 
    break;
  }

  let quantity = parseInt(
    prompt(`Quantas unidades do produto você deseja comprar?`)
  ); 

  sumOfProducts[option - 1] += quantity;

} while (option != 6); 

if (sumOfProducts.length === 0) {
  alert("Você não comprou nenhum produto.");
} else {
  let greaterQuantity = 0;
  let indexGreaterQuantity = 0;

  
  for (let i = 0; i < sumOfProducts.length; i++) {
    
    if (sumOfProducts[i] > greaterQuantity) { 
      greaterQuantity = sumOfProducts[i];
      indexGreaterQuantity = i; 
    }
  }


  switch (indexGreaterQuantity + 1) {
    case 1:
      productName = "Hortifruti";
      break;
    case 2:
      productName = "Laticínios";
      break;
    case 3:
      productName = "Carnes";
      break;
    case 4:
      productName = "Peixes";
      break;
    case 5:
      productName = "Aves";
      break;
  }
  
  alert(`O produto com maior quantidade é ${productName}`);
}