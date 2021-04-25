let anoBissexto = (ano)=> {
    if(((ano % 4) === 0) || ((ano % 100) !==0) && ((ano % 400) === 0)){
        console.log(`O ano de ${ano}, É BISSEXTO`);
    } else {
    console.log(`O ano de ${ano}, NÃO É BISSEXTO`);
    }
}
anoBissexto(2015)
anoBissexto(2016)
anoBissexto(1100)
anoBissexto(400)
anoBissexto(2023)
anoBissexto(2021)

