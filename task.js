const elementTimer = document.getElementById("timer");
let startTimer = elementTimer.textContent;

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hours = 0;
minutes = 0;
seconds = elementTimer.textContent;

if (startTimer > 60) {
    seconds = startTimer % 60;
    minutes = Math.trunc(startTimer / 60);
    if (minutes > 60) {
        hours = Math.trunc(minutes/60);
        minutes = minutes % 60;
    };
};


let timerId = setInterval(() => {

    let textHours = "";
    let textMinutes = "";
    let textSeconds = "";

    if ((seconds === 0) && (minutes > 0)) {
        minutes -=1;
        seconds = 60;
        if ((minutes === 0) && (hours > 0)) {
            hours -= 1;
            minutes = 60;
        }
    }
    
    seconds -= 1;

    if (hours <10) {
        textHours = "0"+hours; 
    } else {
        textHours = hours;
    }

    if (minutes <10) {
        textMinutes = "0"+minutes; 
    } else {
        textMinutes = minutes;
    }

    if (seconds <10) {
        textSeconds = "0"+seconds; 
    } else {
        textSeconds = seconds;
    }


    elementTimer.textContent = textHours + ":" + textMinutes + ":" + textSeconds; 
     if ((hours === 0) && (minutes === 0) && (seconds === 0)) {
         clearInterval(timerId);
         alert("Вы победили в конкурсе!");
         location.assign("demo.gif");
     }
 }, 1000);















