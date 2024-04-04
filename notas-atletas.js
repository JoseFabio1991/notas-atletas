// Função para calcular a média das notas excluindo a maior e a menor nota
function calcularMedia(notas) {
    // Ordena as notas em ordem crescente
    notas = notas.sort(function(a, b){return a - b});
    // Remove a maior e a menor nota
    notas.splice(0, 1);
    notas.splice(-1, 1);
    // Calcula a média das notas restantes
    let soma = notas.reduce((total, nota) => total + nota, 0);
    let media = soma / notas.length;
    return media.toFixed(2); // Arredonda a média para duas casas decimais
  }
  
  // Função principal para processar os dados dos atletas
  function processarNotas(atletas) {
    // Percorre a matriz de objetos de atletas
    atletas.forEach(atleta => {
      let nome = atleta.nome;
      let notas = atleta.notas;
      let media = calcularMedia(notas);
      // Imprime os resultados para cada atleta
      console.log(`Atleta: ${nome}`);
      console.log(`Notas Obtidas: ${notas}`);
      console.log(`Média Válida: ${media}`);
      console.log("\n"); // Adiciona uma linha em branco para melhorar a legibilidade
    });
  }
  
  // Dados de entrada
  let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
  ];
  
  // Chamada da função principal para processar os dados dos atletas
  processarNotas(atletas);

  
  