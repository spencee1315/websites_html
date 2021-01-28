// Prompts user to enter name when visiting the page, will run it twice
function askUsername(){
    let userName = prompt('Please Enter Your Name');
    document.write(userName);
    return userName; 
}

let getUserName = askUsername();


// Display a prompt box which ask the user for her/his name, and output a message
function checkName(getUserName){
    if(getUserName== 'Elliott') {
        document.write('<h3>' + 'Welcome Darth Elliott' + '</h3>');
    } else if (getUserName != 'Elliott'){
        document.write('<h3>' + 'Welcome Guest' + '</h3>');
    }
}

checkName(askUsername());

// display a confirmation box and output what the user clicked
function confirmButtonClick(){
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
    txt = "You pressed OK!";
    } else {
    txt = "You pressed Cancel!";
}
}

confirmButtonClick();

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