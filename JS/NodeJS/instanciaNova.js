// uma factory retorna um novo Objeto
module.exports = () => {
    return{
        valor: 1,
        incremento(){
            this.valor++
        }
    }
}