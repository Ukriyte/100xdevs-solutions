setInterval(myClock, 1000);

function myClock(){
    let current = new Date();
    console.clear();
    if(current.getHours()>=12){
        console.log(`${current.getHours()-12}:${current.getMinutes()}:${current.getSeconds()}` + " PM");
    }
    else{
    console.log(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`+ " AM");
    }
}

