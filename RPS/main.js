let dugmad = document.querySelectorAll("button");
let userIcon = document.querySelector("#user-icon");
let computerIcon = document.querySelector("#computer-icon");
let userLabel = document.querySelector("#user-label");
let computerLabel = document.querySelector("#computer-label");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

let userWin = 0;
let computerWin = 0;
let computerChoice = "";
let userChoice = "";
const icons = ["la-hand-rock", "la-hand-paper", "la-hand-scissors"];
function generateComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  computerIcon.classList = "las";
  if (randomNum === 0) {
    computerChoice = "rock";
    computerIcon.classList.add(icons[0]);
  }
  if (randomNum === 1) {
    computerChoice = "paper";
    computerIcon.classList.add(icons[1]);
  }
  if (randomNum === 2) {
    computerChoice = "scissors";
    computerIcon.classList.add(icons[2]);
  }
  computerLabel.innerHTML = computerChoice;
}
//console.log(typeof dugmad, dugmad);
dugmad.forEach((dugme) => {
  dugme.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
    setUserIcon();
    win();
  });
});

console.log(result);

function setUserIcon() {
  userIcon.classList = "las";
  if (userChoice === "rock") {
    userIcon.classList.add(icons[0]);
  }
  if (userChoice === "paper") {
    userIcon.classList.add(icons[1]);
  }
  if (userChoice === "scissors") {
    userIcon.classList.add(icons[2]);
  }
  userLabel.innerHTML = userChoice;
}

function win() {
  if (userChoice === computerChoice) {
    result.innerHTML = "It's a draw!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "Computer wins!";
    computerWin++;
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "User wins!";
    userWin++;
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "User wins!";
    userWin++;
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "Computer wins!";
    computerWin++;
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "Computer wins!";
    computerWin++;
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "User wins!";
    userWin++;
  }
  score.innerHTML = `${userWin}:${computerWin}`;
}
