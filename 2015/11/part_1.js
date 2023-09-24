let input = Array.from("hxbxwxba")
let alphabet = "abcdefghijklmnopqrstuvwxyz"

loop: while (true) {
    if (input[input.length - 1] == "z") {
        for (let i = input.length - 1; i >= input.indexOf("z"); i--) {
            if (input[i] == "z") {
                input[i] = "a"
                if (input[i - 1] != "z") {
                    input[i - 1] = alphabet[alphabet.indexOf(input[i - 1]) + 1]
                    break
                }
            }
        }
    } else
        input[input.length - 1] = alphabet[alphabet.indexOf(input[input.length - 1]) + 1]

    if (/[iol]/.test(input))
        continue
    if (!/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/.test(input.join("")))
        continue

    let pair
    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1] && input[i] != pair) {
            if (pair != undefined)
                break loop
            pair = input[i]
        }
    }
}

console.log(input.join(""))
