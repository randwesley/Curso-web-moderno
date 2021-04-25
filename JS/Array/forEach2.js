Array.prototype.forEach1 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    } 
}

let aprovados = ['Agatha', 'Aldo', 'Daniel', 'Randerson']

aprovados.forEach1((element, indice) => {
    console.log(`${indice+ 1 }: ${element}`);
});