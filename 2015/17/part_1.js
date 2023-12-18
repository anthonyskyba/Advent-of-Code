let containers = "50 44 11 49 42 46 18 32 26 40 21 7 19 43 10 47 36 24 22 41".split(" ");
containers = containers.map(num => Number(num));
let containers2 = {};
let possibleOutcomes = [];
let answers = 0;
let previousValue;

let counter = 0;
for (let container of containers) {
    counter++;
    containers2[container] = counter;
}

function alreadyUsed(sumArray) {

    function comparison(id1, id2) {
        if (id1.length !== id2.length) return false;
        for (let element of id1) {
            if (id2.includes(element)) {
                id2.splice(id2.indexOf(element), 1);
            } else {
                return false;
            }
        }

        return true;
    }
    
    let id = [];

    for (let value of sumArray)
        id.push(containers2[value]);

    for (let outcome of possibleOutcomes) {
        // if (previousValue) possibleOutcomes.splice(possibleOutcomes.indexOf(outcome), 1);
        let outcomeId = [];
        for (let value2 of outcome)
            outcomeId.push(containers2[value2]);

        if (comparison(outcomeId, id))
            return true;
    }

    return false;
}

function possibleCombinations(input) {  
    let values = input.concat();
    for (let value of input) {
        console.log(value)
        if (value != "50") previousValue = values[values.indexOf(value) - 1];
        values.pop();
        let values2 = values.concat();
        
        for (let value2 of values2) {
            console.log(value2, "val2")
            values2.pop();
            let values3 = values2.concat();

            for (let value3 of values3) {
                values3.pop();
                let values4 = values3.concat();

                for (let value4 of values4) {
                    values4.pop();
                    let values5 = values4.concat();

                    let sumArray = [value, value2, value3, value4];

                    for (let valueX of sumArray)
                            if (valueX == 19 || valueX == 41) valueX -= 1;

                    let sum = value + value2 + value3 + value4;

                    if (sum == 150 && !alreadyUsed(sumArray)) {
                        answers++;
                        possibleOutcomes.push(sumArray);
                    }
                    else if (sum < 150) {
                        for (let value5 of values5) {
                            values5.pop();
                            let values6 = values5.concat();

                            let sum2Array = [value, value2, value3, value4, value5];
                            
                            for (let valueX of sum2Array)
                                if (valueX == 19 || valueX == 41) valueX -= 1;
                            
                            let sum2 = value + value2 + value3 + value4 + value5;

                            if (sum2 == 150 && !alreadyUsed(sum2Array)) {
                                answers++;
                                possibleOutcomes.push(sum2Array);
                            }
                            else if (sum2 < 150) {
                                for (let value6 of values6) {
                                    values6.pop();
                                    let values7 = values6.concat();

                                    let sum3Array = [value, value2, value3, value4, value5, value6];

                                    for (let valueX of sum3Array)
                                        if (valueX == 19 || valueX == 41) valueX -= 1;

                                    let sum3 = value + value2 + value3 + value4 + value5 + value6;

                                    if (sum3 == 150 && !alreadyUsed(sum3Array)) {
                                        answers++;
                                        possibleOutcomes.push(sum3Array);
                                    }
                                    else if (sum3 < 150) {
                                        for (let value7 of values7) {
                                            values7.pop();
                                            let values8 = values7.concat();

                                            let sum4Array = [value, value2, value3, value4, value5, value6, value7];

                                            for (let valueX of sum4Array)
                                                if (valueX == 19 || valueX == 41) valueX -= 1;

                                            let sum4 = value + value2 + value3 + value4 + value5 + value6 + value7;

                                            if (sum4 == 150 && !alreadyUsed(sum4Array)) {
                                                answers++;
                                                possibleOutcomes.push(sum4Array);
                                            }
                                            else if (sum4 < 150) {
                                                for (let value8 of values8) {
                                                    values8.pop();

                                                    let sum5Array = [value, value2, value3, value4, value5, value6, value7, value8]

                                                    for (let valueX of sum2Array)
                                                        if (valueX == 19 || valueX == 41) valueX -= 1;

                                                    if (value + value2 + value3 + value4 + value5 + value6 + value7 + value8 == 150 && !alreadyUsed(sum5Array)) {
                                                        possibleOutcomes.push(sum5Array);
                                                        answers++;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

possibleCombinations(containers);
console.log(answers);

// answer > 401
// answer < 55434
// answer < 55430
// answer != 105

// 54193
// 58717
