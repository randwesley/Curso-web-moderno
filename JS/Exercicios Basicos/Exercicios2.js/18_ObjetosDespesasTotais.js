function despesasTotais(arrayObj) {
    const test = arrayObj.map(obj => obj.preco).reduce((atributo, atributoDois) => atributo + atributoDois)
    console.log(test)
}

const obj =[
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

despesasTotais(obj)