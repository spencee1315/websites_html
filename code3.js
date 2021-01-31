// Create Variables to change greeting by time of day
function dailyGreeting(){ 
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
}

dailyGreeting();

// checkName(askUsername());
//called a call back
//same as checkName('John')
//runs the check name function but first it's going to run the askUsername