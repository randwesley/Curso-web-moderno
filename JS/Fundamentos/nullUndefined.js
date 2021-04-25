let valor //não inicializado = undefined

console.log(valor)
//console.log(valor2)

valor = null //não aponta pra nenhum endereço de memoria

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco= 3.50;
console.log(produto)

produto.preco = undefined // EVITAR ATRIBUIR A UNDEFINED, MELHOR ATRIBUIR A NULL
console.log(!!produto.preco) // false
delete produto.preco; // deleta um atributo do obj
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //false
console.log(produto)