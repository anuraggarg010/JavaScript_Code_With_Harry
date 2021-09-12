
//acessing an html using an es6+
let name = 'Netra';
let tutorial = `Hello ${name}
<h1> This is Tutorial Number 7 on Js</h1>`;

document.body.innerHTML = tutorial;

console.log("We are at now tutorial number 7.");

/*
Arrays:
-> Contains Properties and Methods.
*/
let marksOfStudents = [56,78,90,45,67,40];
let nameOfFruits = ["Orange","Mango","Banana","Apple"];
const mixedArr = ["String", "array", 45,[67,90]];

// arrays using an references variables:
const arr = new Array(23,15,16,18, "Strawberry", "Pear", "Mango");
console.log(arr);
//changing an elements of array:
arr[3] = "Netra is bad boy with ugly face.Hahahahaha";
console.log(arr);
let indexofarr = arr.indexOf(16);
console.log(indexofarr);

// Mutating or Modifiying an arrays:
marksOfStudents.push(6989); //adding at last:
console.log(marksOfStudents);

marksOfStudents.unshift(6754);//adds elements at first of the arrays:
console.log(marksOfStudents);

marksOfStudents.pop(); //remove from an last of the array list:
console.log(marksOfStudents);

marksOfStudents.shift();// remove the first elements of the list:
console.log(marksOfStudents);

marksOfStudents.splice(1,4); //remove 4 elements from index 1 to 4
console.log(marksOfStudents);

marksOfStudents.reverse(); //reverse an arrays
console.log(marksOfStudents);

marksOfStudents = marksOfStudents.concat(nameOfFruits);//concatinating two arrays.
console.log(marksOfStudents);

console.log("The length of array is ", +marksOfStudents.length);
console.log(nameOfFruits[3]);

console.log(Array.isArray('jsdfskjdfh'));


/*
Objects
*/
let myObjects = {
    name:"Netra kc",
    Address:"Nepalgunj",
    ID: 123,
    Status:"Alive"
}
console.log(myObjects);
console.log(myObjects.name);
