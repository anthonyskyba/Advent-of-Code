let input = "1113122113 "
let output = ""
let index = -1
let lastDigit
let amount = "0"

for (let i = 0; i < 50; i++) {
    for (let digit of input) {
        index++
        if (index == 0) lastDigit = digit
        if (index + 1 == input.length || digit != lastDigit) { 
            output += amount + lastDigit
            amount = "1"
        }
        else amount = String(Number(amount) + 1)
        lastDigit = digit
    }
    input = output + " "
    output = ""
    index = -1
    amount = "0"
}

console.log(input.length - 1)
