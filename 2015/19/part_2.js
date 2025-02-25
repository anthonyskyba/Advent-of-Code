// I think it works, but it's too slow. Currently using a BFS type system, I should look into trying DFS

let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
// let rules = "e => H e => O H => HO H => OH O => HH";
// let medicine = "HOH";
let used = [["e"]];

rules = rules.replace(/\s=>\s/g, "=").split(" ");

let indexUsed = -1;
let x = 0

// Loop 1
for (let current of used) {
    current = current[current.length - 1];
    indexUsed++;

    if (current == medicine) continue;

    let index = -1;

    // Loop 2
    for (let char of current) {
        index++;
    
        if (char != "e" && lower(char)) continue;
    
        let molecule;
        let nextChar = current[index + 1];
    
        if (lower(nextChar) && nextChar != "e")
            molecule = char + nextChar;
        else
            molecule = char;

        // Loop 3
        ruleLoop: for (let rule of rules) {
            rule = rule.split("=");
            let combination = rule[0];
            let change = rule[1];

            if (combination != molecule) continue;

            let secondHalfStart = index + 1;
            if (molecule.length == 2) secondHalfStart++;

            let firstHalf = current.slice(0, index);
            let secondHalf = current.slice(secondHalfStart);
            let newMedicine = firstHalf + change + secondHalf;

            let currentCopy = used[indexUsed].concat(newMedicine);
            
            if (newMedicine.length > medicine.length) continue;

            for (let path of used) {
                if (equalArray(path, currentCopy)) {
                    continue ruleLoop;
                }
            }

            used.push(currentCopy);
        }
    }
}


function equalArray(a, b) {
    if (a.length != b.length) return false;

    let counter = -1;
    for (ele of a) {
        counter++;

        if (ele != b[counter]) return false;
    }

    return true;
}

function lower(letter) {
    return letter != undefined && letter == letter.toLowerCase();
}

let currentShortest = Infinity;
for (let arr of used) {
    let len = arr.length;
    if (arr[arr.length - 1] == medicine && arr.length < currentShortest)
        currentShortest = arr.length;
}

console.log(currentShortest - 1);






// solution that didn't work but I was trying something new
// // let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
// // let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
// let rules = "e => H e => O H => HO H => OH O => HH";
// let medicine = "HOHOHO";

// rules = rules.replace(/\s=>\s/g, "=").split(" ");
// rulesDict = {};

// for (let rule of rules) {
//     rule = rule.split("=");
//     rulesDict[rule[1]] = rule[0];
// }
// rules = rulesDict;

// let steps = 0;
// let char;
// let tester = 0;

// outer: while (true) {
//     let smallest = Infinity;
//     let replacement;
//     for (let key in rules) {

//         let pos = medicine.indexOf(key);
//         if (pos == -1) continue;
        
//         replacement = rules[key];
//         if (replacement == "e" && medicine == key) break outer;

//         if (pos < smallest && rules[key] != "e") {
//             smallest = pos;
//             char = key;
//         }
//     }

//     medicine = medicine.replace(char, replacement);
//     steps++;
// }

// console.log(steps + 1);






// Check randomly solution (ran it for a while and in terms of the math it seems far too slow)

// let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
// let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
// // let rules = "e => H e => O H => HO H => OH O => HH";
// // let medicine = "HOH";

// rules = rules.replace(/\s=>\s/g, "=").split(" ");
// let tempDict = {};

// for (let rule of rules) {
//     rule = rule.split("=");
//     if (tempDict[rule[0]] == undefined)
//         tempDict[rule[0]] = [];
//     tempDict[rule[0]].push(rule[1]);
// }

// rules = tempDict;

// let current = "e";
// let steps = 0;

// while (current != medicine) {
//     let potential = [];

//     for (let match in rules) {
//         if (current.indexOf(match) != -1)
//             potential.push(match);
//     }

//     let randomMatch = potential[Math.floor(Math.random() * potential.length)];
//     let replacements = rules[randomMatch];
//     let randomReplacement = replacements[Math.floor(Math.random() * replacements.length)];
//     current = current.replace(randomMatch, randomReplacement);
//     steps++;

//     if (current.length > medicine.length) {
//         current = "e";
//         steps = 0;
//     }
// }

// console.log(steps)










// Check randomly and mark down which have been explored, if it's a dead end, then backtrack. essentially dfs that checks randomly down to the bottom then works its way back up.

// let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
// let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
// // let rules = "e => H e => O H => HO H => OH O => HH";
// // let medicine = "HOHOHO";

// rules = rules.replace(/\s=>\s/g, "=").split(" ");
// let tempDict = {};

// for (let rule of rules) {
//     rule = rule.split("=");
//     tempDict[rule[1]] = rule[0];
//     // if (tempDict[rule[0]] == undefined)
//     //     tempDict[rule[0]] = [];
//     // tempDict[rule[0]].push(rule[1]);
// }

// rules = tempDict;

// let current = "e";
// let deadEnds = new Set();
// let path = [current];

// while (current != medicine) {
//     let potential = [];

//     for (let replacement in rules) {
//         let match = rules[replacement];
//         if (current.indexOf(match) != -1) {
//             potential.push({});
//             potential[potential.length - 1][match] = replacement;
//         }
//     }

//     function update() {       
//         let randomIndex = Math.floor(Math.random() * potential.length);
//         let randomDict = potential[randomIndex];
//         let match = Object.keys(randomDict)[0];
//         current = current.replace(match, randomDict[match]);
//         path.push(current);

//         if (current == medicine) return;
//         if (current.length >= medicine.length) deadEnds.add(current);

//         if (deadEnds.has(current)) {
//             function reset() {
//                 path.pop();
//                 current = path[path.length - 1];
//             }
//             reset();

//             if (potential.length == 1) {
//                 deadEnds.add(current);
//                 reset();
//                 return;
//             }
            
//             potential.splice(randomIndex, 1);
//             update();
//         }
//     }

//     update();

//     if (deadEnds.has("e")) {
//         console.log("impossible path");
//         break;
//     }
// }

// console.log(path.length - 1);
