function criarProduto(nome, preco,) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('iPad', 3265.99));
console.log(criarProduto('iPhone', 9265.99));
