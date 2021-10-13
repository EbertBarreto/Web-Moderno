function tratarErroElancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //thorw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.mensage,
        date: new Date  
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('Final')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)