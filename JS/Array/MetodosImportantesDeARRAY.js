const benDez = ['QuatroBraços', 'XLR8', 'Diamante', 'Fantasmatico']
benDez.pop() // remove ultimo elemento

benDez.push('UltraT')
console.log(benDez);

benDez.shift() // Remove o primeiro elemento
console.log(benDez);

benDez.unshift('Chamas') // adiciona no inicio
console.log(benDez);

// SPLICE pode adicionar e remover elementos

// ADICIONAR
benDez.splice(2,0,'Aquatico', 'Insectoide')
console.log(benDez);

// REMOVER
benDez.splice(3,1)
console.log(benDez);

// SLICE retorna um novo array
const algunsAliens = benDez.slice(2)
console.log(algunsAliens);

const outrosAliens = benDez.slice(1,4)
console.log(outrosAliens);

