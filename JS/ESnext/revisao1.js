// let e const
{
    var a =2
    let b =3
    console.log(b);
}
console.log(a);

// Template String
const produto  = 'ipad'
console.log(`${produto} é caro`);

// Destructuring
const [l,e, ...tras] = 'Cod3er'
console.log(l,e,tras);

const [x, , y] = [1, 2, 3] //ignorar um elemento basta colocar um espaço vazio
console.log(x, y);

const { idade: renomeaVariavel, nome } = { nome: 'Ana', idade: 15 }
console.log(nome, idade);