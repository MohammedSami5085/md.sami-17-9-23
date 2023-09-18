// Chapter 17 - 20 (for Loops)
// Home Assignment


// question {1}


for (let i = 0; i < 10; i++) {
 

  console.log("welcome to karachi " + i);   
  
}

//   question {2}


for (let i = 0; i <= 11; i++) {
  
  console.log( "Welcome to White house" +" "+(i + 1))
  }
  
//   question {3}

;

for (var i = 0; i <= 4; i++){

  console.log(i)
}


// question {4}


for (var num = 0; num < 100; num++) {
   console.log(num)
  }


// question {5}



for (var count = 3; count > 0; count--) {
console.log(count)    
  }
  
//   question {6}


var arr = [1, 2, 3, 4, 5];

var numberOfElements = arr.length;

console.log(arr.length); 

//   question {7}


var flag = true; 

console.log(flag);

// question {8}

var pets = ["dog","cat","cow","parrot","duck"]; 

 for (var i = 0; i < pets.length; i++) {
  
   console.log("Pets name", i, " ", pets[i]);
 }
  
// question {9}


for (var i = 1; i <= 10; i++) {
    if (i === 2) {
      alert("Counter value on the second iteration: " + i);
      break;("Break out of the loop after the alert")
    }
  }
  

//   question {10}



const userNames = ["sami", "akhter", "husnain", "khuwaja", "shabbir"];


const firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Welcome, " + firstName);
    break; 
  }
  
  if (i === userNames.length - 1) {
    alert("Please write correct user name");
  }
}


// question {11}



var matchFound = false;
var list = ["item1", "item2", "item3"];
var userInput = prompt("Enter a value");

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}



// question {12}



var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var A = 0; i < secondArr.length; i++) {
    console.log(firstArr[i] + secondArr[A]);
  }
}








  
  
  