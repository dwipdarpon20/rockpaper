let option = ["Rock", "Paper", "Scissor"];
let score = 0;
let pcscore = 0;

function playGame(userChoice){
    
    let result = document.querySelector("p");
    let computerChoice = option[Math.floor(Math.random()*3)];
    let resultTxt = "";
    let scoretxt = document.querySelector("h3");
    let comScoretxt = document.querySelector(".comScore");
    let choosen = document.querySelector(".your");
    let computer = document.querySelector(".computer");


    choosen.innerHTML = `Your Choice : ${userChoice}`;
    computer.innerHTML =`Computer Chose : ${computerChoice}`;

    if (computerChoice == userChoice){
        result.innerText = "It's a Tie!!";
    }
    else {
        switch(userChoice){
            case "Rock" : (computerChoice == "Paper") ? (resultTxt = "You Lose!", pcscore++): (resultTxt = "You Won", score ++);
            break;
            case "Paper" : (computerChoice == "Scissor" ) ? (resultTxt = "You lose!" , pcscore++) : ( resultTxt = "You Won" , score++);
            break ;
            case "Scissor" : (computerChoice == "Rock") ? (resultTxt = "You lose!", pcscore++) : (resultTxt ="You Won" , score++);
            break;
        }
        result.innerText = resultTxt;
        scoretxt.innerText = `Your Score : ${score}`;
        comScoretxt.innerText = `Computer Score : ${pcscore}`

    }

    
    // Reset The Game 

    if (score === 5 || pcscore === 5) {
   alert(score === 5 ? "🎉 You won the game!" : "💻 Computer wins!");
   score = 0;
   pcscore = 0;
   scoretxt.innerText = "Your Score : 0";
   comScoretxt.innerText = "Computer Score : 0";
   result.innerText = "Choose One";
   choosen.innerText = "";
   computer.innerText = "";
}
}


// Accessing buttons 
let allBtns = document.querySelectorAll("button");
for (let btn of allBtns){
    btn.addEventListener("click",function (){
        let userChoice = btn.id;
        playGame(userChoice);
    })
}

