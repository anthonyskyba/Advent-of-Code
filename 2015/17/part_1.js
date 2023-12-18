
// 40 => 41, 18 => 19
let containers = "50 44 11 49 42 46 18 32 26 40 21 7 19 43 10 47 36 24 22 41".split(" ");
containers = containers.map(num => Number(num));
let containers2 = {};
let possibleOutcomes = [];
let answers = 0;

let counter = 0;
for (let container of containers) {
    counter++;
    containers2[container] = counter;
}

function alreadyUsed(sumArray) {
    function comparison(id1, id2) {
        if (id1.length !== id2.length) return false;

        for (let element of id1) {
            if (id2.includes(element))
                id2.splice(id2.indexOf(element), 1);
            else
                return false;
        }
        return true;
    }
    
    let id = [];

    for (let value of sumArray)
        id.push(containers2[value]);

    for (let outcome of possibleOutcomes) {
        let outcomeId = [];
        for (let value2 of outcome)
            outcomeId.push(containers2[value2]);

        if (comparison(outcomeId, id)) return true;
    }

    return false;
}

function iterate(current, remaining) {
    let values = remaining.slice(0);

    for (let value of remaining) {
        let newValue = current.concat(value);
        let sum = newValue.reduce((a, b) => a + b);
        values.shift();

        if (newValue.includes(41)) sum--;
        if (newValue.includes(19)) sum--;

        if (sum == 150) {
            if (!alreadyUsed(newValue)) {
                answers++;
                possibleOutcomes.push(newValue);
            }
        } else if (sum < 150) {
            iterate(newValue, values);
        }
    }
}

iterate([], containers);
console.log(answers);

// answer = 654
