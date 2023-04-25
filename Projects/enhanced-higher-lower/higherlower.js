/* **********************************************
    Dev10 Coding Assessment by Kristi Lavigne 
*********************************************** */

// The range will start at 1 and end at the number given by the user
// Using the function get_number allows us to validate the input
let max = get_number("Enter the max number.");

console.log(max);

let range = document.getElementById("range");
range.innerHTML = 'Guess a number between 1 and ' + max;

// This is the number the user is trying to guess
let num = Math.floor(Math.random() * max) + 1;

// so that we can see what number needs to be guessed
console.log(num);

// Initializing an array to hold the values guessed
let guesses = [];

// this whil validate the input given by the user
function get_number(prompt) {
    let valid_input = false;
    let input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
        
        // input must be within range, cannot be 0, negative, or higher than the max
        if(input != NaN && input > 1) {
            input = Number(input);
            input = Math.round(input);
            valid_input = true;
        }
    }

    return input;
} // end get_number


// Each time the user makes a guess the guess will be added to the guesses array 
// The guess will be checked against the correct numbe and previous guesses, then proceed accordingly
function do_guess() {

    // get the guess and convert it to a number
    let guess = Number(document.getElementById("guess").value);

    // get messsage
    let message = document.getElementById("message");

    // Validates that the guess was a number and in range, if it isn't then give the appropriate response
    if(isNaN(guess)){
        alert('That\'s not a number!');
    } 
    else if(guess < 1 || guess > max){
        alert('That number is not in range, try again.');
    }
    else{
        if(!guesses.includes(guess) && guess > 0){
            // Only valid guesss get added
            // Array to keep track of the guesses
            guesses.push(guess);
        }
        else{
            alert('You already tried that number!')
        }

        console.log(guess);
        console.log(guesses);
    }

    // this is how many valid tries were made
    let tries = guesses.length; 

    // this is how many valid tries were made
    if(guess == num) {
        // Tells the user that they got it right, how many valid tries were made and what numbers were tried
        message.innerHTML = '<br>You got it! It took you ' + tries + ' tries and your guesses were ' + guesses + '.';
    }
    else if (guess > num) {
        message.innerHTML = "<br>No, try a lower number.";
    }
    else {
        message.innerHTML = "<br>No, try a higher number.";
    }
    
} // end do_guess
