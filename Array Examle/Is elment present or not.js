function identical(arr){
    var f = arr[0];
    for(i = 0; i <= arr.length; i++){
        if(arr[i] != f){
            return false
        }
    }
}
let result = identical([10,20,30,40,50])
console.log(result)