let data = [
    {
        name: "name1",
        section: "section1",
        standard: "standard1",
        marks: 99,
    },
    {
        name: "name2",
        section: "section1",
        standard: "standard2",
        marks: 55,
    },
    {
        name: "name3",
        section: "section1",
        standard: "standard1",
        marks: 45,
    },
    {
        name: "name4",
        section: "section1",
        standard: "standard2",
        marks: 67,
    },
    {
        name: "name5",
        section: "section1",
        standard: "standard1",
        marks: 25,
    },
];
// data[]

// {
//     standard1:6.3,
//     standard2:9
// }


// function countAverage(data) {
//     let obj = {};
//     let sum1 = 0;
//     let sum2 = 0;

//     let sum3 = 0;


//     for (let i = 0; i < data.length; i++) {

//         if (obj[data[i].standard]) {

//         } else {
//             obj[data[i].standard] = data[i].standard
//         }

//     }

//     for (let j = 0; j < data.length; j++) {
//         if (obj[data[j].standard] == data[j].standard) {
//             sum1 += data[j].marks
//         };

//         obj[data[j].standard]= sum1 / data.length

//     }

//     console.log(obj);
//     // console.log(sum1 / data.length);

//     return obj

// };

// countAverage(data)
const objNew={}
data.forEach(obj=>{
    if(!(obj.standard in objNew)){
        objNew[obj.standard]={marks:obj.marks, count:1}
    }else{
        objNew[obj.standard].count=objNew[obj.standard].count+1
        objNew[obj.standard].marks=objNew[obj.standard].marks+obj.marks;
    }
});



for (const key in objNew) {
    console.log(objNew[key])
     objNew[key]=objNew[key].marks/objNew[key].count
}


console.log(objNew);
