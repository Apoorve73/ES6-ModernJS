/*
Rest parameter "..." turns the incoming parameters to an array.
 */
// (...input) is the rest parameter
const mean = (a,b,...input) => {
    console.log(input)
    let total = 0

    for (i of input) {
        total += i
    }
    console.log(`a = ${a}
b = ${b}`)
    console.log(total)
    return total/input.length
}
arr = [5,6]

// func(...arr) is the spread operator. It takes an array and pass it as an argument for separate variables
// Spread operator is a replacement of func.apply(null, arr)
console.log(mean(...arr,7,1,4,2))

//PRINTS
// [7, 1, 4, 2]
// script.js:11 a = 5
// b = 6
// script.js:13 14
// script.js:17 3.5