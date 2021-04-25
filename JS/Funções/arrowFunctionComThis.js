let comparaComTHis = function (param) {
    console.log(this===param);
}

comparaComTHis(global)

const obj = {}
comparaComTHis = comparaComTHis.bind(obj)
comparaComTHis(global)
comparaComTHis(obj);

let comparaComThisArrow = param =>console.log(this===param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow=comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)