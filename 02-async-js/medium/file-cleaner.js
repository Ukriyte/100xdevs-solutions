const fs = require("fs");

let str = "";
function PasstoFn(err,data){
    if(err){
        throw new Error("error occured");
    }
    let temp = false;
    for (let i = 0; i < data.length; i++) {   
        if(data.charAt(i)==' ' && temp == false){
            temp = true;
            str += " ";
        }
        else if(data.charAt(i)==' ' && temp == true){
            continue;
        }
        else{
            str += data.charAt(i);
            temp = false;
        }
    }
    fs.writeFile("example.txt", str, function(err){
        if(err) {
            throw new Error("Error occured");
        }
        console.log('Job Done');
    })
}

fs.readFile("example.txt", "utf-8",PasstoFn);

