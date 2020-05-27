let templatestring = document.querySelector("#templatestr")
/*
templaetstring --> Points div class with id=templatestr
opensource, num1, num2 --> Global Variable declaration
 */
let opensource = "Github"
let num1 = 1
let num2 = 2
if(templatestring){
    /*
    Concatenate using ``(grave accent) is a ES6 feature to improve code readability and writing
    ${} is used to place variable's data
     */
    templatestring.textContent = `Open Source has 
amazing stuffs. For example- ${opensource}`
    /*
    console.log reacts to all the changes of es6 but DOM doesn't.
    For example- Line has been changed in console as we have pressed "Enter"
    But the same thing doesn't ge applied to DOM, for some reason I don't know.
     */
    console.log(`${templatestring.textContent} For example- ${opensource}
${num1+num2} is a calculation using ES6`)
    // Calculation can be performed using ${}. It is a replacement of "some text" + num1+num2 + "some text"
}

