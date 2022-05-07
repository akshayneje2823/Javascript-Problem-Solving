let arr1 = [22, 34, 100, 78,97, 87, 34, 3, 45]

let min = arr1[0]
for(i = 0; i <arr1.length;i++){
    
    if(arr1[i]<min){
        min = arr1[i]
    }
}
console.log(min)