function Pessoa() {
    this.idade=0

    const self = this // drible usado para que o this sempre aponte para o oj em questão independente do contexto
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa