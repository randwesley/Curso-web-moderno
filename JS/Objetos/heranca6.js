function  Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;   
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2);

// função que simula o comportamento do operador new
function novo(funcao, ...params) {
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindooo', 888)
const aula4 = novo(Aula, 'Até maiiiisss', 4444)
console.log(aula3, aula4);