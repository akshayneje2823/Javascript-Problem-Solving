var array1 = [4,8,10,9,5]

var array2 = [5,10,8,9,4]

const is_Same = array1.length == array2.length &&
array1.every((curEle)=>{
    if(array2.indexOf(curEle)> -1){
        return (curEle =array2[array2.indexOf(curEle)])
    }
});
console.log(is_Same)


// We need to use Array.prototype.every() ==> It will test whether all elem in the pass the test implemented provided function .
// It return boolean value only

console.log(5<6<7) // true
console.log(7>6>5) //false


let profile = {
    name: "Akshay"
};

profile.age = 22;

// Object.freeze(profile);     // function will freeze the object length
Object.seal(profile);          // function will freeze the object length

profile.sal = 22000;

profile.name = "interview"
console.log(profile)

//  What will be the output of following clg
console.log(Math.max())  // => -Infinity