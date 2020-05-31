const obj={
    name: "Apoorve",
    skill: "Web Development",
    language: "Python",
    projects: {
        first: "Where_To_Build",
        second: "Race For 100"
    },
    li: [1,2,3],
    li_new: [[1,2,3],[4,5,6]]
}
/*
To fetch methods from object, order of selection doesn't matter, as in array destructuring. Eg. "skill" has been defined after projects below
But one has to use the same name of method as used while defining it else should specify the new name of the same method as done for
"language" below
 */

let {name, language:lang, projects, skill, li, li_new:l} = obj
console.log(`I ${name}, is skilled in ${skill}, and like to code in ${lang}
The projects I have worked upon are avaiable on Github with the names:

${li[0]}. ${projects.first}

${l[0][1]}. ${projects.second}`)

// Returns
/*
script.js:19 I Apoorve, is skilled in Web Development, and like to code in Python
The projects I have worked upon are avaiable on Github with the names:

1. Where_To_Build

2. Race For 100
 */

