let array =  [1,2,3,4,5,'js','python']

//Using For Loop
let reverseArray = [];
for(let i = array.length; i>0; i--){
    reverseArray.push(array[i-1]);
}
console.log(reverseArray) 



/*Using Reduce Method

let reverseArray = array.reduceRight((acc,el)=>{
    acc.push(el)
    return acc
},[]);
console.log(reverseArray)
*/


/* Using Reverse Method
array.reverse();
console.log(array)
*/