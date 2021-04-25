// par nome/ valor
const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}
console.log(exec())

// objetos são grupos aninhados de parees chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 10,
    endereco: {
        rua: 'Ahhh',
        numero: 56,
        cidade: 'Castanhal',
        sexo: 'Masculino'
    }
}
console.log(cliente)