/* const stone=document.getElementById("stone");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");  
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result=document.getElementById("result"); */
let color=document.getElementById("body").style;






function computerAnswer(playerchoice){

    let computerChoice=["stone","paper","scissors"];
     
    let computerAns=computerChoice[Math.floor(Math.random()*computerChoice.length)]

    var result;

    if(computerAns===playerchoice){

        result = "It's a tie!";
        color.backgroundColor="white";
    }
    else if (
        (playerchoice === 'stone' && computerAns === 'scissors') ||
        (playerchoice === 'paper' && computerAns === 'stone') ||
        (playerchoice === 'scissors' && computerAns === 'paper')
      ) {
        result = "You win!";
       color.backgroundColor="green";
    
      } else {
        result = "You lose!";
        color.backgroundColor="red";
      }

      document.getElementById('result').innerHTML = `
      You chose: ${playerchoice}<br>
      Computer chose: ${computerAns}<br>
      Result: ${result}
    `;
}

