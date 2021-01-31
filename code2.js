// Prompts user to enter name when visiting the page, will run it twice
function askUsername(){
  let userName = prompt('Welcome! What is your name?');
  alert('Hi' + userName + 'Welcome to my first website for Codefellow, class 102, with basic info about me, my first time using javascript, functions loops and more. Enjoy!')
  return userName; 
}

let getUserName = askUsername();
// Display a prompt box which ask the user for her/his name, and output a message
function checkName(getUserName){
  if(getUserName == 'Elliott'){
      document.write('<h3>' + 'Welcome, Elliott' + '</h3>');
  } else {
      document.write('<h3>' + 'Welcome Guest' + getUserName + '</h3>');
  }
}

checkName(askUsername());
//function askUsername(){ //calling the function
    //enter name John
   // let userName = prompt('Please Enter Your Name'); //declaring the function, variable name = userName
    //print John
   // document.write(userName);
    //return John
    //return userName; //returns the content of the variable,but not the variable 'userName'
// }
//invoke the function
//askUsername();

// getUserName = 'John' (assigned to the string of John)
//let getUserName = askUsername();

//Want to print out numbers 1 - 10 on the page

// function printNumbers(){
   // for(let i = 0; i < 10; i++){
     //   document.write('<li>' + i + '</li>')
    //}
//}

//Want to build out a number guessing game
// First thing I need to have is an answer

//let correctAnswer = 13;

//function guessingGame (){
  //  let userAnswer = prompt('Please select a number 1 - 100');
    //while (userAnswer < 1 || userAnswer > 100){
      //  userAnswer = prompt('Incorrect. Please select a number 1-100');
    //}
//}

//Step 2

//let correctAnswer = 13;

//function guessingGame (){
  //  let userAnswer = prompt('Please select a number 1 - 100');
    //while (userAnswer < 1 || userAnswer > 100){
      //  userAnswer = prompt('Incorrect. Please select a number 1-100');
    //}
    //let numberOfGuesses = 3
    //for(let i= 0; i < numberOfGuesses; i++){
      //  if (userAnswer == correctAnswer){
        //    alert('Great Job, you got it right');
        //} else if (userAnswer < correctAnswer){
          //  alert('Sorry, too low')
       // } else if (userAnswer > correctAnswer){
         //   alert('Sorry, too hight')
        //}
    //}
//}

