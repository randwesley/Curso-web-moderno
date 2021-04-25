const quaseUmArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseUmArray);

Object.defineProperty(quaseUmArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseUmArray[3]);

const meuArray = ['rafael', 'ana', 'bia']
console.log(quaseUmArray.toString(), meuArray);