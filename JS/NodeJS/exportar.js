console.log(this === module.exports);
console.log(module.exports === exports);

this.a=1
exports.b=2
module.exports.c=3

exports = null
console.log(module.exports);

exports = {
    nome: 'Objeto - exportar direto do "Exports" é um jeito errado de exportar dados'
}
console.log(module.exports);

module.exports = {
    nome: 'Jeito correto de exportar OBJ'
}
console.log(module.exports);