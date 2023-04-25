// random number
let num = Math.floor(Math.random() * 20) + 1;

console.log(num)

function do_highlow() {
    
    // get the guess and convert it to a number
    let guess = Number(document.getElementById("guess").value);
    
    // get messsage
    let message = document.getElementById("message");

    // check the result, random vs guess
    if(guess == num){
        // If the guess right, message "You got it!"
        message.innerHTML = "You got it right!"
    }
    else if(guess < num){
        // If the guess is too low, message "No, try a higher number"
        message.innerHTML = "No, try a higher number!"
    }
    else{
        // if the guess is too high, message "No, try a lower number"
        message.innerHTML = "No, try a lower number!"
    }

}