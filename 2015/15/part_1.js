let input = [
    "Sugar: capacity 3, durability 0, flavor 0, texture -3, calories 2",
    "Sprinkles: capacity -3, durability 3, flavor 0, texture 0, calories 9",
    "Candy: capacity -1, durability 0, flavor 4, texture 0, calories 1",
    "Chocolate: capacity 0, durability 0, flavor -2, texture 2, calories 8",
]
// this entire thing is hard coded

let teaspoons = [[0, 0, 0, 0]]

while (teaspoons[0][0] != 100) {
    let values = teaspoons[0].concat()

    if (values[3] == 100) {
        values[3] = 0
        if (values[2] != 100)
            values[2] = values[2] + 1
        else
            if (values[1] != 100)
                values[1] = values[1] + 1
            else
                if (values[0] != 100)
                    values[0] = values[0] + 1
    } else {
        values[3] = values[3] + 1
    }
    teaspoons.unshift(values)
}

function score(val1, val2, val3, val4) {
    console.log(val1, val2, val3, val4, "values")
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

    console.log(capacity, durability, flavor, texture, "vals")
    console.log(capacity * durability * flavor * texture, "output")
    return capacity * durability * flavor * texture
}

let bestScore = -1
for (let combination of teaspoons) {
    if (combination.reduce((a, b) => a + b) == 100) {
        let score2 = score(...combination)
        if (score2 > bestScore) bestScore = score2
    }
}

console.log(bestScore)

// answer > 13332
