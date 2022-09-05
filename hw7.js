`use strict`;

let hours = +prompt(`Enter hours`);
const secondsInHour = 3600;
const result = hours * secondsInHour;
console.log(`${result} seconds in ${hours} hours`);