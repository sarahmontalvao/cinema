function buscarFilmes() {
  return fetch('http://localhost/cinema/tickets.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; // Retornando os dados dos filmes
    })
    .catch(error => {
      console.error('Erro ao buscar filmes:', error);
    });
}
export default buscarFilmes