// Convert 12 hrs to 24 hrs

const convert_12_24 = (givenTime) => {

    const [time, modifier] = givenTime.split(' ')
    // console.log(time);
    // console.log(modifier)

    let [hours, minutes] = time.split(':')
    // console.log(hours)
    // console.log(minutes)

    if (hours === "12") hours = "00";

    if (modifier === 'PM') hours = parseInt(hours) + 12;

    return `${hours} : ${minutes}`
};

// convert_12_24("09:50 PM")

console.log(convert_12_24("02:08 PM"))
console.log(convert_12_24("07:08 PM"))
console.log(convert_12_24("12:08 PM"))
console.log(convert_12_24("12:08 AM"))

// let time = '12';

// console.log(parseInt(time))