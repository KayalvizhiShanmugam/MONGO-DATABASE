console.log("celsius to fahrenheit");

// c*(9/5)+32

const ctof = (celsius) =>{
    return celsius * (9/5) + 32.toFixed(2);
};

//console.log(process.argv);
//array destructing
const[, , celsius] = process.argv;
console.log(ctof(celsius));