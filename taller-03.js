// Retorna la cantidad de vocales o consonantes de la string recibida
const desglosarString = (string, tipo) => {
    if (tipo !== "vocales" && tipo !== "consonantes") return

    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ'
    const numVocales = string.split("").map(char => vocales.includes(char)).reduce((a, b) => a + b)
    return tipo === "vocales" ? numVocales : string.length - numVocales
}

// Retorna los indices de los numeros del arreglo que sumados sean el otro numero
const twoSum = (list_of_numbers, number) => list_of_numbers.map((num, index1, arr) => {
    let index2 = arr.findIndex(value => value != num && value + num == number)
    return [index1, index2]
}).find(indexes => indexes.reduce((a, b) => list_of_numbers[a] + list_of_numbers[b]))

// Recibe una string de cifras romanas y retorna el equivalente en cifras arábigas
const conversionRomana = (string) => {
    const romanos = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    return string.split("").map((key, index, arr) => {
        const value = romanos[key]
        if (index + 1 == arr.length) return value
        return romanos[key] < romanos[arr[index + 1]] ? -value : value
    }).reduce((a, b) => a + b)
}

console.log(desglosarString("murcielagos", "vocales")) // Test punto 1.1
console.log(desglosarString("murcielagos", "consonantes")) // Test punto 1.2
console.log(twoSum([2, 7, 11, 15], 9)) // Test punto 2.1
console.log(twoSum([3, 4, 2], 6)) // Test punto 2.2
console.log(conversionRomana("III")) // Test punto 3.1
console.log(conversionRomana("XIV")) // Test punto 3.2
console.log(conversionRomana("MMXXIV")) // Test punto 3.3
console.log(conversionRomana("MXMVII")) // Test punto 3.4