const arr = [1,2,3,4]

// Solution
arr.reduce((accumulator,curerentValue,index,array)=>{
    array[index] = array[index]*2
})