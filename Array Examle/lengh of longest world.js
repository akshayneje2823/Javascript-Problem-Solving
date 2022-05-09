function longestWord(text){

    var spltxt = text.split(" ");
    var lngWord = 0;

    for(i = 0; i < spltxt.length; i++){
        if(spltxt[i].length > lngWord){
            lngWord = spltxt[i].length
        }
    }
    return lngWord
}
var result = longestWord("Find the longest word in the array")
console.log(result)


var s = "Find the longest word in the array"

var t = s.split(" ")

var u = t.sort((a,b)=>b.length - a.length)

var v = u[0]

console.log(v)