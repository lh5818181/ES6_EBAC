const redesSociais = ['Instagram', 'Facebook', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRede, indice) {
    console.log(`#${indice}Eu tenho perfil na rede social ${nomeDaRede}`);
})

const alunos = ['gustavo', 'paulo', 'luan', 'mathew'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend',
    }
})

console.log(alunos2);


const paulo = alunos2.find(function(item) { //faz a busca de um item em um array:
    return item.nome == 'paulo'
})

console.log(paulo);

const indiceDoPaulo = alunos2.findIndex(function(item) {
    return item.nome == 'paulo'
})

console.log(indiceDoPaulo);

alunos2.push({
    nome:'lucio',
    curso: 'Backend'
})

//every
const todosAlunosDoFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(`${todosAlunosDoFrontend} <-- funcção para verificar a existencia de alunos frontend`);

const alunosExistentesDoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(`${alunosExistentesDoBackend} <-- funcção para verificar a existencia de alunos fullstack`);

function filtraAlunosDoBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDoBackend = alunos2.filter(filtraAlunosDoBackend)

console.log(alunosDoBackend); 

const nums = [10, 20, 30, 40];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}, `;
    return acumulador;
}, '')

console.log(nomesDosAlunos);