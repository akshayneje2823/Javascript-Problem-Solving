// function Test(){
//     let x = 10;
//     console.log(x)
//     if (x) {
//         console.log(x) 
//     }
// }
// console.log(Test())

// console.log(y)
// // let y = 10
// var y = 12


(function(){
    var a=b=10   // b =10,var a = b
    console.log(typeof(a)) //local scope
    console.log(typeof(b))
})()
console.log(typeof(a)) // get undefined 
console.log(typeof(b))