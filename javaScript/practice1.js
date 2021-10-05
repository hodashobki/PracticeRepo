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

// **************************************************************************
// 1-Biggie Size - Given an array, write a function that changes all positive
//  numbers in the array to the string "big".
//  Example: makeItBig([-1,3,5,-5]) returns that same array,
//  changed to [-1, "big", "big", -5].
 function biggi_size(arr){
     for(let i=0; i<arr.length; i++){
         if(arr[i]>0){
             arr[i]= "big"
         }
     }
     return arr;

 }
 console.log(biggi_size([1,2,3,-1,-2,-3]));

//  2-Print Low, Return High - Create a function that takes in an array of
//   numbers.  The function should print the lowest value in the array
//  , and return the highest value in the array.
function print_low(arr){
    max=arr[0];
    min=arr[0];
    for(let i=0; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min =arr[i]
        }
    }
    console.log(min);
    return max;
}
console.log(print_low([1,2,5,8,-5]));

// 3-Print One, Return Another - Build a function that takes in an
//   array of numbers.  The function should print the second-to-last
//    value in the array,
//  and return the first odd value in the array.
function print_One(arr){
    console.log(arr[arr.length-2]);
    for(let i=0; i<arr.length;i++){
        if(arr[i] % 2!=0){
            return arr[i]
        }
    }
}
console.log(print_One([4,2,5,8,7]));

// 4-Double Vision - Given an array (similar to saying 'takes in an array'), 
// create a function that returns a new array where each value in the
//  original array has been doubled.  Calling double([1,2,3])
//  should return [2,4,6] without changing the original array.
function double_vision(arr){
    let newArr=[];
    for(let i=0 ; i<arr.length; i++){
        newArr[i]=arr[i]*arr[i];
    }
    return newArr;
}
console.log(double_vision([1,2,3,4]));

// 5-Count Positives - Given an array of numbers, create a function to replace
//  the last value with the number of positive values found in the array.
//    Example, countPositives([-1,1,1,1])
//  changes the original array to [-1,1,1,3] and returns it.
function count_positive(arr){
    let counter=0;
    for(let i=0; i<arr.length ;i++){
        if(arr[i]>0){
            counter +=1;
        }

    }
    arr[arr.length-1]=counter;
    return arr;
}
console.log(count_positive([1,2,3,-1,-2,-3]));

// 6-Evens and Odds - Create a function that accepts an array
// Every time that array has three odd values in a row, print "That's odd!".
// Every time the array has three evens in a row, print "Even more so!".
function sven_AndOdds(arr){
    let countEven=0;
    let countOdd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2==0){
            countEven +=1;
            countOdd=0;
        }
        else if(arr[i] % 2!=0){
            countOdd +=1;
            countEven=0
        }
        if(countEven==3){
            console.log("Even more so!");
            countEven=0
        }
        else if(countOdd==3){
            console.log("That's odd");
        }
    }

}
console.log(sven_AndOdds([1,11,13,4]));

// 7-Increment the Seconds - Given an array of numbers arr,
//  add 1 to every other element, specifically those whose index is odd 
//  (arr[1], arr[3], arr[5], etc).  Afterward,
//  console.log each array value and return arr.
function Increment(arr){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
        if(i % 2 !=0){
            arr[i] +=1;
        
        }
    }
    return arr;
}
console.log(Increment([1,2,3,4,5,6]));

// 8-Previous Lengths - You are passed an array (similar to saying 'takes in
//  an array' or 'given an array') containing strings.
//  Working within that same array, replace each string with a number 
//  the length of the string at the previous array index - and return the array. 
// For example, previousLengths(["hello", "dojo", "awesome"]) 
// should return ["hello", 5, 4].
// Hint: Can for loops only go forward?
function previousLengths(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
// or this:

function previous(arr){
    for(let i=0; i<arr.length-1; i++){
        arr[i+1]=arr[i].length;

    }
    return arr;
}
console.log(previous(["hello", "dojo", "awesome"]));

// 9-Add Seven - Build a function that accepts an array. Return a new
//  array with all the values of the original, but add 7 to each.
//   Do not alter the original array.  Example, 
// addSeven([1,2,3]) should return [8,9,10] in a new array.
function add_seven(arr){
    let newarr=[];
    for(let i=0; i< arr.length; i++){
        newarr[i]=arr[i]+7;

    }
    return newarr;
}
console.log(add_seven([1,2,3]));

// 10-Reverse Array - Given an array, write a function that reverses its values, in-place.
// ple: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like
// .. [2,4,6,1,3].  Do this without creating an empty temporary array.
// (Hint: you'll need to swap values).
function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
// not This
function reverse_array(arr){
    let i=0
    while(i<arr.length/2){
        let temp =arr[i];
        arr[i]=arr[arr.length-1];
        arr[arr.length-1]=temp;
        i++
    }
    return arr;
}
console.log(reverse_array(3,1,6,4,2));

// 11-Outlook: Negative - Given an array, create and return a new one containing all
//  the values of the original array, but make them all negative
//  (negative values should remain negative). Given [1,-3,5], return [-1,-3,-5].
function outlook(arr){
    let newarr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            newarr[i]=arr[i]*-1;
        }
        else{
            newarr[i]=arr[i];
        }
    }
    return newarr
}
console.log(outlook([1,-3,-5]));

// 12-Always Hungry - Create a function that accepts an array, and prints "yummy"
//  each time one of the values is equal to "food".
// If no array values are "food", then print "I'm hungry" once.
function always_hungry(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            count +=1;
            console.log("yummy");
            
        }
       
    }
     if(count==0){
            console.log("I', hungry");
        }
}
console.log(always_hungry(["mm","kk","hh"]));

// 13-Swap Toward the Center - Given an array, swap the first and last values, third and 
// third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns
//  the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns 
//  the array into [6,2,4,3,5,1].
// No need to return the array this time.
function swapTowardCenter(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
// or this
function swapTowardCenter(arr){
    for(let i=0; i<arr.length/2; i++){
        let temp=arr[i];
        arr[i]=arr[(arr.length-1)-i];
        arr[(arr.length-1)-i]=temp;
    }
    return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6]));

// 14-Scale the Array - Given an array arr and a number num, multiply all values in the
//  array arr by the number num, and return the changed array arr.  For example, 
//  scaleArray([1,2,3], 3) should return [3,6,9].

function scale_array(num,arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
console.log(scale_array(7,[1,2,3]));