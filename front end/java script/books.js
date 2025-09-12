console.log("=== Hour 1: JSON Basics (Books Example) ===");

let books = {
    {
        title: "Physics",
        author: "Author A",
        price: 250
    },
    {
        title: "Chemistry",
        author: "Author B",
        price: 300
    },
    {
        title: "Mathematics",
        author: "Author C",
        price: 400
    }
};
let jsonString = JSON.stringify(books);
console.log("JSON String:", jsonString);

let parsedBooks = JSON.parse(jsonString);
console.log("Parsed Object:", parsedBooks);
