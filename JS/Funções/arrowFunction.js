// arrow function é sempre uma função anonima, então para ela ser chamada, é necessario armazenar ela em variavel ou atributo... etc

let dobro = function (a) { // função comum
    return 2 * a
}
console.log(dobro(24));

dobro = (a) => {return 2 * a} // arrow function extendida
console.log(dobro(6));

dobro = a => 2 * a // arrow function com o retorno implicito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá!'
}

ola = () => 'Oláá!'
ola = _ => 'Oláááá!' // possui um parametro que é o underline
console.log(ola());