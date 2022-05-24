var arr = ["a","b","c","d","e","f","g"]

// Method 1
arr = []
console.log(arr)


// Method 2
var arr1 = ["a","b","c","d","e","f","g"]
arr1.length = 0
console.log(arr1)


// Method 3
var arr2 = ["a","b","c","d","e","f","g"]
arr2.splice(0,arr2.length)
console.log(arr2)


// Method 4
var arr3 = ["a","b","c","d","e","f","g"]
while(arr3.length){
    arr3.pop()
}
console.log(arr3)
