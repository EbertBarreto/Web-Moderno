Number.prototype.entre = function (incio, fim) {
    return this >= incio && this <= fim
}

const imprimirNota = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação') 
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(6)
imprimirNota(3)