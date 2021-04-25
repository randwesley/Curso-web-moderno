function filtrarQNTdigitos(numeros, qtdDesejada) {
    console.log(numeros.filter( numero => {
        return String(numero).length === qtdDesejada
    }))
}
filtrarQNTdigitos([1,22,333,4444,5555,8,66,78541,8961,123,32], 2)