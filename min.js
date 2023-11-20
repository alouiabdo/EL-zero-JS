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