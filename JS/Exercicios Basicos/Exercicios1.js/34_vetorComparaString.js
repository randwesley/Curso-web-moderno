function comparaString(nome,segundoNome) {
    let contem = true
    for (let i = 0; i < nome.length; i++) {
        let letraNome = nome.charAt(i).toLocaleLowerCase()
        for (let j = 0; j < segundoNome.length; j++) {
            let letraSegundoNome = segundoNome.charAt(j).toLocaleLowerCase()
            if(letraNome === letraSegundoNome){
                contem= true
                break
            }else{
                contem=false
            }    
        }
        if(!contem){
            return contem
        }   
    }
    return contem
}
console.log(comparaString('ranndoers','ran'));