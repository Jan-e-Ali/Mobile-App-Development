//1-Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 
let j=[2,3,1,6,7];
let m=0;
let a=parseInt(j[0]);
let b=parseInt(j[1]);
for(let i=0;i<b;i++)
{
    m=j[1]
}
console.log((b+1),"kth digit from the last is="+m);

//P2-Write program to find sum of all digits. Input 23618 output 2+3+6+1+8=20
let sumx = args.toString();
let sumArr = sumx.split("");
let digitssum = sumArr.reduce((a, b) => parseInt(a) + parseInt(b));
return digitssum;

console.log(digitsums(123456789));

//P3-Write program to find sum of even digits. Input 23617 output 2+6=8
function evenSum(num){

    arr=[];
    let sumStr = num.toString();
    let sumArr = sumStr.split("");
    for (let i = 0; i <= sumArr.length; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    let sumOfDigits = arr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;

}
console.log(evenSum(24317));
//P4-Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
const newArr = numbers.map(myFunction) 
 function sqcu(){
   for(let i=0; i<=10; i++){
    console.log("the square of 0 to 10 number is  is",i*i);
    console.log("the cube of 1 to 10 ",i**i);
   }
}
console.log(sqcu())
 function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("comsats")); 
 function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 10 || nums[end_pos] == 10;
}
console.log(first_last_1([10, 3, 5]));
console.log(first_last_1([1, 3, 5, 10]));
console.log(first_last_1([2, 4, 6]));

//Problem 5-Develop and demonstrate JavaScript script that uses functions for the following problems:
let numStr = [2,3,6,1,7];
function getSum(total, num) {
  return total + (num%2===0?num:0);
}
var my_sum = numStr.reduce(getSum, 0);
console.log(my_sum)
 const ps = require('prompt-sync');
  const prompt = ps();
  var randomGuesser = () => {
      var randomNumber = Math.floor((Math.random() * 10 + 1));// 1 to 10
      console.log(randomNumber);
      var guessNumber = prompt("Enter You guess::");// package is installed prompt-sync
      if (guessNumber == randomNumber) {
          console.log("You WIN");
      }
      else {
          console.log("Not Matched")
      }
  }

  //P6-Write a JavaScript program where the program takes a random integer between 1 to 10, the us..
  let value = guessfunc(10);
let num2=prompt("guess num:");
console.log("Random number:"+ value)
if(num2==value){
    console.log("Win");
}
else{
    console.log("Not Matched:");
}
function guessfunc(num) {
    return Math.floor(Math.random() * num) + 1;
}

//P7-Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers....
let check =(arr)=> {
    if (arr.length >= 2) {
        if (arr[0] == 10 || arr[arr.length - 1] == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(check([5,7,10,12,13,14,15,30]));
//P8-Write a JavaScript function that returns a passed string with letters in alphabetical order...
let sortString = (str) => {
    let sortedStr = str.split("").sort().join("");
    return sortedStr;
}
console.log(sortString("COMSATS"));