//1- Print out all odd numbers from 1 to 20

for(var i=1;i<=20;i++){
    if(i % 2 !=0){
        console.log(i);
    }
}
// OR
for(var j=1;j<=20;j+=2){
    console.log(j);
}

// 2-Sum numbers from 1 to 5, printing out the current number
//  and sum so far at each step of the way
let sum =0
for(let k=1;k<=5;k++){
    sum+=k;
    console.log("Num: "+k+", Sum: "+sum )
}

// 3-Print each array value and the sum so far

var testArr = [6,3,5,1,2,4];
var sum=0;
for(var i=0;i<testArr.length;i++){
    sum +=testArr[i];
    console.log("Num: "+testArr[i]+" ,Sum: "+sum)
}

// 4-Multiply each value in the array by its array position
var testArr = [6,3,5,1,2,4];
for(let j=0;j<testArr.length;j++){
    testArr[j]=testArr[j]*j;
}
console.log(testArr);


// 5-Get 1 to 255 - Write a function that returns an array
//  with all the numbers from 1 to 255.
function Array_ofNumbers(){
    newArray=[]
    for(let i=1;i<=255;i++){
        newArray.push(i);
    }
    return newArray;
}
result=Array_ofNumbers();
console.log(result);

// Get even 1000 - Write a function
//  that would get the sum of all the even numbers from 
//  1 to 1000.  You may use a modulus
//  operator for this exercise.
function sum_evenNumbers(){
let sum=0;
for(let j=1;j<=1000;j++){
    if(j % 2 ==0){
        sum +=j;
    }
}
return sum;

}
result=sum_evenNumbers();
console.log(result);