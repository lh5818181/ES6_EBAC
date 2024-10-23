"use strict";

var redesSociais = ['Instagram', 'Facebook', 'Twitter']; // Define um array com nomes de redes sociais

for (var i = 0; i < redesSociais.length; i++) {
  // Loop para iterar sobre o array
  console.log("Eu tenho perfil na rede social ".concat(redesSociais[i])); // Imprime no console a frase com o nome da rede social atual
}
redesSociais.forEach(function (nomeDaRede, indice) {
  // Itera sobre o array usando forEach
  console.log("#".concat(indice, " Eu tenho perfil na rede social ").concat(nomeDaRede)); // Imprime no console o índice e o nome da rede social atual
});
var alunos = ['gustavo', 'paulo', 'luan', 'mathew']; // Define um array com nomes de alunos

var alunos2 = alunos.map(function (itemAtual) {
  // Cria um novo array transformando cada item do array original
  return {
    // Retorna um objeto para cada aluno
    nome: itemAtual,
    // Atribui o nome do aluno
    curso: 'Frontend' // Adiciona um curso padrão 'Frontend'
  };
});
console.log(alunos2); // Imprime no console o array transformado de objetos

var paulo = alunos2.find(function (item) {
  // Procura por um item no array que atenda à condição
  return item.nome == 'paulo'; // Condição: o nome deve ser 'paulo'
});
console.log(paulo); // Imprime no console o objeto do aluno 'paulo' encontrado

var indiceDoPaulo = alunos2.findIndex(function (item) {
  // Procura o índice do item que atenda à condição
  return item.nome == 'paulo'; // Condição: o nome deve ser 'paulo'
});
console.log(indiceDoPaulo); // Imprime no console o índice do aluno 'paulo' encontrado

alunos2.push({
  // Adiciona um novo objeto ao final do array alunos2
  nome: 'lucio',
  // Nome do novo aluno
  curso: 'Backend' // Curso do novo aluno
});
var todosAlunosDoFrontend = alunos2.every(function (item) {
  // Verifica se todos os itens no array atendem à condição
  return item.curso === 'Frontend'; // Condição: o curso deve ser 'Frontend'
});
console.log("".concat(todosAlunosDoFrontend, " <-- fun\xE7\xE3o para verificar a exist\xEAncia de alunos frontend")); // Imprime no console o resultado da verificação

var alunosExistentesDoBackend = alunos2.some(function (item) {
  // Verifica se pelo menos um item no array atende à condição
  return item.curso === 'Backend' && item.curso === 'Frontend'; // Condição: o curso deve ser 'Backend' e 'Frontend'
});
console.log("".concat(alunosExistentesDoBackend, " <-- fun\xE7\xE3o para verificar a exist\xEAncia de alunos fullstack")); // Imprime no console o resultado da verificação

function filtraAlunosDoBackend(aluno) {
  // Função para filtrar alunos do curso 'Backend'
  return aluno.curso === 'Backend'; // Condição: o curso deve ser 'Backend'
}
var alunosDoBackend = alunos2.filter(filtraAlunosDoBackend); // Filtra o array de alunos para incluir apenas aqueles do curso 'Backend'
console.log(alunosDoBackend); // Imprime no console os alunos do curso 'Backend'

var nums = [10, 20, 30, 40]; // Define um array de números
var soma = nums.reduce(function (acumulador, itemAtual) {
  // Reduz o array a um único valor (soma)
  acumulador += itemAtual; // Adiciona o valor atual ao acumulador
  return acumulador; // Retorna o acumulador
}, 0); // Inicializa o acumulador com 0
console.log(soma); // Imprime no console a soma dos números

var somaComFor = 0; // Inicializa a variável de soma
for (var _i = 0; _i < nums.length; _i++) {
  // Loop para iterar sobre o array de números
  somaComFor += nums[_i]; // Adiciona o valor atual ao total
}
console.log(somaComFor); // Imprime no console a soma dos números usando for loop

var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  // Reduz o array de alunos a uma string com os nomes
  acumulador += "".concat(itemAtual.nome, ", "); // Adiciona o nome do aluno atual ao acumulador
  return acumulador; // Retorna o acumulador
}, ''); // Inicializa o acumulador com uma string vazia
console.log(nomesDosAlunos); // Imprime no console a string com os nomes dos alunos