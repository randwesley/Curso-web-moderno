const sequencia = {
    _valor: 1, //convenção
    get valor(){ return this._valor++ },
    set valor(valor){ 
        if (valor > this._valor) {
            this._valor = valor
        } 
    }
}
console.log(sequencia.valor, sequencia.valor);

pessoa = {
    nome: 'Wesley',
    sobrenome: 'Reis',
    _idioma: 'português',
    get linguagem(){ return this._idioma},
    set linguagem(lang){ this._idioma = lang}
}
console.log(pessoa.linguagem);

pessoa.linguagem = ['Inglês', 'Português']
console.log(pessoa.linguagem);


console.log(pessoa);
