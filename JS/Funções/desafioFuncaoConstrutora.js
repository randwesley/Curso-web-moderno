function Pessoa(nome) {
    this.nome = nome; 
    // se eu tirar o this, não vou ter acesso direto ao atributo nome dos objetos que irei instaciar a partir dessa função contrustora
    
    this.falar = () => {return console.log(`Meu nome é ${nome}`)}
}

const p1 = new Pessoa('Jãozito');
p1.falar()