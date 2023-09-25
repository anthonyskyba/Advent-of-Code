let input = " Rudolph can fly 22 km/s for 8 seconds, but then must rest for 165 seconds. Cupid can fly 8 km/s for 17 seconds, but then must rest for 114 seconds. Prancer can fly 18 km/s for 6 seconds, but then must rest for 103 seconds. Donner can fly 25 km/s for 6 seconds, but then must rest for 145 seconds. Dasher can fly 11 km/s for 12 seconds, but then must rest for 125 seconds. Comet can fly 21 km/s for 6 seconds, but then must rest for 121 seconds. Blitzen can fly 18 km/s for 3 seconds, but then must rest for 50 seconds. Vixen can fly 20 km/s for 4 seconds, but then must rest for 75 seconds. Dancer can fly 7 km/s for 20 seconds, but then must rest for 119 seconds."
input = input.split(".")
input.pop()
let stats = []

for (let reindeer of input) {
    reindeer = reindeer.split(" ")
    reindeer.shift()
    stats.push(reindeer[0] + " " + reindeer[3] + " " + reindeer[6] + " " + reindeer[13])
}

// 2503 seconds
let reindeerDistances = []

for (let stat of stats) {
    stat = stat.split(" ")
    let seconds = 0
    let distance = 0
    while (seconds < 2503) {
        if (seconds + Number(stat[2]) > 2503) {
            distance += (2503 - seconds) * Number(stat[1])
            break
        }
        seconds += Number(stat[2])
        distance += Number(stat[1]) * Number(stat[2])
        seconds += Number(stat[3])
    }
    reindeerDistances.push(stat[0] + " " + distance + " " + seconds)
}

let output = 0

for (let reindeer of reindeerDistances) {
    if (Number(reindeer.split(" ")[1]) > output)
        output = Number(reindeer.split(" ")[1])
}

console.log(output)
