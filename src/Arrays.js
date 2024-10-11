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


const paulo = alunos2.find(function(item) {
    return item.nome == 'paulo'
})

console.log(paulo);

const indiceDoPaulo = alunos2.findIndex(function(item) {
    return item.nome == 'paulo'
})

console.log(indiceDoPaulo);