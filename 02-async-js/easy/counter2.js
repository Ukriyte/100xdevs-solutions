setTimeout(printcounter, 1000);
let counter = 0;
function printcounter(){
    counter++;
    console.clear();
    console.log(counter);
    setTimeout(printcounter,1000);
}