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
    document.write('<li>' + userAnswer + '</li>'); 
    return userAnswer;
}
// Choose the number of photos to display
// function printImage(){
//     let imgNumber = prompt('How many images would you like displayed on the page? Choose between 1 and 5.');

//     while (imgNumber < 1 || imgNumber > 5){
//         if (imgNumber < 1){
//             alert('Sorry, too low. Please select between 1 and 5.')
//             imgNumber = prompt('How many images would you like displayed on the page? Choose between 1 and 5.');
//         } else if (imgNumber > 5){
//             alert('Sorry, too high. Please select between 1 and 5.')
//             imgNumber = prompt('How many images would you like displayed on the page? Choose between 1 and 5.');
//         } else {
//             break;
//         }
//         }
//         return imgNumber;
//         }
  
        
// let photo = printImage();

// let photoNumber = photo
// for(let i= 0; i < photoNumber; i++){
//     document.write('<img src ="daniel-cheung-cPF2nlWcMY4-unsplash.jpg">' + '</img>'); 
// }