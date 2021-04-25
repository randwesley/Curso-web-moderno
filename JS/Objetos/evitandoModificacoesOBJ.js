// Object.preventExtensios
// não consegue add novos atributos, mas pode editar e excluir atb já existentes
const produto = Object.preventExtensions({ 
    nome: 'Sabão', preco: 2.68, tag: 'promoção'
})
console.log(`Extensível: ${Object.isExtensible(produto)} `);

produto.nome = 'limão'
produto.descricao = 'Limão amarelinho'
delete produto.tag
console.log(produto);

// Object.seal
// não consegue add e nem excluir novos atributos, mas pode editar atb já existentes
const pessoa = {nome: 'Wesley', idade: 35}
Object.seal(pessoa)
console.log(`Selado`, Object.isSealed(pessoa));

pessoa.sobrenome = 'Reis'
pessoa.idade = 24
delete pessoa.nome
console.log(pessoa);

// Object.freeze = selado + valores constantes


