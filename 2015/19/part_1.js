let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
let used = [];
let obj = {};

rules = rules.replace(/\s=>\s/g, "=").split(" ");

for (let rule of rules) {
    rule = rule.split("=");

    if (obj[rule[0]] == undefined)
        obj[rule[0]] = rule[1];
    else
        obj[rule[0]] = obj[rule[0]] + " " + rule[1];
}

rules = obj;

function check(combination, change) {
    let re = new RegExp(combination, "i");
    let distinctModule = medicine.replace(re, change);

    if (!used.includes(distinctModule)) used.push(distinctModule);
}

for (let i = 0; i < medicine.length; i++) {
    let character = medicine[i];

    if (character = "e") {
        for (let change of rules["e"].split(" "))
            check("e", change);
    } else if (character == character.toLowerCase()) {
        continue
    } else {
        if (!(character == "B" || character == "F" || character == "H" || character == "N" || character == "O" || character == "P"))
            character = character + medicine[i + 1];

        for (let change of rules[character].split(" "))
            check(character, change);
    }
}

console.log(used.length);
