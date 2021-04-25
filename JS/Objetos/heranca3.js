const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai) 
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
filha2.nome = 'Carla'
console.log(`${filha2.nome}, tem cabelos ${filha2.corCabelo}`);

console.log(Object.keys(filha1)); 
console.log(Object.keys(filha2)); 

for (let key in filha2) {
    //console.log(key);    
    filha2.hasOwnProperty(key) ? // essa chave pertence a classe filha?
        console.log(key) : console.log(`Por herança ${key}`);
}
