// Higher order function ==>
//               function That operates on other function,either taking them as paramter or
//               by taking them as arguments or by returning them,
//               are called higher order function


//By taking argumnets

function higherOreder(x){
     return x();
};
let example = ()=>{console.log("Hello")}
console.log(higherOreder(example))


// by returnig a function

function higherOder1(){
    return function(){
       return console.log("World")
    }
}
let example2 = higherOder1()
console.log(example2())
