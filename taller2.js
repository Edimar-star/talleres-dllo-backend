// Punto 1
const findMax = (list_of_numbers) => {
    let max_number = -Number.MAX_VALUE
    list_of_numbers.forEach(number => {
        max_number = max_number < number ? number : max_number
    })
    return max_number
}

// Punto 2
const includes = (list_of_numbers, number) => {
    for(let i = 0; i < list_of_numbers.length; i++) {
        if (list_of_numbers[i] == number) {
            return true
        }
    }
    return false
}

// Punto 3
const sum = (list_of_numbers) => list_of_numbers.reduce((a, b) => a + b)

// Punto 4
const missingNumbers = (list_of_numbers) => {
    const missed_values = []
    const max_number = findMax(list_of_numbers) // Maximo valor
    const min_number = -findMax(list_of_numbers.map(number => -number)) // Minimo valor

    // Valores que no estan en la lista
    for (let i = min_number + 1; i < max_number; i++) {
        if (!includes(list_of_numbers, i)) {
            missed_values.push(i)
        }
    }

    return missed_values
}

console.log(findMax([3, 17, -1, 4, -19])) // Test punto 1
console.log(includes([3, 17, -1, 4, -19], 2)) // Test punto 2.1
console.log(includes([3, 17, -1, 4, -19], 4)) // Test punto 2.2
console.log(sum([3, 17, -1, 4, -19])) // Test punto 3
console.log(missingNumbers([7, 2, 4, 6, 3, 9])) // Test punto 4
