let array = [0, 3, 0, 2, 32, 0, 1, 0, 3, 3, 32, 0]



// [3, 2, 32, 1, 3, 3, 32, 0, 0, 0, 0, 0]

function myFunc(arr) {
    for (let i = 0; i < arr.length; i++) {

        var newArray = [];
        var temp = [];

        if (arr[i] == 0) {

            temp.push(arr[i])

        } else {
            console.log(arr[i])
            // console.log(temp)
        }

    }
    return "New Array " + newArray
}

console.log(myFunc(array))

