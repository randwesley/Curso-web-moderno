// clojure, é o escopo criado quando a função é declarada
// esse escopo permite que a função acesse e manipule as 
// variaveis que foram declaradas externas à função

// contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());