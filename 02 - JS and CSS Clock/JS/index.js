const secondHand = $(".second-hand");
const minuteHand = $(".min-hand");
const hourHand = $(".hour-hand")


function setDate(){
    const today = new Date();

    const seconds = today.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.css("transform", `rotate(${secondsDegrees}deg)`);
    /*Doesn't work - secondHand.style.transform = `rotate(${secondsDegrees}deg)`;*/


    const minutes = today.getMinutes();
    const minutesDegrees = ((minutes/60)*360)+90;
    minuteHand.css("transform", `rotate(${minutesDegrees}deg)`);


    const hours = today.getHours();
    const hoursDegrees = ((hours/12)*360)+90;
    hourHand.css("transform", `rotate(${hoursDegrees}deg)`);

    console.log(minutes);
}

setInterval(setDate, 1000);

