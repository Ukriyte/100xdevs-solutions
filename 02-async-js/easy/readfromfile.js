const fs = require("fs");

function callFn(err,data){
    if(err){
        console.log(err)
    }
    console.log(data);
}

fs.readFile("a.txt","utf-8",callFn);

let counter = 0;
for(let i = 0; i<=1000000000; i++){
    counter += i;
}
console.log(counter);