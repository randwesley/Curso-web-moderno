//tratamento de erro

function tratarErroELancar(erro) {
    //throw new Error: '...'
    //throw 10
    //throw 'erro' 
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!') // o atributo name está em inglês
    } catch (e){
        tratarErroELancar(e)
    } finally { // o finally vai ser chamado sempre, logo depois do bloco try/catch, independo se houver erro ou não
        console.log('Final')
    }
}

const obj  = {nome: 'randerson'}

imprimirNome(obj)