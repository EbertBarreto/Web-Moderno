const escola = 'Cod3r'

console.log(escola.charAt(4)) // Para encontrar caracteres
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, "3"))

console.log('Escola ' .concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))// Para substituir todas letras "e"

console.log('ana,maria,pedro,ebert'.split(',')) // Arrey
console.log('eu,nois,eles'.split(','))