
console.log("This is Tutorial Number 6");

/*
String:Properties,Methods& Templates Literals
*/

const name = `Netra`;
const greeting = `Good Morning`;
console.log(name + " " +greeting);

let html;
html = `<h1> This is heading </h1> ` + `<p> This is my paragraphs </p>`;

//concat()
html = html.concat("This is an concatenation in an string.");
console.log(html);


//length
console.log("The length of the string is ", html.length);

//toLowerCase() and toUpperCase()
console.log(html.toLowerCase());
console.log(html.toUpperCase());

//indexing and acessing
console.log(html[5]);

//indexOf()
console.log(html.indexOf('concatenation'))

//lastIndexOf()
console.log(html.lastIndexOf('<'));

//charAt()
console.log(html.charAt(33));

//endWith()
console.log(html.endsWith('string.'));

//includes()
console.log(html.includes("Netra KC"));

//substring()
console.log(html.substring(3,50));

//slice()
console.log(html.slice(-5));
console.log(html.slice(5,50));

//split()
console.log(html.split(" "));

//replace()
console.log(html.replace('This', 'Netra'));

/*
Template Literals:
*/
let StudentNames1 = 'Netra';
let StudentNames2 = 'Khatri';
let myFullName    = `Hello ${name} 
                    <h1>This is "My First Heading in js Using an ES6+ </h1>
                    <p>My full Name is ${StudentNames1}  and ${StudentNames2}</p>
                    `;
document.body.innerHTML = myFullName;


let nameOfFriend = "Prakash";
let myBestFriendFirstName = 'Prakash';
let myBestFriendLastName = 'Kumar Oli';
let myBestFriendFullName = `Hello ${nameOfFriend} 
        <h1> ClassMates becomes an GirlFriends. </h1>
        <p> My Best Friend Full Name is ${myBestFriendFirstName}  ${myBestFriendLastName} </p> `;

document.body.innerHTML = myBestFriendFullName;

