// var arr1 = [-3,8,7,6,5,-4,3,2,1]
// var arr2 = []
//  var min = arr1[0]
// var pos;
// var max  = arr1[0]

// for (i=0; i<arr1.length; i++){
//     if(max<arr1[i]) max = arr1[i];
// }
// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);


// ES6 version
const arr1 = [-3,8,7,6,5,-4,3,2,1]
const arr2 = [];
let min = arr1[0];
var max=arr1[0]

for(i=0; i<arr1.length;i++){
    if(max < arr1[i]) max = arr1[i];
}
for (var i=0; i<arr1.length; j++){
    for(var j=0; j<arr1.length; j++){
        if(arr1[j]!= "x"){
            if(min>arr1[j]){
                min = arr1[j];
                pos=j;
            }
        }
    }
    arr2[i]=min;
    arr1[pos] = "x";
    min=max;
}
console.log(arr2)