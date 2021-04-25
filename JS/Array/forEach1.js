// a função forEach recebe até 3 parametros:
// 1 - o elemento, 
// 2 - o indice,
// 3 - o array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Randerson']

aprovados.forEach((element, indice) => {
    console.log(`${indice+ 1 }: ${element}`);
});

aprovados.forEach(nome => { console.log(nome) });

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);

