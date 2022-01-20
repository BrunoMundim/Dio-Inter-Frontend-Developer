var alunos = [
    {
        nome: 'Bruno',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Rafael',
        nota: 3,
        turma: '2A',
    },
    {
        nome: 'Sara',
        nota: 8,
        turma: '3A',
    }
];

function comparaNotas(alunos, mediaFinal){
    let alunosAprovados = [];

    for(i=0; i<alunos.length; i++){
        const {nota, nome, turma} = alunos[i];

        if(nota >= mediaFinal){
            alunosAprovados.push(`${nome} da turma ${turma}`);
        }
    }

    console.log(alunosAprovados);
}

comparaNotas(alunos, 7);