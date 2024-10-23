// Criando função arrow

// #################################################### Metodo 1
const minhaFuncao1 = () => { // Declara uma função arrow e armazena em minhaFuncao1
    console.log('ola function 1'); // Imprime a mensagem no console
}
minhaFuncao1(); // Chama a função minhaFuncao1

// #################################################### Metodo 2
const minhaFuncao2 = () => { // Declara uma função arrow e armazena em minhaFuncao2
    return 'ola function 2'; // Retorna a mensagem 'ola function 2'
}
console.log(minhaFuncao2()); // Chama a função minhaFuncao2 e imprime o retorno no console

// #################################################### Metodo 3
const minhaFuncao3 = () => 'ola function 3'; // Declara uma função arrow que retorna diretamente a mensagem 'ola function 3'
console.log(minhaFuncao3()); // Chama a função minhaFuncao3 e imprime o retorno no console

// #################################################### Metodo 4
const retornaUmCarro1 = () => { // Declara uma função arrow e armazena em retornaUmCarro1
    return { // Retorna um objeto
        modelo: 'KA', // Propriedade modelo com valor 'KA'
        fabricante: 'Ford' // Propriedade fabricante com valor 'Ford'
    };
}
console.log(retornaUmCarro1()); // Chama a função retornaUmCarro1 e imprime o objeto retornado no console

// #################################################### Metodo 5
const retornaUmCarro2 = () => ({ // Declara uma função arrow que retorna diretamente um objeto
    modelo: 'KA', // Propriedade modelo com valor 'KA'
    fabricante: 'Ford' // Propriedade fabricante com valor 'Ford'
});
console.log(retornaUmCarro2()); // Chama a função retornaUmCarro2 e imprime o objeto retornado no console

const carro = { // Declara um objeto carro
    velocidadeAtual: 40, // Propriedade velocidadeAtual com valor inicial de 40
    acelerar: function() { // Declara um método acelerar
        this.velocidadeAtual += 10; // Aumenta a velocidadeAtual em 10
    },
    frear: function() { // Declara um método frear
        this.velocidadeAtual -= 10; // Diminui a velocidadeAtual em 10
    }
}
carro.acelerar(); // Chama o método acelerar do objeto carro
carro.frear(); // Chama o método frear do objeto carro
console.log(carro.velocidadeAtual); // Imprime a velocidadeAtual do objeto carro no console
