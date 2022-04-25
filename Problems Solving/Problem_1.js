// Weite a Javac=script Program to get the extension of a filename.


const getFileExtension = (str) => str.slice
(str.lastIndexOf("."))

console.log(getFileExtension("index.html"))
console.log(getFileExtension("web.stack.html"))