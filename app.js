let userscore = 0;
let compscore = 0;

const yourscore = document.querySelector("#use-score")
const computerscore = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})
const gencompchoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random() * 3)
    return options[randindx]
}

const playgame = (userchoice) => {
    const compchoice = gencompchoices();
    console.log("computer choices", compchoice)
    if (userchoice === compchoice) {
        draw();
        msg.style.backgroundColor="grey"
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}
const draw = () => {
    console.log("game was draw retry")
    msg.innerHTML = "game was draw re try "
}
const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        yourscore.innerHTML = userscore;

        msg.innerHTML = "you win!";
        msg.style.backgroundColor = "green";

    }
    else {
        compscore++;
        computerscore.innerHTML = compscore;
        msg.innerHTML = "you lost!";
        msg.style.backgroundColor = "red";
    }
}
