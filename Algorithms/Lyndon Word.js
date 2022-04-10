const S = ['0', '1']

function lyndonGenerator(wordLength, ) {
    let result = ['0'],
        w = '0', lengthS = S.length

    while (w !== S[lengthS - 1]) {
        let length = w.length,
            index = 0

        while (length < wordLength) {
            w += w[index % length]
            index++
            length = w.length
        }

        for (let i = (wordLength - 1); i >= 0; i--) {
            if (w[i] !== S[lengthS - 1]) {
                break
            } else {
                w = w.slice(0, -1)
            }
        }

        let indexValue = S.indexOf(w[w.length - 1]) + 1
        w = w.slice(0, -1) + S[indexValue]

        result.push(w)
    }

    return result
}

console.log(lyndonGenerator(5))