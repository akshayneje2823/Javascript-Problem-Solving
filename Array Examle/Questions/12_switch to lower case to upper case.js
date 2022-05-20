// THE QUICK BROWN BOX CONVERT INTO 
// tHE qUICK bROWN bOX

    var str = 'akshay';
    var upper = "ABCDEFGH";
    var lower = "abcdefg";
    var result = [];


    for(var x=0;x<str.length;x++){
        if(upper.indexOf(str[x])!== -1){
            result.push(str[x].toLocaleLowerCase())
        }
        else if(lower.indexOf(str[x])!== -1){
            result.push(str[x].toLocaleUpperCase());
        }
        else{
            result.push(str[x])
        }
    }
    console.log(result.join(''))