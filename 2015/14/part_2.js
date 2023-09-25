let input = " Rudolph can fly 22 km/s for 8 seconds, but then must rest for 165 seconds. Cupid can fly 8 km/s for 17 seconds, but then must rest for 114 seconds. Prancer can fly 18 km/s for 6 seconds, but then must rest for 103 seconds. Donner can fly 25 km/s for 6 seconds, but then must rest for 145 seconds. Dasher can fly 11 km/s for 12 seconds, but then must rest for 125 seconds. Comet can fly 21 km/s for 6 seconds, but then must rest for 121 seconds. Blitzen can fly 18 km/s for 3 seconds, but then must rest for 50 seconds. Vixen can fly 20 km/s for 4 seconds, but then must rest for 75 seconds. Dancer can fly 7 km/s for 20 seconds, but then must rest for 119 seconds."
input = input.split(".")
input.pop()
let stats = []

for (let reindeer of input) {
    reindeer = reindeer.split(" ")
    reindeer.shift()
    stats.push(reindeer[0] + " " + reindeer[3] + " " + reindeer[6] + " " + reindeer[13])
}

let reindeerDistances = []

for (let stat of stats) {
    stat = stat.split(" ")
    let kms = Number(stat[1])
    let flyTime = Number(stat[2])
    let resting
    let seconds = 0
    let distance = {0: 0}

    while (seconds != 2503) {
        seconds++
        if (flyTime > 0) {
            distance[seconds] = kms + distance[seconds - 1]
            flyTime--
            if (flyTime == 0) resting = Number(stat[3])
        } else {
            distance[seconds] = distance[seconds - 1]
            resting--
            if (resting == 0) flyTime = Number(stat[2])
        }
    }
    reindeerDistances.push(distance)
}

let points = new Map()
let index = -1

while (points.size != reindeerDistances.length) {
    index++
    points.set(index, 0)
}

for (let i = 1; i <= 2503; i++) {
    let compare = []
    for (let j = 0; j < reindeerDistances.length; j++) {
        compare.push(reindeerDistances[j][i])
        if (j == 0) compare[j] = ("a" + String(compare[j]))
        else compare[j] = Number(String(j) + String(compare[j]))
    }

    
    let winner = Math.max(...(compare.map(a => Number(String(a).slice(1)))))

    for (let element of compare) {
        element = String(element)
        let reindeer = element[0]
        element = element.slice(1)
        if (reindeer == "a" && Number(element) == winner)
            points.set(0, points.get(0) + 1)
        else if (Number(element) == winner)
            points.set(Number(reindeer), points.get(Number(reindeer)) + 1)
    }
}

console.log(points)
