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