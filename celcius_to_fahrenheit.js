// program to convert celsius to fahrenheit
// ask the celsius value to the user 
/*let process = require("process");
console.log("Enter a celsius value: ");
const celsius = process.argv[2];*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter a celsius value: `, celsius => {
    // calculate fahrenheit
    const fahrenheit = (celsius * 1.8) + 32;
    // display the result
    console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
    readline.close()
  })
  

