console.log(210 < 124); // false

var populationBrazil = 207.3;
var populationChile = 17.8;
console.log(populationBrazil !== populationChile); // true

var hotWeather = false;
var snowyWeather = true;
var windyWeather = true;

if (hotWeather === true) {
  console.log("Wear shorts and a tank top today!");
} else if (snowyWeather === true) {
  console.log("Put on a heavy jacket and boots!");
} else if (windyWeather === true) {
  console.log("Time to slip on your windbreaker.");
} else {
  console.log("Grab a sweater, it might be chilly.");
}
// Put on a heavy jacket and boots!

alert("Hello, welcome to my site!");

var string = "12";
var number = 12;
if (string === number) {
  console.log(`true ===`);
} else if (string == number) {
  console.log(`true ==`);
} else {
  console.log(`guess that's not true then.`);
}
