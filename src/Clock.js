const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function date() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secDegrees = ((seconds/ 60) * 360) + 90;
    const minDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;

    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(date, 1000);