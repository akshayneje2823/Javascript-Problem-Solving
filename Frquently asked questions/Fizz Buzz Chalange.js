// for (let i = 1; i < 100; i++) {
//     let f =i%3 == 0,
//     b = i%5 == 0;
//     console.log(f?(b ? 'FizzBuzz': 'Fizz') : b ? 'Buzz' : i)
    
// }


var arr = [21,56,132,67,98,,435,15]

for (let i = 0; i < arr.length; i++) {
    if(i%15==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    } else if (i%5==0) {
        console.log("Buzz")
    }
    else console.log(i)
}