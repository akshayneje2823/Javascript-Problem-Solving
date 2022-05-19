function removeDuplicates (num) {
    var x;
    len = num.length,
    out=[];
    obj={};
    
    for(x=0;x<len;x++){
        obj[num[x]]=0;
    }
    for(x in obj){
        out.push(x)
    }
    return out
}
var myNum = [1,2,3,4,5,4,7,8,3,6]
result = removeDuplicates(myNum);
console.log(myNum)
console.log(result)


// ES6 Version

const number = [1,2,3,2,1,3,4,5,3,4,6,7,5,8,6,8,6,5,4]
console.log(...new Set(number))
