// Create Variables to change greeting by time of day
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

// Create variables for the welcome by name
var greeting = 'Howdy ';
var message = 'Elliott';

var welcomeMessage = greeting + name + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

// Create variables to create a color array
var colors = ['white',
'black','custom'];

colors[2] = 'purple';

var el = document.getElementById('colors');
el.textContent = colors[2];