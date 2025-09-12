console.log("===Hour 1: JSON Basics ===");
let student={
    name:"mukund",
    age:"20",
    marks:[85,45,79,]
}
let jsonString=JSON.stringify(student);
console.log("JSON String:",jsonString);
let parsedobj = JSON.parse(jsonString);
console.log("parsed object:",parsedObj);


