const countOcc = function(arr,val){
    return arr.reduce((acc,elm)=>{
        return (val === elm ? acc +1 :acc)
    },0);
}
console.log(countOcc(scores,100))