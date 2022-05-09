function cal(arr){
    var sum = 0;
    for (const num of arr) {
        sum = sum + num
    }
    return sum
}

let result = cal([7,4,2,6,8,3])
console.log(result)