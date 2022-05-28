//  Find Max Number 

var ele = [35,98,43,78,43]
var max = 0
function maxNum(ele){
    for(let i = 0; i<ele.length;i++){
        if(ele[i]>max){
            max = ele[i]
        }
    }
    return max
}

console.log(maxNum(ele))