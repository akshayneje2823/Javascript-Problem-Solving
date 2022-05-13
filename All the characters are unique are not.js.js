//  Using ES6 

const array = [1,2,3,4,5,"",]

const findUnique = (ary) => { 
    return [...new Set(array)]
}


console.log(findUnique(array))

// Using bulit in methods


const array2 = [1,2,3,4,5,2,3]

const uniqArr = (array2) => {
    return (array2.reduce((acc, currentValue) =>{
        acc.includes(currentValue) ? acc : [...acc , currentValue]
    },[]))
}
console.log(uniqArr(array2))