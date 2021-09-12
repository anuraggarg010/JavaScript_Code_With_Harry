
console.log("This is an tutorial Number 5 on Javascript.");

/*
Type Conversion on Javascript:
-> 
*/
let nameClz;
nameClz = `The British Collge`;
// Type conversion
nameClz = String(nameClz);
console.log(nameClz, (typeof nameClz));

let num = 45;
num = String(45);
console.log(num, (typeof num));

// let date = new Date();
let date = String(new Date()); // Converting an String.
console.log(date, (typeof date));


let arr = String([1,2,3,4,5,6,7,8,9,10]);
console.log(arr, (typeof arr));
console.log("The length of an array after type casting in string "+arr.length);


let a = 45;
console.log("Before conversion, it is a number so it comes in blue color ",+a);
console.log("After conversion into an array ", a.toString());

let str = Number(`3434`); 
console.log(str, (typeof str));

//ParseInt function
let number = parseInt(`25.890`);
console.log(number, (typeof number));


//toFixed function
console.log(number.toFixed(10), (typeof number));




/*
Type Coercion on Javascript:
-> 
*/

let mystr = `679`;
let mynum = 345; // Number ko string ma convert garerw concatinate garidinxxa js la.

console.log(mystr + mynum);






