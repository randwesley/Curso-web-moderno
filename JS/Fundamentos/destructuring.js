// recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua da programação',
        numero: 101,
        cep: 54786203,
        cidade: 'Castanhal'
    }
}

// verificando atributos de um objeto sem usar o this e a notação ponto
// o destructuring simplifica essa operação
const { nome, idade} = pessoa; 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa;
console.log(n, i)

// acessando atributos que não exitem com o destructuring
// é importante setar valores que não existem como NULLs, é melhor que deixalos como undefined
const {sobrenome= null, humor= true} = pessoa 
console.log(sobrenome, humor)

const {endereco: { logradouro, cidade } } = pessoa;
console.log(logradouro, cidade);