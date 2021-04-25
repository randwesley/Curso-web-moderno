//usando a notação literal
const obj1 = {}
console.log(obj1);

console.log(typeof Object, typeof new Object);

// Usando o operador New
const obj2 = new Object 
console.log(obj2);

// função construtora
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1- desc)
    }
}

const obj3 = new Produto('Celular', 1.900, 0.05)
const obj4 = new Produto('Caneta', 6.99, 0.15)
console.log(obj3.getPrecoComDesconto());

// factory function
function criarFuncionario(nome,salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Marcelo', 1.100, 5);
const f2 = criarFuncionario('Wesley', 3.658, 8)
console.log(f1.getSalario().toFixed(3));

// Objetc.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha);

// json.parse
const fromJson = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJson);