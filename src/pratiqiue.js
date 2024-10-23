const alunos = [
    {nome: 'Luis', nota: 10},
    {nome: 'paulo', nota: 7},
    {nome: 'beth', nota: 6},
    {nome: 'gisele', nota: 5},
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(alunos => alunos.nota >= 6)
};

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);


