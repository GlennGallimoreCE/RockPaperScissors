
// First line is a constant variable, and a query selector for all choices made.  data-selection is in an array
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const cpuScoreSpan = document.querySelector('[data-cpu-score]')
const myScoreSpan = document.querySelector('[data-my-score]')
let totalRounds = document.querySelector('[data-round]') 

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '🪨',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '🗒️',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
  },
]


selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)

  })
})

//This function below increase both you and the CPU's score in HTML
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
//If I put the round counter here, it "doesn't" count draws... could be useful



}




function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)
  if (yourWinner) incrementScore(myScoreSpan)
  if (computerWinner) incrementScore(cpuScoreSpan)
  totalRounds.innerText = parseInt(totalRounds.innerText) + 1  //This is the round counter, it has to go here otherwise it doesn't count draws.

}

/*function play() {

  for (let i = 1; i <= 5; i++)
    if (i === 5)  {
        alert("Game Over!" + " " + "You :" + myScoreSpan.innerHTML + " " + "vs CPU :" + cpuScoreSpan.innerHTML + " " + "Refresh this page to try again.");
    } else {
        play();
    } 
}*/

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
  if (totalRounds.innerText >= 5) {//Calls to end the game after five rounds
    
    setTimeout(gameOver, 50);
    return false;
  } 
}

function gameOver() {

    alert("Game Over!" + " " + "You :" + myScoreSpan.innerHTML + " " + "vs CPU :" + cpuScoreSpan.innerHTML + " " + "click 'OK' to try again.");
    
    window.location.reload(); 
}


function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
  
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
  
}

/* Ending the game after five rounds */


//play();
  





