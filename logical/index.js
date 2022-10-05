// let array = [0, 3, 0, 2, 32, 0, 1, 0, 3, 3, 32, 0]



// [3, 2, 32, 1, 3, 3, 32, 0, 0, 0, 0, 0]

// function myFunc(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         var newArray = [];
//         var temp = [];

//         if (arr[i] == 0) {

//             temp.push(arr[i])

//         } else {
//             console.log(arr[i])
//             // console.log(temp)
//         }

//     }
//     return "New Array " + newArray
// }

// console.log(myFunc(array))



// let array = [0, 3, 0, 2, 32, 0, 1, 0, 3, 3, 32, 0];

// function addZeroToLast(arr) {

//     let newArray;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {

//             var temp = arr[i]
//             console.log(temp)

//         }else 
//         if (arr[i] !== 0){

//             var temp2 = arr[i];
//             console.log(temp2)
//         }

//     }

//     return  newArray = [temp,temp2]
// }
// console.log(addZeroToLast(array))



// function getZero(arr) {
//     var ans = []
//     var fArray = Array(0)
//     for (let i = 0; i > arr.lenth; i++) {
//         if (arr[i] !== 0) {
//             console.log(arr[i])
//         }
//     }
//     return fArray
// }

// console.log(getZero(array))


// function largest(arr) {
//     let i;

//     // Initialize maximum element
//     let max;

//     // Traverse array elements 
//     // from second and compare
//     // every element with current max 
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i];
//     }

//   return max;
// }
// console.log(largest(array))


// let array = [0,1,2,0,4,78,0]
// let ans =array.map((ele)=>{
//     if(ele !=0){
//         let a = []
//         return a.push(ele)
//     }
// })
// console.log(ans)


let array = [10, 0, 1, 2, 0, 4, 78, 0];

function newArray(arr) {
    let a = [];
    let b = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            a.push(arr[i])
             continue
        }

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == 0) {
                b.push(arr[j])
                break

            }
        }
    }
    return  [...a, ...b]
}
console.log(newArray(array))