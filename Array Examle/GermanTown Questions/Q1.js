// input = [0,1,1,2,4,0,3,5]
// output = [1,1,2,3,4,5,0,0]


function myFunc(arr){
    let val0 = arr.filter((cur)=> {
        return cur == 0;
        })
    let val1 = arr.filter((cur)=>{
        return cur !== 0;
    })
    return val1.sort().concat(val0)
}
let output = myFunc([0,1,1,2,4,0,3,5])
console.log(output)