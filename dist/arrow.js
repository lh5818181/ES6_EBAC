"use strict";

//criando função arrow

// #################################################### Metodo 1

var minhaFuncao1 = function minhaFuncao1() {
  console.log('ola function 1');
};
minhaFuncao1();

// #################################################### Metodo 2

var minhaFuncao2 = function minhaFuncao2() {
  return 'ola function 2';
};
console.log(minhaFuncao2());

// #################################################### Metodo 3

var minhaFuncao3 = function minhaFuncao3() {
  return 'ola function 3';
};
console.log(minhaFuncao3());

// #################################################### Metodo 4

var retornaUmCarro1 = function retornaUmCarro1() {
  return {
    modelo: 'KA',
    fabricante: 'Ford'
  };
};
console.log(retornaUmCarro1());

// #################################################### Metodo 5

var retornaUmCarro2 = function retornaUmCarro2() {
  return {
    modelo: 'KA',
    fabricante: 'Ford'
  };
};
console.log(retornaUmCarro2());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);