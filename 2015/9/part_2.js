let input = "AlphaCentauri to Snowdin = 66 AlphaCentauri to Tambi = 28 AlphaCentauri to Faerun = 60 AlphaCentauri to Norrath = 34 AlphaCentauri to Straylight = 34 AlphaCentauri to Tristram = 3 AlphaCentauri to Arbre = 108 Snowdin to Tambi = 22 Snowdin to Faerun = 12 Snowdin to Norrath = 91 Snowdin to Straylight = 121 Snowdin to Tristram = 111 Snowdin to Arbre = 71 Tambi to Faerun = 39 Tambi to Norrath = 113 Tambi to Straylight = 130 Tambi to Tristram = 35 Tambi to Arbre = 40 Faerun to Norrath = 63 Faerun to Straylight = 21 Faerun to Tristram = 57 Faerun to Arbre = 83 Norrath to Straylight = 9 Norrath to Tristram = 50 Norrath to Arbre = 60 Straylight to Tristram = 27 Straylight to Arbre = 81 Tristram to Arbre = 90 "
let counter = 0
let inputArray = []
let index = -1, lastIndex = 0

for (let character of input) {
    index++
    if (character == " ") counter++
    if (counter == 5) {
        inputArray.push(input.slice(lastIndex, index))
        lastIndex = index + 1
        counter = 0
    }
}

let distances = {}
let locations = ["AlphaCentauri", "Snowdin", "Tambi", "Faerun", "Norrath", "Straylight", "Tristram", "Arbre"]
let uniquePaths = []
let breakLoop = false

for (let distance of inputArray) {
    distances[distance.split(" ")[0] + distance.split(" ")[2]] = Number(distance.split(" ")[4])
    distances[distance.split(" ")[2] + distance.split(" ")[0]] = Number(distance.split(" ")[4])
}


function allPossibleOutcomes(...input) {
    if (input.length == 1)
        return [[input[0]]]

    let allPaths = []
    let values = input.slice(0)
    for (let value of values) {
        values = input.slice(0)
        values.splice(values.indexOf(value), 1)

        let outcomes = allPossibleOutcomes(...values)
        for (let i = 0; i < outcomes.length; i++) {
            allPaths.push([value].concat(outcomes[i]))
        }            
    }
    return allPaths
}

let longestDistance = 0
let distance = 0

for (let variation of allPossibleOutcomes(...locations)) {
    for (let i = 1; i < variation.length; i++) {
        distance += Number(distances[`${String(variation[i - 1]) + String(variation[i])}`])
    }
    if (distance > longestDistance) longestDistance = distance
    distance = 0
}

console.log(longestDistance)
