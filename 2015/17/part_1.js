// not done
let containers = "50 44 11 49 42 46 18 32 26 40 21 7 18 43 10 47 36 24 22 40".split(" ");
containers = containers.map(num => Number(num));
let answer = 0;

let minimumContainers = 0;
let counter = 0;
let containersClone = containers.concat();
while (true) {
    let smallestNum = Math.min(...containersClone);
    containersClone.splice(containersClone.indexOf(smallestNum), 1);
    
    if (counter + smallestNum <= 150) {
        counter += smallestNum;
        minimumContainers++;
    } else {
        break;
    }
}

function allPossibleOutcomes(...input) {
    if (input.length == 1) return [[input[0]]];
    let allPaths = [];
    let values = input.slice(0);

    for (let value of values) {
        values = input.slice(0);
        values.splice(values.indexOf(value), 1);

        let outcomes = allPossibleOutcomes(...values);
        for (let i = 0; i < outcomes.length; i++) {
            allPaths.push([value].concat(outcomes[i]));
        }
    }
    return allPaths;
}


// for (let combination of allPossibleOutcomes(...containers))
//     if (combination.reduce((a, b) => Number(a) + Number(b)) == 150) answer++;

// console.log(answer);
