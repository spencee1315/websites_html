// Create variables for the welcome by name
var greeting = 'Howdy ';
var message = 'Elliott';

var welcomeMessage = greeting + message + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;