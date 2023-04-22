function getFactorial(n) {
    let res = 1
    if (n) {
        return res * n * getFactorial(n - 1)
    }
    return res
}

console.log(getFactorial(100))