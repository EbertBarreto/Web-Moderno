const notas = [6.1, 7.0, 9.0, 8.8, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: '20',
    peso: '64'
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)