//simple declaratons using var, let nad const
var name = "L-By<Do></Do> using var"
    //name = "Name changed in var"      //Works fine
console.log(name)

let name1 = "L-By<DO></DO> using let"
    //name1 = "Name changed in var"     //Works fine
console.log(name1)

const name2 = "L-By<Do></Do> as a constant"
    //name2 = "Name changed using const" //Returns TypeError
console.log(name2)




//function scope of var
variable(true)

function variable(call) {
    //var works in functoin scope. Block scope doesn't affect it. In the whole function the variable can be called out.
    if (call) { //block scope
        var passion = "Space Science"
        console.log(passion + " is my passion in block scope")
    } else {
        console.log(passion + " will turn from my passion to a dream coming true!")
    }
    console.log(passion + " is my passion out of block scope too!")
}
//console.log(passion + "is my passion but var is making me call for a War out of function scope!") //Returns ReferenceError;




//block scope of let and constant
letandconst(true)

function letandconst(call) {
    //let and const can be accessed in a block only. They are specific to blocks i.e. are block scoped. Therefore, they are not function scoped too.
    if (call) {
        let reaction = "love"
        const what = "Open Source"
        console.log("My " + reaction + " for " + what + " is immense!")
    }
    //console.log("I do not" + reaction + " " + what)   //Returns ReferenceError
}
//console.log("I do not" + reaction + " " + what) //Returns ReferenceError


//Brainstorm
var branch = "master"
if (true) {
    var branch = "child"
    console.log("Current branch-name has changed to " + branch)
}
console.log("Branch name " + branch + " is no more master")

let sourcecode = "Github"
if (true) {
    let sourcecode = "Hacked"
    console.log("Your sourcecode is " + sourcecode + " in let.")
}
console.log("Your sourcecode is now available on " + sourcecode)

var branch = "master"
if (true) {
    let branch = "child"
    console.log("Current branch-name has changed to " + branch)
}
console.log("Branch name " + branch + " has not changed")

//let sourcecode = "Github" //Returns Error of sourcecode already been declared.
if (true) {
    //var sourcecode = "Hacked" //Returns Error of sourcecode already been declared.
    console.log("Your sourcecode is available on " + sourcecode)
}
console.log("Your sourcecode is now available on " + sourcecode)

var branch = "master"
if (true) {
    const branch = "child"
        //let branch = "child"
    console.log("Current branch-name has changed to " + branch)
}
console.log("Branch name " + branch + " has not changed")

//Conclusion    "let" once declared globally, cannot be changed globally(but can be changed in block scope),
//Therefore, use "const" for declaring a variable, globally if it needs to be kept same in the whoile program
// but "var" can be changed one after the other.(no matter whether it is defined globally or in a block scope)
// For consistency "let" is always preferred over "var" in Modern JS