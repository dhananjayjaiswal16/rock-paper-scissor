var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreboard_div = document.querySelector(".scoreboard");
var result_p = document.querySelector(".textResult");
var rock_div = document.querySelector("#r");
var paper_div = document.querySelector("#p");
var scissors_div = document.querySelector("#s");

main();





function getComputerChoice(){
  var choices = ['r','s','p'];
  var getChoice = Math.floor(Math.random()*3);
  return (choices[getChoice]);
}

function toWord(letter){
  if(letter === "r")
  return("Rock");
  if(letter === "p")
  return("Paper");

  return ("Scissors");
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML= userScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  //computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = toWord(userChoice) + smallUserWord +" beats " + toWord(computerChoice) + smallCompWord +". Congratulations! You Win." ;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("green-glow");
  },400)
}

function lose(userChoice, computerChoice){
  computerScore++;
  //userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = toWord(computerChoice) + smallCompWord + " beats " + toWord(userChoice)+ smallUserWord + ". Alas! You lose.";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("red-glow");
  },400)
}

function draw(userChoice, computerChoice){
  result_p.innerHTML = "Its a Draw!";

  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("gray-glow");
  },400)

}





function game(userChoice){
  var computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "sr":
    case "rp":
    case "ps":
    lose(userChoice, computerChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
  }
}



function main(){

  rock_div.addEventListener("click", function(){
    game("r");
  });
  paper_div.addEventListener("click", function(){
    game("p");
  });
  scissors_div.addEventListener("click", function(){
    game("s");
  });
}
