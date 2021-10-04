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

//6- Get even 1000 - Write a function
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

// 7-Sum odd 5000 - Write a function that 
// returns the sum of all the odd numbers from 1 to 5000.
//  (e.g. 1+3+5+...+4997+4999).
function sum_OddNumbers(){
    let sum =0;
    for(i=1;i<=5000;i++){
        if(i % 2 != 0){
            sum +=i;
        }
    }
    return sum;
}
let result=sum_OddNumbers();
console.log(result);

// 8-Iterate an array - Write a function that
//  returns the sum of all the values within an array. (e.g. [1,2,5] returns 8
//     . [-5,2,5,12] returns 14).

function sum_Array(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
let result =sum_Array([1,2,3,4]);
console.log(result);

// 9-Find max - Given an array with multiple values,
//  write a function that returns the maximum number in the array
//  (e.g. for [-3,3,5,7] max is 7)
function Max_Ofarray(arr){
    let max=arr[0];
    for(i=0;i<arr.length;i++){
        if(max < arr[i]){
            max=arr[i]
        }
    }
    return max;
}
let result = Max_Ofarray([1,2,3,4,5,6]);
console.log(result);

// 10-Find average - Given an array with multiple values,
// write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)
function Average_ofArray(arr){
    let sum=0;
    for(let i=0 ;i<arr.length;i++){
        sum +=arr[i];
    }
    return average=sum/arr.length;

}
let result=Average_ofArray([1,2,3,4]);
console.log(result);

// 11-Array odd - Write a function that would
//  return an array of all the odd numbers between 1 to 50.
//  (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function Array_ofODDs(){
    let arr =[];
    for(let i=0 ;i<=50;i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;

}
let result=Array_ofODDs();
console.log(result);

// 12-Greater than Y - Given value of Y,
//  write a function that takes an array and
//   returns the number of values that are greater than Y.
//    For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).
function greeter_thanY(y,arr){
    let counter=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>y){
            counter +=1;
        }
    }
    return counter;
}
let result=greeter_thanY(5,[1,8,9,7]);
console.log(result);

// 13-Squares - Given an array with multiple values,
//  write a function that replaces each value in the array
//   with the value squared by itself.
//  (e.g. [1,5,10,-2] will become [1,25,100,4])
function square_Array(arr){
    for(let i=0 ;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(square_Array([1,2,3,4]));

// 14-Negatives - Given an array with multiple values,
//  write a function that replaces any negative numbers
//   within the array with the value of 0. 
//   When the program is done the array should contain no negative values
// . (e.g. [1,5,10,-2] will become [1,5,10,0])
function remove_negatives(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(remove_negatives([1,-1,-5,2]));

// 15-Max/Min/Avg - Given an array with multiple values, 
// write a function that returns a new array that only contains 
// the maximum, minimum, and average values of the original array.
//  (e.g. [1,5,10,-2] will return [10,-2,3.5])
function max_min_average(arr){
    let max=arr[0];
    let min=arr[0];
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        if(max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i];
        }
    }
    let ave=sum/arr.length;
    return newarr=[max,min,ave]

}
console.log(max_min_average([1,2,3,4,5]));

// 16-Swap Values - Write a function that will swap the 
// first and last values of any given array.
//  The default minimum length of the array is 2.
//  (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr){
    if(arr.length>=2){
        let temp=arr[0];
        arr[0]=arr[arr.length-1];
        arr[arr.length-1]=temp;
    }
    return arr;
}
console.log(swap([1,2,3,4,5]));

// 17-Number to String - Write a function that takes an array of numbers
//  and replaces any negative values within the array
//   with the string 'Dojo'. For example if array = [-1,-3,2],
//  your function will return ['Dojo','Dojo',2].
function Number_toString(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo"
        }
    }
    return arr;
}
console.log(Number_toString([1,2,-1,-2]));
