// midleware pattern (chain of responsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto) => contexto.valor3 = 'mid3'


const exec = (ctx, ...midlewares) => {
    const execPasso = indice => {
        midlewares && indice < midlewares.length &&
        midlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);