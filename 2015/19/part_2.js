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
