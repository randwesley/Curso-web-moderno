const imprimirResultado = function (nota) {
    if(nota>=7) {
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}
imprimirResultado(7)
imprimirResultado(6.9)

const imprimirResult = nota1 => { (nota1>=7) ? console.log('Aprovado') : console.log('Reprovado') }
imprimirResult(6.99)