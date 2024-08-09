const convertidorTemp  = (t) => {
    return t * 9 / 5 + 32
}

const resolvedor = (a, b, c, sign) => {
    return (-b + sign * Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
}

const mejorParidad = (number) => !(number % 2)

const peorParidad = (number) => {
    if (number < 0 || number > 10) {
        return undefined
    }

    let paridad = ""
    const paridades = [true, false, true, false, true, false, true, false, true, false, true]
    for (let index = 0; index <= 10; index++) {
        paridad = paridades[index]

        if (index == number) break
    }

    return paridad
}

console.log("Punto 1:", convertidorTemp(200))
console.log("Punto 2:", resolvedor(1, 5, 4, -1))
console.log("Punto 3:", mejorParidad(8))
console.log("Punto 4:", peorParidad(20))