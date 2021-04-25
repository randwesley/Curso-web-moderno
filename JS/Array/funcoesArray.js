let clients = [
    {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
    {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
    {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
    {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
    {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
  ]

  let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
  
//TODO: Altera todos os valores em +1
ages = ages.map(idade => idade+1)
console.log(ages)

//TODO: Retorna todos os valores ímpares
const impares = ages.filter(idade => idade % 2 === 1)
console.log(impares)

//TODO: Altera todos os valores ímpares para o próximo par
ages = ages.map(valor => valor % 2 === 1 ? valor + 1 : valor)
console.log(ages);

//TODO: Cria um novo array com os valores menores do que 20 de numbers
const menoresQue20 = ages.filter(valor => valor<20)
console.log(menoresQue20);

//TODO: Cria um novo array com os valores menores do que 17 e incrementar eles em um
const menoresQue17 = ages.filter(valor => valor < 17).map(valor => valor + 1)
console.log(menoresQue17);
//TODO: Retorne a soma de todos os valores menores do que 20
const somaMenoresQue20 = ages.filter(valor => valor<20).reduce((valor, proximoValor)=> valor + proximoValor)
console.log(somaMenoresQue20)

//TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos
let newClients = clients.map(obj => ({...obj}))
newClients = newClients.map(obj => {
    obj.purchaseDaysAgo += 1
    return obj
})
console.log(newClients);

//TODO: Verifica se um determinado número de entrada está contigo no array
console.log(ages.includes(18))
console.log(ages.find(valor => valor === 18));

//TODO: Altera array para ficar só com o primeiro nome dos clientes
//TODO: Incrementa a idade apenas dos clientes das posições ímpares do array
//TODO: Retorna todos as pessoas de sexo masculino