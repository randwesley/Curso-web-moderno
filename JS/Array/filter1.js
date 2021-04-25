const produtos = [
   { nome: 'Notebook', preco: 2499, fragil: true } ,
   { nome: 'iPad Pro', preco: 4199, fragil: true },
   { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
   { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

const produtosFrageis = p => p.fragil === true
const produtosCaros = p => p.preco >= 500 

console.log(produtos.filter(produtosCaros).filter(produtosFrageis));