let x = [1,2,3,4,5,6]

console.log(x)
 let y = x.filter(()=>true);
 console.log(y) 

                        
//  Solution 2
let a = [10,20,30,40]
console.log("Original Array:")
console.log(a)

let b = Array.from(a);             /* Using Array.from Method */
console.log("Clone Array:")
console.log(b)

// Solution 3 Using slice Method
var array_clone = function (array1){
    return array1.slice(0)
}

console.log(array_clone([100,200,300,400,500]))
console.log(array_clone([100,200,[00,33]]));