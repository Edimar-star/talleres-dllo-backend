const punto1 = (list) => list.filter(element => element.length > 25).length

const punto2 = (base, exponente) => {
    let result = 1
    
    for(let i = 0; i < exponente; i++) {
        result *= base
    }
    
    return result
}

const punto3 = (list, element) => list.filter(e => e === element).length

const punto4 = (n) =>  n > 1 ? punto4(n - 1) + punto4(n - 2) : 1

const punto5 = (list) => !(list.length === new Set(list).size)

const punto6 = (list) => {
    const elements = new Set(list)
    let mas_repetido = 0
    let cantidad = 0
    
    elements.forEach(element => {
        const repeticiones = list.filter(e => e === element).length
        
        if (repeticiones > cantidad) {
            mas_repetido = element
            cantidad = repeticiones
        }
    })
    
    return mas_repetido
}

const punto7 = (list) => list.sort((a, b) => a - b)

const punto8 = (list, n) => list.sort((a, b) => b - a)[n - 1]

const punto9 = (list) => list.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b)

const punto10 = (list_of_values, value) => {
    let list = list_of_values.sort((a, b) => a - b)
    let start_index = 0
    let end_index = list.length

    while (start_index != end_index) {
        n = parseInt((start_index + end_index) / 2)
        
        if (value < list[n]) {
            end_index = n
        } else if (list[n] === value) {
            return list[n]
        } else if (list[n] < value) {
            start_index = n + 1
        }
    }
}

console.log("Punto 1:", punto1(["edede", "eddede", "edewfrrrrrrrrrrrrrrrrrrrefef"]))
console.log("Punto 2:", punto2(2, 5))
console.log("Punto 3:", punto3([1, 2, 3, 8, 7, 7, 9, 5, 8, 10], 8))
console.log("Punto 4:", punto4(10))
console.log("Punto 5:", punto5([1, 2, 3, 1, 1]))
console.log("Punto 6:", punto6([1, 1, 3, 4, 5, 5, 5, 1]))
console.log("Punto 7:", punto7([2, 4, 0, 9, 7, 8, 10]))
console.log("Punto 8:", punto8([2, 4, 0, 9, 7, 8, 10], 2))
console.log("Punto 9:", punto9([2, 4, 0, 9, 7, 8, 10]))
console.log("Punto 10:", punto10([2, 4, 1, 0, 3, 9, 5, 7, 6, 8, 10], 7))
