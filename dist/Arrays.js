"use strict";

var redesSociais = ['Instagram', 'Facebook', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRede, indice) {
  console.log("#".concat(indice, "Eu tenho perfil na rede social ").concat(nomeDaRede));
});
var alunos = ['gustavo', 'paulo', 'luan', 'mathew'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var paulo = alunos2.find(function (item) {
  //faz a busca de um item em um array:
  return item.nome == 'paulo';
});
console.log(paulo);
var indiceDoPaulo = alunos2.findIndex(function (item) {
  return item.nome == 'paulo';
});
console.log(indiceDoPaulo);
alunos2.push({
  nome: 'lucio',
  curso: 'Backend'
});

//every
var todosAlunosDoFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log("".concat(todosAlunosDoFrontend, " <-- func\xE7\xE3o para verificar a existencia de alunos frontend"));
var alunosExistentesDoBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log("".concat(alunosExistentesDoBackend, " <-- func\xE7\xE3o para verificar a existencia de alunos fullstack"));
function filtraAlunosDoBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDoBackend = alunos2.filter(filtraAlunosDoBackend);
console.log(alunosDoBackend);
var nums = [10, 20, 30, 40];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, ", ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);