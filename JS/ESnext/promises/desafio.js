const fs = require('fs')
const { lowerCase } = require('lodash')
const path = require('path')

function  lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler:');
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))