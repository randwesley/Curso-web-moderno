function  removerParametro(obj, parametro) {
    const copia = {...obj}
    delete copia[parametro]
    return console.log(copia)
}
removerParametro({a:1, b: 2, c:3}, 'c')