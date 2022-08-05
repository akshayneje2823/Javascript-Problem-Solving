// What are the ways for creating an object


// 1.literal
var pat = {"name":"","Address":""}



// 2.object.create
var patNew = Object.create(pat);
patNew.age = 23

console.log(patNew)


// 3.Using Constructor way

function Patient(){
    this.name = "Sagar";
    this.surname = "Jha";
    this.Admit = function(){

    }
}
let pat1 = new Patient()
console.log(pat1)


// 4.Using Class
class PatientClass{
    constructor(name,address){
        this.name="Duumy";
        this.address="UK"
    }
}
var p = new PatientClass()
console.log(p)