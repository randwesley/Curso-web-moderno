function filtrarNumeros(array) {
    const resultado = array.filter(valor => !isNaN(valor))
    console.log(resultado);
}
arayteste = [1,2,3,4,'a',{}, 'fg',6]
filtrarNumeros(arayteste)