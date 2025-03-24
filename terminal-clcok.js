/* Create a terminal clock (HH:MM:SS) */

function printTime(){
    console.clear();

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hour + " : " + min + " : " + sec);
}

setInterval(printTime, 1000);