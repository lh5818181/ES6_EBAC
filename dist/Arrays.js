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
  return item.nome == 'paulo';
});
console.log(paulo);
var indiceDoPaulo = alunos2.findIndex(function (item) {
  return item.nome == 'paulo';
});
console.log(indiceDoPaulo);