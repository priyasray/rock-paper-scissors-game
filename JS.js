let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score")
const comp_score = document.querySelector("#comp-score")

function genCompChoice() {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats computer ${compChoice}.`
        msg.style.backgroundColor = "#004225";
        user_score.innerText = userScore;
        // if (userScore === 10) {
        //     console.log("User Finnaly Win!");
        //     msg.innerText = "User Finnaly Win!";
        //     return true;
        // };
        
    } else {
        // if (compScore === 10) {
        //     console.log("Computer finnaly win!");
        //     msg.innerText = "Computer finnaly win!";
        //     return;
        // };
        compScore++
        console.log("Computer win!")
        msg.innerText = `Computer win! Computer ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor= "#990000";
        comp_score.innerText = compScore;
        
    };
};

function playGame(userChoice) {
    console.log("User choice =" , userChoice);
    // Generate computer choice.
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice)

    if (userChoice === compChoice) {
    console.log("Game was draw.");
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor= "";
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }else {
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)

    }
}


choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoice = choise.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
});