let userScore = 0;
let compScore = 0;           // 1step

const choices = document.querySelectorAll(".choice");   // 2 step
const msg = document.querySelector("#msg");   // 8 step

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");      //12 step

const genCompChoice=()=>{
    const options =["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);                  // 5 step
    return options[randidx];
};

const drawGame=()=>{
           //6 step
    msg.innerHTML ="game was draw. Play again !";
    msg.style.backgroundColor="rgb(40, 40, 75)"; 
};

const showWinner = (userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;  //13 step
               // 7 step
      msg.innerHTML =`you win! Your ${userchoice} beats ${compChoice}`;    
      msg.style.backgroundColor="green";    // 9 step
    }else{
        compScore++;
        compScorePara.innerHTML = compScore; 
        msg.innerHTML =`you lose. ${compChoice} beats ${userchoice}`;     // 11 step
        msg.style.backgroundColor="red"; 
    }
}

const playGame = (userchoice)=>{
    //generate computer choice
    const compChoice =genCompChoice();                            // 4 step    
    if(userchoice === compChoice){
        // draw game
        drawGame();                       // 5 step 
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            // scissor,paper
            userWin = compChoice ==="paper" ? false : true;        
    } else if(userchoice ==="paper"){
        // rock,scissor
        userWin = compChoice ==="scissor" ? false : true;
    } else{
        // rock,paper
        userWin = compChoice ==="rock" ? false: true;
    }
    showWinner(userWin,userchoice,compChoice);    // 10 step
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{                // 3 step
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
}) 