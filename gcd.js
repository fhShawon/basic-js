let process = require("process");
let argument = process.argv;
let n1 = +process.argv[2];
let n2 = +process.argv[3];
let i=1, greatestCommonDivisor;

if (argument.length<=3){
    console.log("Please Enter Two Numbers");
}
else
{
    while(i<=n1 && i <=n2){
        if(n1%i == 0 && n2%i == 0){
            greatestCommonDivisor = i;
        }
        i+=1; 
    }
    console.log(greatestCommonDivisor);
}
