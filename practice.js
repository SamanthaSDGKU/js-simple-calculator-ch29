let myArray = [1,2,10,true,"Carlos"];
console.log(myArray[3]);//true

let array2 = ["What is the meaning of life", 42, true];
console.log(array2[0]);

//array declaration
const numbers=[10,20,30,40,50];
const months=["Jan","Feb","Mar","Apr", "May"];

//methods for arrays
numbers.push(60,70,80);// append an element to the array
numbers.unshift(-30,-20,-10,0); // prepend an element to the array

months.pop(); // removes the last element in the array
months.shift();// removes first element in the array
months.splice(1,1);
//displaying the values

console.table(numbers);
console.table(months);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Array dimension
console.log(numbers.length); 
