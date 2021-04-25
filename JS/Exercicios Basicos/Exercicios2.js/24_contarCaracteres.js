function contarCaracteres(caracter,frase) {
    const texto = frase.split('')
    let repeteCaracter = 0
    texto.forEach(element => {
        if (element == caracter) repeteCaracter++
    });
    return console.log(repeteCaracter);
}
const nome = "raderson reis  "
contarCaracteres('r',nome)

// LINDOOOOOOO
function contCaracteres(caracter, frase) {
    return console.log([... frase].filter(letra => letra === caracter).length)
}
contCaracteres('r', nome)