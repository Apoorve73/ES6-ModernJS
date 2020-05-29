let username = "Apoorve73"
let fname = "Apoorve"
let lname = "Goyal"
/*
constant user helps reducing the work of again and again using ${}.
 */
const user = `${username}`
const fullname = `${fname} ${lname} `
console.log(`If the username contains the number 73 then the answer will be 
True else will be False`)
console.log(user.includes(73))  //returns True

/*
str.startsWith(string/char) --> Checks whether the given string starts with the passed string argument
str.charCodeAt(index) --> index --> An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.
                          returns --> A number representing the UTF-16 code unit value of the character at the given index.
str.charAt(index)   --> returns the character at the given index
str.bold()/big()/blink()    --> Add respective tags to the string passed.
str.valueOf --> Returns value of the passed constant
str.repeat(times)   --> Repeats the passed string the specified number of times
 */
console.log(`Username starts with "A". >>> `)
console.log(user.startsWith('A'))
console.log(user.charCodeAt(5))
console.log(fullname.charAt(5))
document.getElementById("author").innerHTML= "By " + user.fontcolor("#0ff")
console.log(user.bold())
console.log(user.valueOf())
console.log(fullname.repeat(10))
