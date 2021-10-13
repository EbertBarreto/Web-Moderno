function soBoasNoticias(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
soBoasNoticias(8.1)
soBoasNoticias(6.1)

function seForverdadeEuFalo(valor) {
    if(valor) {
        console.log('Verdade... ' + valor)
    }
}

seForverdadeEuFalo()
seForverdadeEuFalo(null)
seForverdadeEuFalo([2])
seForverdadeEuFalo(undefined)
seForverdadeEuFalo(' ')
seForverdadeEuFalo('')