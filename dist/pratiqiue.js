"use strict";

var alunos = [{
  nome: 'Luis',
  nota: 10
}, {
  nome: 'paulo',
  nota: 7
}, {
  nome: 'beth',
  nota: 6
}, {
  nome: 'gisele',
  nota: 5
}];
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
;
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);