let employees = [
    {
        id: 101, name: "Amar"   //not print
    },
    {
        id: 102, name: "Baharat"
    },
    {
        id: 103, name: "Chandu"
    },
    {
        id: 104, name: "Darshan"
    },
    {
        id: 105, name: "Eknath" //not print
    },
    {
        id: 106, name: "Farukh"
    },
    {
        id: 107, name: "Ganesh"
    },
    {
        id: 108, name: "Hemant"
    },
    {
        id: 109, name: "Ideallaa"  //not print
    },
    {
        id: 110, name: "Javed"
    },
    {
        id: 111, name: "karan"
    },
    
];

employees.map(emp => {
    if (!emp.name.startsWith("A") ||
        emp.name.startsWith("E") ||
        emp.name.startsWith("I") ||
        emp.name.startsWith("O") ||
        emp.name.startsWith("U") 
    ){
        console.log(emp.name)
    }
})

// console.log(values)