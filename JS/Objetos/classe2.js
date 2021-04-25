class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
        constructor (sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor (){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho);
const avo = new Avo('Reis')
console.log(avo);

const pai = new Pai(avo.sobrenome)
console.log(pai);
console.log(filho);