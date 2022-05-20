// How could you print unique values from an array?


const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

// Solution ==>


function getUniqueValues(){
    const set = new set(arrOfNum)
    return[...set]
}

// A value in the Set may only occur once; it is unique in the Set's collection.



// const set = new set(arrOfNum)
// console.log([...set])           ===> We Cannot do like this