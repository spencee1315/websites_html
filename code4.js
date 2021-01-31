// display a confirmation box and output what the user clicked
function confirmButtonClick(){
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
    txt = "You pressed OK!";
    } else {
    txt = "You pressed Cancel!";
}
    return txt;
}

confirmButtonClick();

// Printing a series of numbers on the page
function printNumbers(){
    for(let i = 0; i < 10; i++){
        document.write('<li>' + i + '</li>') //lab part 2
    }
}