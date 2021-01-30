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

// Printing a series of numbers on the page

function printNumbers(){
    for(let i = 0; i < 10; i++){
        document.write('<li>' + i + '</li>') //lab part 2
    }
}

//Creating Number Guessing Game

let correctAnswer = 13;

function guessingGame (){
    let userAnswer = prompt('Please select a number 1 - 100'); //lab part 1
    while (userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Incorrect. Please select a number 1-100');
    }
    let numberOfGuesses = 3
    for(let i= 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Great Job, you got it right');
            break; //or i = 3, not common convention
        } else if (userAnswer < correctAnswer){
            alert('Sorry, too low')
            userAnswer = prompt('Please select a number 1 - 100');
        } else if (userAnswer > correctAnswer){
            alert('Sorry, too hight')
            userAnswer = prompt('Please select a number 1 - 100');
        }
    }
}

// Displaying photo 3 times

function printImage(){
    let other_picture = document.getElementsByClassName('other_picture');
    for(let i = 1; i <= 3; i++){
        let other_picture = "daniel-cheung-cPF2nlWcMY4-unsplash.jpg";
        other_picture.src = other_picture;
    }
}


