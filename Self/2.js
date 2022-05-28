//  Find second max number

var a = [32,45,78,98,4,43,32];
console.log(a)

// sort an array
var aSort   = a.sort((a,b)=> a-b);
console.log(aSort);

//  Find the length of array
var aLength = aSort.length;

// 
var seccMax = aSort[aLength-2];
console.log(seccMax)




