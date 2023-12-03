let teaspoons = [[0, 0, 0, 0]]
let values = [0, 0, 0, 0]
let previousValue

function increment(array) {
    let arraySum = array.reduce((a, b) => a + b)
    if (arraySum <= 100)
        array[3] = 100 - (array[0] + array[1] + array[2])
        if (array[3] < 0) array[3] = 100
    else if (arraySum > 100)
        array[3] = 100
    if (previousValue == array[3]) array[3] = array[3] + 1
    previousValue = array[3]
    return array
}

while (teaspoons[0][0] != 100) {
    if (values[3] == 100) {
        values[3] = 0
        if (values[2] != 100)
            values[2] = values[2] + 1
        else {
            values[2] = 0
            if (values[1] != 100)
                values[1] = values[1] + 1
            else {
                values[1] = 0
                values[0] = values[0] + 1
            }
        }
    } else {
        values = increment(values)
    }
    if (values.reduce((a, b) => a + b) == 100) {
        teaspoons.unshift(values.concat())
    }
}

function score(val1, val2, val3, val4) {
    let capacity = val1 * 3 + val2 * -3 + val3 * -1 + val4 * 0
    let durability = val1 * 0 + val2 * 3 + val3 * 0 + val4 * 0
    let flavor = val1 * 0 + val2 * 0 + val3 * 4 + val4 * -2
    let texture = val1 * -3 + val2 * 0 + val3 * 0 + val4 * 2
    
    if (capacity < 0) capacity = 0
    else if (capacity == 0) capacity = 1

    if (durability < 0) durability = 0
    else if (durability == 0) durability = 1

    if (flavor < 0) flavor = 0
    else if (flavor == 0) flavor = 1

    if (texture < 0) texture = 0
    else if (texture == 0) texture = 1

    return capacity * durability * flavor * texture
}

let bestScore = -1
for (let combination of teaspoons) {
    let score2 = score(...combination)
    if (score2 > bestScore) bestScore = score2
}

console.log(bestScore)

// answer > 13332
