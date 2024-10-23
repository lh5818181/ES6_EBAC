// Função que realiza uma operação muito pesada e retorna o número de execuções
function funcaoMuitoPesada() {
    let execucoes = 0; // Inicializa a variável de contagem de execuções
    for (let i = 0; i < 1000000000; i++) { // Loop que itera um bilhão de vezes
        execucoes++; // Incrementa a contagem de execuções
    }
    return execucoes; // Retorna o total de execuções
}

// Cria uma Promise que executa a função pesada de forma assíncrona
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0; // Inicializa a variável de contagem de execuções
        for (let i = 0; i < 1000000000; i++) { // Loop que itera um bilhão de vezes
            execucoes++; // Corrigido: Incrementa a contagem de execuções
        }
        resolve(execucoes); // Resolve a Promise com o total de execuções
    } catch(e) {
        reject('Deu erro na iteração dos números'); // Rejeita a Promise se houver um erro
    }
});

// Função que retorna uma Promise simulando o login com parâmetros de login e senha
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simula um atraso de 3 segundos
            resolve(`Logado com o usuário: ${login}.`); // Resolve a Promise com a mensagem de login
        }, 3000); // Tempo de atraso de 3 segundos
    });
};

// Função principal assíncrona que executa várias promessas
async function execucaoPrincipal() {
    console.log("Início"); // Exibe mensagem de início no console
    
    // Chama a Promise com parâmetros
    promiseComParametros('luis@gmail.com', 123456).then(resultado => {
        console.log(resultado); // Exibe o resultado do login no console
    });

    // Usa async/await para esperar a execução da função pesada
    try {
        const resultado = await funcaoMuitoPesadaPromise; // Aguarda o resultado da Promise
        console.log(resultado); // Exibe o resultado da função pesada no console
    } catch(e) {
        console.log(e); // Exibe o erro se houver falha na Promise
    }

    console.log("Fim"); // Exibe mensagem de fim no console
}

// Chama a função principal
execucaoPrincipal();
