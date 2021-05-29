function countdown(){
    const todate = new Date('Dec 31, 2021 00:00:00').getTime();
    const currentdate = new Date().getTime();
    const gap = todate - currentdate;

    const seconds = 1000;
    const minutes = 60*seconds; 
    const hours = 60 * minutes;
    const days = 24 * hours;


    const textday = Math.floor(gap/days);
    const texthours = Math.floor( (gap % days)/hours );
    const textminutes = Math.floor( (gap % hours) / minutes);
    const textseconds = Math.floor( (gap % minutes) / seconds);

    document.querySelector(".day").innerHTML = textday;
    document.querySelector(".hours").innerHTML = texthours;
    document.querySelector(".minutes").innerHTML = texthours;
    document.querySelector(".seconds").innerHTML = textseconds;

    if(gap === 0) return document.querySelector(".count-heading").innerHTML = "“You’re graduating at a tough time, but I believe in my heart that better days are coming. It may take some time, but I hope you can hang in there and keep believing, too.”"
}

setInterval(function()
{countdown()}, 
1000);