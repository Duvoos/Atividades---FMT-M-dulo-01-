fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => {
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao obter as imagens');
    }
    // Converte a resposta para JSON e retorna
    return response.json();
  })
  .then(data => {
    // Itera sobre a lista de imagens
    data.forEach(imagem => {
      // Imprime a tag <img> com a URL da imagem
      document.write(`<img src='${imagem.url}' width='200'/> <br />`);
    });
  })
  .catch(error => {
    // Trata erros
    console.error('Ocorreu um erro:', error);
  });