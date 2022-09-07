let text = 'hardcore';

let length = text.length;

let object = { };

for (let i = 0; i < length; i++) {
    let ch = text[i];
    // console.log(ch)

    object[ch] = object[ch] ? object[ch] + 1 :1
    // console.log(object[ch])
}

let keys = Object.keys(object);
// console.log(keys)

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    // console.log(key)
    if (object[key] >=2) {
        console.log(`first repeating number is ${key}`)
        return
    }
    
}