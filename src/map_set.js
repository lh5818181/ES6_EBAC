let meuMap = new Map();
meuMap.set("nome", "luis");
meuMap.set("stack", "html, css, js"); //recupera os valores da chave o qual tambem aponta para o seu conteudo
console.log(meuMap);


const nome = meuMap.get("nome"); //aponta para um conteudo especifico do map
console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome")); //verifica e retorna um boleano 'true' caso tenha uma chave 

// meuMap.clear() //faz a limpeza do map

console.log(meuMap.size);

for (let chave of meuMap.keys()) { //recupera as chaves
    console.log(chave);
}

for (let valor of meuMap.values()) { //recupera os valores
    console.log(valor);
}

for (let entrada of meuMap.entries()) { //recupera todas as entradas do map
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) { //recupera o map separadamente em forma de string
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack"); //deleta o map selecionado
console.log(meuMap);

const cpfs = new Set();

cpfs.add('84444973048');
cpfs.add('70274312034');
cpfs.add('03277971007');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());


cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['gian souza', 'luis henri', 'maria isabel', 'gian souza', 'luis henri']; 
const arrayComoSet = new Set([...array]); //set remove duplicatas
const arraySemDuplicatas = [...arrayComoSet]; //transformando set para array

console.log(arraySemDuplicatas);
