const fs = require("fs");

fs.writeFile("a.txt", " -New Text", function(err){
    if(err) throw err;
    console.log('Updated!');
})