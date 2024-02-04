let rules = "Al => ThF Al => ThRnFAr B => BCa B => TiB B => TiRnFAr Ca => CaCa Ca => PB Ca => PRnFAr Ca => SiRnFYFAr Ca => SiRnMgAr Ca => SiTh F => CaF F => PMg F => SiAl H => CRnAlAr H => CRnFYFYFAr H => CRnFYMgAr H => CRnMgYFAr H => HCa H => NRnFYFAr H => NRnMgAr H => NTh H => OB H => ORnFAr Mg => BF Mg => TiMg N => CRnFAr N => HSi O => CRnFYFAr O => CRnMgAr O => HP O => NRnFAr O => OTi P => CaP P => PTi P => SiRnFAr Si => CaSi Th => ThCa Ti => BP Ti => TiTi e => HF e => NAl e => OMg";
let medicine = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";
let used = new Set();

rules = rules.replace(/\s=>\s/g, "=").split(" ");

for (let rule of rules) {
    rule = rule.split("=");
    let combination = rule[0];
    let change = rule[1];

    let removedMedicine = "";
    let re = new RegExp(combination);
    
    while (true) {
        let slicedMedicine = medicine.slice(removedMedicine.length);
        
        let match = re.exec(slicedMedicine);
        if (!match) break;
        
        let distinctModule = removedMedicine + slicedMedicine.replace(re, change);
        used.add(distinctModule);
        
        removedMedicine += slicedMedicine.slice(0, match.index + combination.length);
    }
}

console.log(used.size);
