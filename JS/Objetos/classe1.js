class Lancamento{
    constructor(nome= 'Genérico', valor = 0){
        this.nome = nome;
        this.valor = valor;

    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(i => this.lancamentos.push(i))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(i => {
            valorConsolidado += i.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(4,2021)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario());