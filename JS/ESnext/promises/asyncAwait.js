// sem promisse
const http = require('http')
const { get } = require('lodash')

const getTurma = letra => {
    const url= `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, rejected) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    rejected(error)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
