// How we can check datatype of while passing a value to the function

function add(a){
    return a;
};
var string = add("Number")
var number = add(09)
var boolean = add(false)
var array = add([12,233,32,"ak;lk"])
var object = add({name:"Akshay",Surname:"Neje"})



console.log(typeof(number))

console.log(typeof(string))

console.log(typeof(boolean))

console.log(typeof(array))

console.log(typeof(object))
