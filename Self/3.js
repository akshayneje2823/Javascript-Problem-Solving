//  Remove Duplicates 

var array = [1,2,3,4,5,2,3,4,9,6,2,3]

//  Solution 1
var uniqueArray = [...new Set(arr)]
console.log(uniqueArray)

// solution 2
var removeDubl = new Set(arr)
console.log(removeDubl)