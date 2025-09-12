// Print a statement
console.log("SRIT")

// Data types in JS
num = 12          // number
str = "hi"        // string
bol = true        // boolean
bigin = 31287410138.1358058743654 // big number
unde               // undefined (not assigned)
null1 = null       // null value

// var: can be re-declared
var name1 = "srit"
console.log(name1)
var name1 = "hi"   // re-declared
console.log(name1)

// let: can be updated but not re-declared
let course = "csm"

let age = 20
console.log(age)
age = 22           // updated
console.log(age)

// const: cannot be updated or re-declared
const givenname = "srinivasa rit"
console.log(givenname)

// Function to generate a welcome message
function generatewelcomeMessage(name) {
    return "welcome, " + name + "! Good morning"
}

// Call the function and store result
let welcome_messege = generatewelcomeMessage(givenname)
console.log(welcome_messege)
