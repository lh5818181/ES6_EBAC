// ################################################################## Metodo Rest

function somar() { // Função para somar todos os argumentos fornecidos
    let soma = 0; // Inicializa a soma em 0
    for (let i = 0; i < arguments.length; i++) { // Loop através de todos os argumentos fornecidos
        soma += arguments[i]; // Adiciona cada argumento à soma
    }
    return soma; // Retorna a soma total
}
console.log(somar(10, 20, 30, 40, 50)); // Chama a função somar com argumentos e imprime o resultado

function somarComRest(...numeros) { // Função para somar todos os números fornecidos usando o operador rest
    const soma = numeros.reduce((total, numeroAtual) => { // Usa reduce para somar todos os números no array
        total += numeroAtual; // Adiciona o número atual ao total
        return total; // Retorna o total atualizado
    }, 0); // Inicializa o total em 0
    return soma; // Retorna a soma total
}
console.log(somarComRest(10, 20, 32)); // Chama a função somarComRest com argumentos e imprime o resultado

// ################################################################## Metodo spread

const numeros = [1, 2, 3, 4, 5]; // Array de números
console.log(...numeros); // Usa o operador spread para imprimir os números individualmente

const timesDeFutebolDeSP = ['santos', 'palmeiras', 'bragantino', 'são paulo']; // Array de times de futebol de SP
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']; // Array de times de futebol do Rio

// const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio); // Alternativa: concatena os arrays usando concat
const timesDeFutebol = [...timesDeFutebolDeSP, ...timesDeFutebolDoRio]; // Usa o operador spread para combinar os arrays
console.log(timesDeFutebol); // Imprime o array combinado

const carroDaJuli = { // Objeto representando o carro da Juli
    modelo: 'gol', // Modelo do carro
    marca: 'vw', // Marca do carro
    motor: 1.6 // Motor do carro
};

const carroDoPaulo = { // Objeto representando o carro do Paulo
    ...carroDaJuli, // Usa o operador spread para copiar as propriedades de carroDaJuli
    motor: 1.8 // Sobrescreve a propriedade motor
};
console.log(carroDaJuli, carroDoPaulo); // Imprime os objetos carroDaJuli e carroDoPaulo

// ################################################################## Metodo de desestruturação

// const motorDoCarroDaJuli = carroDaJuli.motor; // Alternativa: acessa a propriedade motor diretamente
const {motor: motorDoCarroDaJuli} = carroDaJuli; // Usa a desestruturação para obter a propriedade motor e renomeá-la
const {motor: motorDoCarroDoPaulo} = carroDoPaulo; // Usa a desestruturação para obter a propriedade motor e renomeá-la
console.log(motorDoCarroDoPaulo); // Imprime o valor da propriedade motor do carroDoPaulo
console.log(motorDoCarroDaJuli); // Imprime o valor da propriedade motor do carroDaJuli

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol; // Usa a desestruturação para obter os primeiros 3 itens e o resto dos itens
console.log(item1); // Imprime o primeiro item
console.log(item2); // Imprime o segundo item
console.log(item3); // Imprime o terceiro item
console.log(outrosTimes); // Imprime o restante dos itens no array
