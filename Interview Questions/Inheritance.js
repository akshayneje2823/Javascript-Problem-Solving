// Inheritance

function Employee(){
    this.name = "sagar"
    this.DoWork = function (){
       return console.log("Basic Work")
    }
    this.Attendence = function (){
        
        return console.log("Attendence Needed")
    }
}

function ManagerS(){
    this.Cabin = "Akshay"
    this.DoWork = function(){
      return  console.log("Manage team")
    }
}

var emp = new Employee();
ManagerS.prototype = emp


var man = new ManagerS
var dowork = man.DoWork()
var name = man.name
console.log(name)
console.log(dowork)