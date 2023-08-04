let counter = 0;

setInterval(myTimer, 1000);

function myTimer() {
    counter+=2;
    console.clear();
    console.log(counter);
}