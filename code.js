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

// display a confirmation box and output what the user clicked
var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

// Display a prompt box which ask the user for her/his name, and output a message
var userName = prompt('Please Enter your name!');

alert('Hello ' + userName);


if(userName == 'Elliott') {
    document.write('Welcome Darth ' + userName)
} else {
    document.write('Welcome ' + userName)
}