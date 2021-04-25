// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto);

delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'a4',
    proprietario: {
        nome: 'raul',
        idade: 40,
        endereco: {
            rua: 'floriano salinas',
            numero: 15,
            bairro: 'Milagre',
            cidade: 'Castanhal'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 18
    }, {
        nome: 'marcela',
        idade: 20
    }],
    calcularValorSeguro: function(params) {
        // ...
    }
}
carro.proprietario.endereco.numero = 1566
carro['proprietario']['endereco']['rua'] = 'hernani lameira'
console.log(carro);

delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro);