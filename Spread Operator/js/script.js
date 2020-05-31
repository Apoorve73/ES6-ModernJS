//es5
/*
In javascript, arr.concat(arr1) is used to concatenate an array into other
 */
var arr = [1,2,3]
var arr1 = [4,5,6]

arr1 = arr1.concat(arr,7,8)

console.log(arr1)   //Returns [4, 5, 6, 1, 2, 3, 7, 8]
console.log(arr)    //Returns [1, 2, 3]

//ES6
let arr_es6 = [7,8]
arr = [...arr_es6]
let arr_es6_1 = [...arr,9, ...arr_es6]

console.log(arr)    //Returns [7, 8]
console.log(arr_es6_1)  //Returns [7, 8, 7, 8]

/*
WARNING

SETTING AN ARRAY EQUAL TO ANOTHER ARRAY USING AN ASSIGNMENT OPERATOR DOESN'T MEANS THAT THE OTHER ARRAY HAS BEEN COPIED
IT SIMPLY MEANS, A REFERENCE TO THAT ARRAY HAS BEEN ADDED. THEREFORE, ANY CHANGES TO THE NEWLY FORMED ARRAY
WILL AUTOMATICALLY BE DONE TO THE ORIGINAL ARRAY

EG.
var arr = [1,2,3]
var arr1 = arr
console.log(arr1)   //returns [1,2,3]

arr1.push(4,5)

console.log(arr1)   // returns [1,2,3,4,5]
console.log(arr)    // returns [1,2,3,4,5]
 */