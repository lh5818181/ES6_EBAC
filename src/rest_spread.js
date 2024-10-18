
// ################################################################## Metodo Rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10, 20, 30, 40, 50));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 32));

// ################################################################## Metodo spread

const numeros = [1, 2, 3, 4, 5]
console.log(...numeros);

const timesDeFutebolDeSP = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio);

const timesDeFutebol = [...timesDeFutebolDeSP, ...timesDeFutebolDoRio];

console.log(timesDeFutebol);

const carroDaJuli = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDoPaulo = {
    ...carroDaJuli,
    motor: 1.8
}

console.log(carroDaJuli, carroDoPaulo);




// ################################################################## Metodo de desestruturação

// const motorDoCarroDaJuli = carroDaJuli.motor;
const {motor: motorDoCarroDaJuli} = carroDaJuli;
const {motor: motorDoCarroDoPaulo} = carroDoPaulo;

console.log(motorDoCarroDoPaulo);
console.log(motorDoCarroDaJuli);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);