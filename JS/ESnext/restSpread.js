// operador rest(juntar) e spread(espalhar)

const { lowerFirst } = require("lodash");


// spread = no contexto do objeto e array
const funcionario = {
    nome: 'maria',
    salario: 123.99
}
const clone = { ativo: true, ...funcionario }
console.log(clone);

// spread = no contexto de array
const grupoA = ['João', 'Maria', 'Gloria']
const grupoZ = ['maria', ...grupoA, 'rafaela']
console.log(grupoZ);
