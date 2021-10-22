const pessoa = {
    saudacao : 'Bom Dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigimas: funcional e 00

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()