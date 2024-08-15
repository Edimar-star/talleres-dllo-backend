const convertidorTemp  = (C) => C * 9 / 5 + 32

const resolvedor = (a, b, c, sign) => (-b + sign * Math.sqrt(b**2 - 4 * a * c)) / (2 * a)

const mejorParidad = (number) => !(number % 2)

const peorParidad = (number) => {
    const paridades = [true, false, true, false, true, false, true, false, true, false, true]
    for (let index = 0; index <= paridades.length; index++) {
        if (index == Math.abs(number)) {
            return paridades[index]
        }
    }
}

console.log("Punto 1:", convertidorTemp(200))
console.log("Punto 2:", resolvedor(1, 5, 4, 1))
console.log("Punto 3:", mejorParidad(8))
console.log("Punto 4:", peorParidad(8))
