console.log(Math.ceil(7.3));

const obj1 = {}
obj1.nome= 'Bola'

console.log(obj1.nome)

function Obj(nome,idade) {
    this.nome = nome;
    this.idade = idade;
    this.exec = function executar() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira',19);
const obj3 = new Obj('Mesa',23)
console.log(obj2.exec())
console.log(obj3.nome)
obj3.exec()
