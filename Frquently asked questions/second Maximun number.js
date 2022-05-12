//  First approach

function secondLarget(arr) {
    let fMax = arr[0]
    let secMax = arr[0]

    for(i = 0; i < arr.length; i++){
        if(arr[i]>fMax){
            fMax = secMax
            fMax = arr[i]
        }else if (arr[i] > secMax){
            secMax = arr[i]
        }
    }
    return secMax
}
console.log(secondLarget( arr = [22, 34, 100, 78,97, 87, 34, 3, 45]))


//  Second Approach

let arr1 = [22, 34, 100, 78,7, 87, 34, 3, 45]

let sArr = arr1.sort((a,b)=>{return a-b})

let lArr = sArr.length

let secMax = sArr[lArr-2]
console.log(secMax)

// ES6
let size = [23,43,64,50,100,12]
console.log(Math.max(...size))