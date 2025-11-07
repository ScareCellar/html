let random = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let resultText = "Testing"
let gif = "";
const inputElement = document.getElementById("userNumber");
const paragraphElement = document.getElementById("resultText")
const winElement = document.getElementById("guessCount")
const imgElement  =document.getElementById("winGif");

function validateNumber(){
    const num = inputElement.valueAsNumber;
    gif = "";
    console.log(random);
    console.log(num);
    if(num == NaN){
        resultText = "please enter a number";
        guessCount--;
    } else if(num > random){
        resultText="Too High";
    } else if (num < random){
        resultText="Too Low";
    } else{
        resultText="You Win!";
        gif="arcane.gif";
        winElement.innerText = "it took you " + guessCount + " guesses";
        guessCount = 0;
        random = Math.floor(Math.random() * 100) + 1;
    }
    imgElement.setAttribute('src', gif);
    guessCount++;
    paragraphElement.innerText = resultText;
    
}