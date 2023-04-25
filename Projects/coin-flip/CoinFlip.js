function flip(guess) {
    // random number
    let result = Math.floor(Math.random() * 2) + 1;
    // get the message paragraph
    let message = document.getElementById("message");
    // check the result, random vs guess
    if(result == 1){
        //heads
        if(guess == "Heads"){
            message.innerHTML = "You guessed heads...<br>The coin flips and comes up Heads! Good guess!"
        }
        else{
            message.innerHTML = "You guessed tails...<br>The coin flips and comes up Heads! Try again!"
        }
    }
    else{
        //tails
        if(guess == "Tails"){
            message.innerHTML = "You guessed tails...<br>The coin flips and comes up Tails! Good guess!"
        }
        else{
            message.innerHTML = "You guessed heads...<br>The coin flips and comes up Tails! Try again!"
        }
    }

}