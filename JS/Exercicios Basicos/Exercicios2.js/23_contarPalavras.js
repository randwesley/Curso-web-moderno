const nome = 'randerson Wesley dos Reis'

function contarPalavras(frase) {
    const resultado = frase.split(' ')
    let contador = 0
    resultado.forEach(element => {
        element[contador++]
    });
    return console.log(contador)
}


function contarPalavr(frase){
    let palavras = frase.split(' ')
     console.log(palavras.length);
}
contarPalavras(nome)
contarPalavr(nome)