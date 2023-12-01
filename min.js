// let a = 10;
// let b = "20";
// let c = 80;
// document.write(++a + +b++ + +c++ - +a++ + "<br>");
// document.write(++a + -b + +c++ - -a++ + +a + "<br>");
// document.write(--c + +b + --a * +b++ - +b * a + --a - +true);
// console.log(80 + 22 + 11 * 22 - 23 * 11 + 10 - 1)
// console.log()
// console.log()


//////////////////////////////////////////////////////////////////






// console.log(false * 10 + 20 + 15 + 3 + 190 + 10 + 400 ); // 0



//////////////////////////////////////////////////////////////////



// let num = 3;

// console.log( num * (+true + +true)); // 6

// console.log(num + +true + +true + +true ); // 6

// console.log( num * num - num ); // 6

// console.log( num * num -(+true + +true + +true) ); // 6

// console.log(num * (+true + +true + +true) - num); // 6

// console.log(num * (+true + +true + +true + +true) /(+true + +true)); // 6



//////////////////////////////////////////////////////////////////


// let num = "10";

// console.log(+num + +num); // 20

// console.log(+num * (+true  + +true)); // 20

// console.log( +num * num /(+true + +true + +true + +true + +true)); // 20

// console.log(+num / +num * ((+true + +true) * num)); // 20



//////////////////////////////////////////////////////////////////



// let points = 10;


// console.log(points + (+true + +true + +true)); // 13


// console.log(points - (+true + +true)); // 8;



//////////////////////////////////////////////////////////////////



// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.min(a, b, c, d));

// console.log(Math.pow(a, Math.floor(d)))

// console.log(Math.floor(d))
// console.log(Math.trunc(d))
// console.log(Math.round(d))
// console.log(d.toFixed(0))

// let x = Math.floor(b)
// let y = Math.ceil(d)
// let z = (x / y).toFixed(2)
// console.log(z)
// console.log(Math.round(z))



//////////////////////////////////////////////////////////////////



// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000
// let a = 100000
// let b = 5e4
// let c = 2
// let d = 10
// let e = 100
// // Your Solutions
// console.log(200000 / 2); // 100000
// console.log(1000*100); // 100000
// console.log( Math.pow(100, 2.5)); // 100000
// console.log(100**2.5); // 100000
// console.log(a); // 100000
// console.log(b * 2); // 100000
// console.log(b*d / 5); // 100000
// console.log(e * e*d); // 100000
// console.log(e*d * d * d); // 100000
// console.log( e *e *e/d); // 100000



//////////////////////////////////////////////////////////////////



// console.log(Number.MAX_SAFE_INTEGER.toString().length); // 9007199254740991


//////////////////////////////////////////////////////////////////


// let myVar = "100.56789 Views";

// console.log(Number.parseInt(myVar)); // 100
// let a = Number.parseFloat(myVar)
// console.log(+a.toFixed(2)); // 100.57



//////////////////////////////////////////////////////////////////



// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2



//////////////////////////////////////////////////////////////////



// let flt = 10.4;

// console.log(parseInt(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(+flt.toFixed(0)); // 10.



//////////////////////////////////////////////////////////////////



// let a = [4, 2, 3, 1 ]

// console.log(a[Math.floor(Math.random()*(a.length))])



//////////////////////////////////////////////////////////////////



// let a = "Elzero Web School"

// console.log((a.slice(2, 6).charAt(0).toUpperCase())+ (a.slice(3, 6)));

// console.log(a.slice(13,14).toUpperCase().repeat(8));

// console.log(a.split(" ", 1));


// console.log(a.substring(0, 6) +" "+ a.substring(11, 17));


// console.log(a.slice(0, 1).toLowerCase() + a.slice(1, 16).toUpperCase()+a.slice(16,17))



//////////////////////////////////////////////////////////////////



// let userName = "Elzero";
// let num = userName.toLowerCase()
// console.log(num.slice(0, 1)); // e
// console.log(num.split("",1)); // e
// console.log(num.substring(0,1)); // e
// console.log(num.substr(0,1)); // e
// console.log(num[0]); // e
// console.log(num.charAt(0).repeat(3)); // eee



//////////////////////////////////////////////////////////////////



// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes("z")); // True
// console.log(word.startsWith("E")); // True
// console.log(word.endsWith("o")); // True



//////////////////////////////////////////////////////////////////



// let a = 10;

// a < 10 
// ? console.log(10)
// : a >= 40 
// ? console.log("10 to 40") 
// : a > 40 
// ? console.log("> 40") 
// : console.log("Unknown")

// or use if else statement
// if (a < 10) {
//     console.log(10);
// } else if (a >= 40) {
//     console.log("10 to 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
// }


////////////////////////////////////////////////////////////////////////////////////////


// let st = "ElzeroElzero";

// if ("????" !== "34"){
//     console.log("Good");
// }

// if ("????" != "w"){
//     console.log("Good")
// }

// if ("????" !== "string"){
//     console.log("Good");
// }

// if (typeof"????" === typeof"number"){
//     console.log("Good");
// }

// if( st === "ElzeroElzero"){
//     console.log("Good")
// }



////////////////////////////////////////////////////////////////////////////////////////


// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log( -50  !== +"-40"); // true
// console.log(-10 <= -"-40"); // true
// console.log( +"10" === 10); // true
// console.log(+20 != false); // true



////////////////////////////////////////////////////////////////////////////////////////



// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2); // true
// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(num1 !== num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log( (true + true) * num1 === num2); // true



////////////////////////////////////////////////////////////////////////////////////////



// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a != b); // true
// console.log(a < b > a < c); // true
// console.log((a != b) && !(a == b) && (a > c) && (a !== c)); // true



////////////////////////////////////////////////////////////////////////////////////////


// // Test Case 1
// let num = 9; // "009"

// if(num < 10){
//     console.log("00" + num)
// }

// // Test Case 2
// let num = 20; // "020"
// if (num > 10 && num < 100){
//     console.log("0" + num)
// }

// // Test Case 3
// let num = 110; // "110"
// if ( num >= 100){
//     console.log(num)
// }



////////////////////////////////////////////////////////////////////////////////////////



// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// if( num1 == str){
//     console.log("{num1} Is The Same Value As {str}")
// }

// if(num1 !== str){
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// }

// if( num1 != str2){
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}"
//     )
// }

// if( typeof str === typeof str2){
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value")
// }



////////////////////////////////////////////////////////////////////////////////////////




// let num1 = 10;
// let num2 = 30;
// let num3 = "30";



// if(num3 > num1 && num3 !== num2){
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
//     if(num3 > num1 && num3 == num2){
//         console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
//         if(num3 !== num1 &&  typeof num3 != typeof num2){
//             console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
//         }
//     }

// }



////////////////////////////////////////////////////////////////////////////////////////




// // Edit What You Want Here

// let num1 = 10;
// let num2 = 9;
// let num3 = 10;
// let num4 = 32;

// /*
// Do Not Edit Below This Line
// Needed Output
// True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
// console.log("True");
// } else {
// console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
// console.log("True");
// } else {
// console.log("False");
// }



////////////////////////////////////////////////////////////////////////////////////////


// let job = "Manager";
// let salary = 0;

// switch(job){
//     case "Manager":
//         console.log(salary = 8000)
//     break;
//     case "IT":
//     case "Support":
//         console.log(salary = 6000)
//     break;
//     case "Developer":
//     case "Designer":
//         console.log(salary = 700)
//     break;
//     default:
//         console.log(salary = 4000)
//     break;
// }

// let holidays = 0;
// let money = 0;

// if(holidays == 0){
//     money  = 5000;
//     console.log(`my money is ${money}`)
// }else if(holidays == 1 || holidays == 2){
//     money = 3000;
//     console.log(`my money is ${money}`)
// }else if( holidays == 3){
//     money = 2000;
//     console.log(`my money is ${money}`)
// }else if(holidays == 4){
//     money = 4000;
//     console.log(`my money is ${money}`)
// }else if( holidays == 5){
//     money = 0;
//     console.log(`my money is ${money}`)
// }else{
//     money = 0;
//     console.log(`my money is ${money}`)
// }



////////////////////////////////////////////////////////////////////////////////////////




// var day = "   friday  ";
// var day = "Friday";
// var day = "Saturday";
// var day = "Sunday";
// var day = "Monday";
// var day = "Thursday";
// var day = "Tuesday";
// var day = "Wednesday";
// var day = "World";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// switch(day){
//     case "   friday  ":
//         document.write(day.trim().slice(0, 1).toUpperCase()+day.trim().slice(1))
//     break;
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//         document.write("No Appointments Available")
//     break;
//     case "Monday":
//     case "Thursday":
//         document.write("From 10:00 AM To 5:00 PM")
//     break;
//     case "Tuesday":
//         document.write("From 10:00 AM To 6:00 PM")
//     break;
//     case "Wednesday":
//         document.write("From 10:00 AM To 7:00 PM")
//     break;
//     case "World":
//         document.write("Its Not A Valid Day")
//     break;
// }

// day = "Friday";
// day = "Saturday";
// day = "Sunday";
// utput => "No Appointments Available"
// day = "Monday";
// day = "Thursday";
// utput => "From 10:00 AM To 5:00 PM"
// day = "Tuesday";
// utput => "From 10:00 AM To 6:00 PM"
// day = "Wednesday";
// utput => "From 10:00 AM To 7:00 PM"
// day = "World";
// utput => "Its Not A Valid Day"





////////////////////////////////////////////////////////////////////////////////////////


// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // console.log(my.slice(0, 4).reverse());
// // console.log(my.slice(1, 3).reverse());
// // console.log(my.push("Elzero"));
// // console.log(my)

// console.log(my[zero+true][counter+true]+my[zero+true][counter+true+true].toUpperCase())


////////////////////////////////////////////////////////////////////////////////////////





// let st = "Elzero Web School";

// if (st[7].toLowerCase() === "w") {
//     console.log("Good");
// }

// if (st.length !== "string") {
//     console.log("Good");
// }

// if (st !== "number") {
//     console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");
//   }



////////////////////////////////////////////////////////////////////////////////////////





// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
// salary = 8000;
// } else if (job === "IT" || job === "Support") {
// salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
// salary = 7000;
// } else {
// salary = 4000;
// }
// switch(job){
//     case "Manager":
//         console.log(salary = 8000)
//     break;
//     case "IT":
//     case "Support":
//         console.log(salary = 6000)
//     break;
//     case "Developer":
//     case "Designer":
//         console.log(salary = 7000)
//     break;
//     default:
//         console.log(salary = 4000)
//     break;
// }



////////////////////////////////////////////////////////////////////////////////////////




// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if(holidays === 0){
//     money = 5000;
//     console.log(`My Money is ${money}`);
// }else if(holidays === 1 || holidays === 2){
//     money = 3000;
//     console.log(`My Money is ${money}`);
// }else if(holidays === 3){
//     money = 2000;
//     console.log(`My Money is ${money}`);
// }else if( holidays === 4){
//     money = 1000;
//     console.log(`My Money is ${money}`);
// }else if(holidaysv === 5){
//     money = 0;
//     console.log(`My Money is ${money}`);
// }else{
//     money = 0;
//     console.log(`My Money is ${money}`);
// }





////////////////////////////////////////////////////////////////////////////////////////







//let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
//let num = 3;
//let num1 = 0;

// Method 1
//console.log(myFriends.slice(num1, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
//console.log(myFriends.splice(num1, num)); // ["Ahmed", "Elham", "Osama"];





////////////////////////////////////////////////////////////////////////////////////////




// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends = friends.splice(1, 2)
// console.log(friends); // ["Eman", "Osama"]



////////////////////////////////////////////////////////////////////////////////////////




// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// let me = finalArr.concat(arrTwo[2],arrOne.reverse(),arrTwo[1], arrTwo[0])

// // Write One Single Line Of Code

// console.log(me); // ["Z", "X", "D", "C", "B", "A"]



////////////////////////////////////////////////////////////////////////////////////////




// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log( words[0+ true+true][0].slice(true+true, true+true+true+true+true+true+true ).toUpperCase()); // ZERO


////////////////////////////////////////////////////////////////////////////////////////


// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// let num1 = 0;

// // Method 1
// console.log(myFriends.slice(num1, num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.splice(num1, num)); // ["Ahmed", "Elham", "Osama"];



////////////////////////////////////////////////////////////////////////////////////////



// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// let me = friends.splice(1, 2)
// // Write Your Code Here

// console.log(me); // ["Eman", "Osama"]


////////////////////////////////////////////////////////////////////////////////////////



// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrTwo[true+true], arrOne.reverse(), arrTwo[+true], arrTwo[true-true])); // ["Z", "X", "D", "C", "B", "A"]

////////////////////////////////////////////////////////////////////////////////////////




// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[true+true][0].slice(true+true).toUpperCase()); // ZERO




////////////////////////////////////////////////////////////////////////////////////////




// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// console.log(haystack.includes(needle));
// console.log(haystack.indexOf(needle));
// console.log(haystack.lastIndexOf(needle))


////////////////////////////////////////////////////////////////////////////////////////


// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// let me = allArrs.concat(arr2[2].toLowerCase(), arr1[2].toLowerCase(),arr2[3].toLowerCase()).join("")

// console.log(me); // fxy




////////////////////////////////////////////////////////////////////////////////////////


// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my = my.slice(zero, counter+true).reverse()
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];


// console.log(my.slice(-counter ,counter )); // ["Elham", "Mazero"]

// console.log(my[+true ].slice( zero, true+true) + my[true+true].slice(true+true)); // "Elzero"


// console.log(my[+true+true].slice(true+true+true+true)); // "rO"


////////////////////////////////////////////////////////////////////////////////////////






// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Soukaona", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let i = 0;

// for(; i<myAdmins.length; i++){
//     document.write(`<div>`);
//     if(myAdmins[i] ===  "Stop")break;
//     document.write(` <hr><br>The Admin For Team ${i+1} Is ${myAdmins[i]} `);
//     document.write(`<h1>${myAdmins[i]}</h1>`);
//     for(let j = 0; j<myEmployees.length;j++){
//         if(myEmployees[j][0] === myAdmins[i][0] ){
//             document.write( `<h4> - ${myEmployees[j]}</h4>` )
//         }
//     }
//     document.write(`</div>`);
// }  




////////////////////////////////////////////////////////////////////////////////////////





// let start = 10;
// let end = 100;
// let exclude = 40;
// let i = start

// for(let i = start ; i< end + start;i += start){
//     if(i == exclude)continue
//     console.log(i)
    
// }



////////////////////////////////////////////////////////////////////////////////////////



// let start = 10;
// let end = 0;
// let stop = 3;

// for( let i = start ; i>stop-true; i-- ){
//     if(i< start){
//         console.log(end.toString()+ i)
//     }else{
//         console.log(i.toString())
//     }
// }




////////////////////////////////////////////////////////////////////////////////////////




// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i<end+start;i++){
//     console.log(i);
//     for(j = breaker ;j < end; j+=2){
//         console.log(`--${j}`)
//     }
// }  



////////////////////////////////////////////////////////////////////////////////////////




// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let counter = 0;
// let j = counter;

// // Output
// "1 => Sayed"
// "2 => Mahmoud"
// for(; i<friends.length ; i++){
//     if(friends[i][counter] == "A" || typeof friends[i] == "number"){
//         continue;
//     }else{
//         console.log(`"${j+true} => ${friends[i]}"`)
//     }
//     j++
// }




////////////////////////////////////////////////////////////////////////////////////////




// function showDetails( ...me){

//     console.log(`hallo ${lastName},Your Age Is ${age}, ${st? "you are available for hire":"you are not available for hire"}`);
//     console.log(Array.isArray())
// }
// showDetails(lastName = "Osama", age = 38, st = true);
// showDetails(age = 38, lastName = "Osama", st = true);
// showDetails(st = false, lastName = "Osama", age = 38);





////////////////////////////////////////////////////////////////////////////////////////







// function sayHello(theName, theGender) {
//     if(theGender == "Male"){
//         document.write(`Hello MR ${theName} <br>`)
//     }else if(theGender == "Female"){
//         document.write(`Hello Miss ${theName}<br>`)
//     }else {
//         console.log(`Hello ${theName}`)
//         document.write(`Hello ${theName}`)
//     }
// }
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh",); // "Hello Sameh"




////////////////////////////////////////////////////////////////////////////////////////





// function calculate(firstNum, secondNum, operation) {
// if(secondNum == undefined){
//     console.log(" Second Number Not Found")
// }else if(operation == undefined){
//     console.log(firstNum + secondNum)
// }else if(operation =='add'){
//     console.log(firstNum + secondNum)
// }else if(operation == 'subtract'){
//     console.log(firstNum - secondNum)
// }else if(operation == 'multiply'){
//     console.log(firstNum * secondNum)
// }

// }

//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600



////////////////////////////////////////////////////////////////////////////////////////



// function ageInTime(theAge, herAge) {
    
//     if(theAge > 100 || theAge < 10){
//         document.write(`Age Out Of Range <br>`)
//     }else{
//         document.write(`your age at months is : ${theAge * 12} Month. <br> your age at week is : ${theAge * 52} Week. <br>  your age at days is : ${theAge * 365} Day.<br>  your age at hours is : ${theAge * 8760} Hour.<br> your age at minutes is : ${theAge * 525600} Minute.<br> your age at seconds is : ${theAge * 31536000} Second.`)
//     }
// }

  // Needed Output
//   ageInTime(110); // Age Out Of Range
// ageInTime(23)
// let d = new Date()
// let your = d.getFullYear()
// let age = your - 1990;
// console.log(age)





////////////////////////////////////////////////////////////////////////////////////////



// function createSelectBox(startYear, endYear) {
//   document.write(`<select>`)
//   for( let i = startYear; i <= endYear; i++){
//     document.write(`<option value="${i}">${i}</option>`)
//   }
//   document.write(`</select>`)
// }
// createSelectBox(2000, 2021);




////////////////////////////////////////////////////////////////////////////////////////



// }
// function multiply(a, b, c){
//   if(typeof a == "number" && typeof b == "number"){
//     console.log(Math.floor(a) *  Math.floor(b))
//   }else if(typeof a =="string" || typeof b == "string" || typeof c == "string"){
//     if( typeof a == "string") a = c;
//     if( typeof b == "string") b = c;
//     if( typeof c == "string") c = c;
//     console.log(a*b)
//   }
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000



////////////////////////////////////////////////////////////////////////////////////////




// let names = function (a, b, c, d ) {
//   return `String [${a}], [${b}], [${c}], [${d}] => Done !`;
// }



// let names =  (a, b, c, d ) => `String [${a}], [${b}], [${c}], [${d}] => Done !`;


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));




////////////////////////////////////////////////////////////////////////////////////////



let myNumbers = [20, 50, 10, 60]
nums = myNumbers[1]
let calc =(one, two, ...nums) => one + two + nums[0];

console.log(calc(10 , myNumbers[0],  myNumbers[1]))