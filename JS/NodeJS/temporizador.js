const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 3', () => console.log('Executando Tarefa 1', new Date().getSeconds())) // segundos, minutos, horas, dias, mês, dia da semana

setTimeout(() => { 
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1,5))
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2!', new Date().getSeconds());
})