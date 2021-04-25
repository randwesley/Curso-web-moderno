function paresIndices(array) {
    return console.log( array.filter((valor, indice) => valor % 2 === 0 && indice % 2 ===0));
}
const test = [1,2,3,4]
paresIndices(test)