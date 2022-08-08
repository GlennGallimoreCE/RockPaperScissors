const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;   //your choice
let computer;   //CPU choice
let result;    //who won
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
//For the rules pop up

// Get the modal
let modal = document.getElementById("rulesModal");

// Get the button that opens the modal
let btn = document.getElementById("rulesBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//The choices for both player and computer.
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

    //This next part I added elsewhere but the code didn't work, until I placed it here.
    if (resultText.innerText == "You Win!") {
        playerScore.innerText = parseInt(playerScore.innerText) + 1
    } else if(resultText.innerText == "CPU Win!") {
        computerScore.innerText = parseInt(computerScore.innerText) + 1
    } 
}));


function computerTurn()  {
    const randNUM = Math.floor(Math.random() * 5 ) + 1;

    switch(randNUM){
        case 1:
            computer = "🪨";
            break;
        case 2:
            computer = "🗒️";
            break;   
        case 3:
            computer = "✂️";
            break;
        case 4:
            computer = "🦎";
            break;
        case 5:
            computer = "🖖";
            break;     
    }

}


//Expanding the Win/lose condidtions, it was simpler to create every win condition for the player, then for "else" the CPU wins if not a draw.

function checkWinner() {
    if(player == computer){
        return "DRAW!";
    } 
    else if(computer == "🪨" && (player == "🗒️")) {
        return "You Win!" 
    }
    else if(computer == "🖖" && (player == "🗒️")) {
        return "You Win!" 
    }
    else if(computer == "🗒️" && (player == "✂️")) {
        return "You Win!" 
    }
    else if(computer == "🦎" && (player == "✂️")) {
        return "You Win!" 
    }
    else if(computer == "✂️" && (player == "🪨")) {
        return "You Win!" 
    }
    else if(computer == "🦎" && (player == "🪨")) {
        return "You Win!" 
    }
    else if(computer == "🗒️" && (player == "🦎")) {
        return "You Win!" 
    }
    else if(computer == "🖖" && (player == "🦎")) {
        return "You Win!" 
    }
    else if(computer == "🪨" && (player == "🖖")) {
        return "You Win!" 
    }
    else if(computer == "✂️" && (player == "🖖")) {
        return "You Win!" 
    } 
    else {
        return "CPU Win!" 
    }


}




// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* 
// Old method from tutorial, while this works for just the original three, it seems to instanly give the CPU the winner after a few short wins, the argument works for small choices but overall it "bugs out" quickly.

function checkWinner() {
    if(player == computer){
        return "DRAW!";
    } 
    else if(computer == "🪨") {
        return (player == "🗒️") ? "You Win!" : "CPU Win!" 
    } 
    else if(computer == "🗒️") {
        return (player == "✂️") ? "You Win!" : "CPU Win!"
    } 
    else if(computer == "✂️") {
        return (player == "🪨") ? "You Win!" : "CPU Win!"
    } 
    else if(computer == "🦎") {
        return (player == "🪨") ? "You Win!" : "CPU Win!"
    } 
    else if(computer == "🖖") {
        return (player == "🦎") ? "You Win!" : "CPU Win!"
    }
    else if(computer == "🦎") {
        return (player == "✂️") ? "You Win!" : "CPU Win!"
    }
    else if(computer == "🖖") {
        return (player == "🗒️") ? "You Win!" : "CPU Win!"
    } 
    else if(computer == "✂️") {
        return (player == "🖖") ? "You Win!" : "CPU Win!"
    }
    else if(computer == "🗒️") {
        return (player == "🦎") ? "You Win!" : "CPU Win!"
    } 
    else if(computer == "🪨") {
        return (player == "🖖") ? "You Win!" : "CPU Win!"
    } 


}*/










