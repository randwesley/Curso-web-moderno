const produto = {}
produto.nome = 'Xiaomi Readmi 8';
produto.cor = 'azul marinho';
produto.preco = 4.5465;
produto['Desconto Legal'] = 0.40; //evitar atributos com espaço

console.log(produto);

const produto2 = {
    nome: 'aveia',
    preco: 2.50,
    fornecedor: {
        nome: 'John',
        endereco: 'Rua da lapa, 365',
        cidade: 'Castanhal',
        cep: 68456852
    }
}

console.log(produto2)