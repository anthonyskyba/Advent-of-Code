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

for (let distance of inputArray)
    distances[distance.split(" ")[0] + distance.split(" ")[2]] = Number(distance.split(" ")[4])

function twoLocations(location1, location2) {
    return [[location1, location2], [location2, location1]]
}

function threeLocations(location1, location2, location3) {
    for (let location of [location1, location2, location3]) {
        let locations = [location1, location2, location3]
        locations.splice(locations.indexOf(location), 1)
        uniquePaths.push(...[location].concat(twoLocations(locations[0], locations[1])))
    }
    return uniquePaths
}

console.log(threeLocations("a", "b", "c"))

/* Some other stuff that I tried:


function possibleOutcomes(allValues) {
    if (z == 6) return 1
    if (allValues.length == 2)
        return [allValues[0] + " " + allValues[1], allValues[1] + " " + allValues[0]]


    for (let value of allValues) {
        let allValues2 = allValues.concat()
        allValues2.splice(allValues.indexOf(value), 1)
        let recursionValues = possibleOutcomes(allValues2)
        console.log(recursionValues)

        for (let i = 0; i < recursionValues.length; i++) {
            uniquePaths.push(value + " " + recursionValues[i])
        }
    }
    return uniquePaths
}

console.log(possibleOutcomes(locations))

// console.log(locations)


for (let index1 of locations) {
    let locations2 = locations.slice(locations.indexOf(index1) + 1)
    console.log(locations2)
    for (let index2 of locations2) {
        let locations3 = locations2.shift()
        for (let index3 of locations3) {
            let locations4 = locations3.shift()
            for (let index4 of locations4) {
                let locations5 = locations4.shift()
                for (let index5 of locations5) {
                    let locations6 = locations5.shift()
                    for (let index6 of locations6) {
                        let locations7 = locations6.shift()
                        for (let index7 of locations7) {
                            let locations8 = locations7.shift()
                            for (let index8 of locations8) {
                                uniquePaths.push([index1, index2, index3, index4, index5, index6, index7, index8])
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(uniquePaths)

let index1 = -1
let index2 = -1
for (let location1 of locations) {
    index1++
    for (let location2 of locations.slice(index1 + 1)) {
        index2++
        uniquePaths[index1]
    }
} 

*/
