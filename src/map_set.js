let meuMap = new Map(); // Cria um novo Map vazio
meuMap.set("nome", "luis"); // Define a chave "nome" com o valor "luis"
meuMap.set("stack", "html, css, js"); // Define a chave "stack" com o valor "html, css, js"

// Recupera e imprime o Map completo
console.log(meuMap);

const nome = meuMap.get("nome"); // Recupera o valor associado à chave "nome"
console.log(nome); // Imprime o valor da chave "nome"

console.log(meuMap.size); // Imprime o tamanho do Map (número de entradas)
console.log(meuMap.has("sobrenome")); // Verifica se a chave "sobrenome" existe no Map e retorna um booleano

// meuMap.clear(); // Limpa todas as entradas do Map
console.log(meuMap.size); // Imprime o tamanho do Map após a limpeza (se for o caso)

for (let chave of meuMap.keys()) { // Itera sobre todas as chaves do Map
    console.log(chave); // Imprime cada chave
}

for (let valor of meuMap.values()) { // Itera sobre todos os valores do Map
    console.log(valor); // Imprime cada valor
}

for (let entrada of meuMap.entries()) { // Itera sobre todas as entradas (pares chave-valor) do Map
    console.log(entrada); // Imprime cada par chave-valor como um array
}

for (let [chave, valor] of meuMap.entries()) { // Itera sobre todas as entradas do Map com destructuring
    console.log(`${chave}: ${valor}`); // Imprime cada par chave-valor no formato "chave: valor"
}

meuMap.delete("stack"); // Deleta a entrada com a chave "stack" do Map
console.log(meuMap); // Imprime o Map após a deleção

const cpfs = new Set(); // Cria um novo Set vazio
cpfs.add('84444973048'); // Adiciona um valor ao Set
cpfs.add('70274312034'); // Adiciona outro valor ao Set
cpfs.add('03277971007'); // Adiciona mais um valor ao Set

console.log(cpfs); // Imprime o Set completo

console.log(cpfs.keys()); // Recupera e imprime todos os valores do Set (como um objeto Iterator)
console.log(cpfs.values()); // Recupera e imprime todos os valores do Set (como um objeto Iterator)

cpfs.forEach((valor) => { // Itera sobre todos os valores do Set
    console.log(valor); // Imprime cada valor
});

const array = ['gian souza', 'luis henri', 'maria isabel', 'gian souza', 'luis henri']; // Cria um array com alguns nomes (com duplicatas)
const arrayComoSet = new Set([...array]); // Cria um Set a partir do array para remover duplicatas
const arraySemDuplicatas = [...arrayComoSet]; // Converte o Set de volta para um array

console.log(arraySemDuplicatas); // Imprime o array sem duplicatas
