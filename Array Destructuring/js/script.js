/*
Array destructuring in ES6 is a solution to writing multiple lines of code for unpacking arrays
 */

// JS style
console.log(`This is the JS style to unpack arrays`)
var spacegiants = ["National Aeronautics and Space Administration (NASA)", "China National Space Administration (CNSA)","European Space Agency (ESA)", "Russian Federal Space Agency (Roscosmos)", "Indian Space Research Organisation (ISRO)", "SpaceX"]
var first  = spacegiants[0]
var second = spacegiants[1]
var third = spacegiants[2]
console.log(`JS says that, the top three space giants are as follows-
${first}
${second}
${third}`)

// ES6 HACKS

console.log(`This is the result for ES6 hacks`)
let spaceorg = ["National Aeronautics and Space Administration (NASA)", "China National Space Administration (CNSA)","European Space Agency (ESA)", "Russian Federal Space Agency (Roscosmos)", "Indian Space Research Organisation (ISRO)", "SpaceX"]
/*
hi_adv --> highly advanced
adv --> Advanced
dev --> Developing
und_dev --> Under developed
 */

//declare variables
let hi_adv, adv, dev, und_dev, best

// in one line
[hi_adv, adv,dev, und_dev, best] = spaceorg

console.log(`The Space Research Organization can be categorized as
Highly advanced --> ${hi_adv}
Advanced    --> ${adv}
Developing  --> ${dev}
Under Developed --> ${und_dev}
Best    --> ${best}`)

// selecting the element which is required for us
let [,,,,,emerging] = spaceorg
console.log(`The first of its kind organization which developed reusable two-stage rockets is ${emerging}`)

document.getElementById("arraydes").innerHTML = `The only Space Research Organization that has made huge leaps in quite small budget is ` + `${best}`.bold()