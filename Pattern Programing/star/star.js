// for (let i = 0; i <= 5; i++) {
//     console.log("*");
//     for (let j = 0; j <= i; j++) {
//         console.log("*");    
//     }
//     console.log('/n')
// }




let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
  str = str + "\n"
}
console.log(str)