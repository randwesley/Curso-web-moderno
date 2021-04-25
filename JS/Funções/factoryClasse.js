class Pessoa{
    constructor(nome,idade,escolaridade){
        this.nome = nome;
        this.idade=idade;
        this.escolaridade=escolaridade
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}
const p1 = new Pessoa('Jão', 5, '5º');
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Jãozin');
p2.falar()