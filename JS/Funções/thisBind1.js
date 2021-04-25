const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre o paradigma funcional e a OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa() // O bind amarra a função falarDePessoa() e o this ao objeto {pessoa}

const falar2 = pessoa.falar
falar2() 