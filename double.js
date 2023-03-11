console.log("Hello world");

const dbl = (n) => n*2;

console.log(dbl(10));

//console.log(document);//
//console.log(window);//

//console.log(global);

console.log(process.argv); //argv-argument values

console.log(dbl(process.argv(2)));