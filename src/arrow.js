//criando função arrow

// #################################################### Metodo 1

const minhaFuncao1 = () => {
    console.log('ola function 1')
}
minhaFuncao1();

// #################################################### Metodo 2

const minhaFuncao2 = () => {
    return 'ola function 2'
}
console.log(minhaFuncao2());

// #################################################### Metodo 3

const minhaFuncao3 = () => 'ola function 3';
console.log(minhaFuncao3());

// #################################################### Metodo 4

const retornaUmCarro1 = () => {
    return {
        modelo: 'KA',
        fabricante: 'Ford'
    }
}
console.log(retornaUmCarro1());

// #################################################### Metodo 5

const retornaUmCarro2 = () => ({
    modelo: 'KA',
    fabricante: 'Ford'
})
console.log(retornaUmCarro2());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: function() {
        this.velocidadeAtual -= 10;
    }
}
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);