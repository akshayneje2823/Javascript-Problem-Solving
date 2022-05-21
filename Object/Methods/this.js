const student = {
    firstName: "Vivek",
    lastName:"Jha",
    id: 5566,

    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(student)