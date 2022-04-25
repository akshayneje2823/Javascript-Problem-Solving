/*
    Write a javascript program to get curreb=nt date:
    Expected Output :
     mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy , dd/mm/yyyy
*/

const forDate = (date = new Date()) =>{
    const currentDate = date.getDate() + 0;
    const months = date.getMonth() +0;
    const Years = date.getFullYear() +0
    return `${currentDate}/${months}/${Years}`
}
console.log(forDate())