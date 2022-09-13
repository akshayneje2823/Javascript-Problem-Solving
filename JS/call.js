function sayHello(){
    return "Hello " + this.name
};
var obj = {
    name:"Sanday"
};

console.log(sayHello.call(obj))