function soma() { //quando não se declara parametros, é possivel usar o arguments que pode ser usado para capturar valores inseridos e trabalhar com eles
    let soma= 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma());
console.log(soma(1));
console.log(soma(20,5,3,2));