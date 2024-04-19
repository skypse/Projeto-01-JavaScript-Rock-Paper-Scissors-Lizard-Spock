let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors", "lizard", "spock"];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        // criando <img id="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    // selecionando random
    opponent = choices[Math.floor(Math.random() * 5)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    // vendo vencedor
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
        console.log("Empate!!")
    } else {
        if (you == "rock") {
            if (opponent == "scissors" || opponent == "lizard") {
                yourScore += 1;
                console.log("Voce ganhou!!")
            } else if (opponent == "paper" || opponent == "spock") {
                opponentScore += 1;
                console.log("Computador ganhou!!")
            };
        } else if (you == "paper") {
            if (opponent == "rock" || opponent == "spock") {
                yourScore += 1;
                console.log("Voce ganhou!!")
            } else if (opponent == "scissors" || opponent == "lizard") {
                opponentScore += 1;
                console.log("Computador ganhou!!")
            };
        } else if (you == "scissors") {
            if (opponent == "paper" || opponent == "lizard") {
                yourScore += 1;
                console.log("Voce ganhou!!")
            } else if (opponent == "rock" || opponent == "spock") {
                opponentScore += 1;
                console.log("Computador ganhou!!")
            };
        } else if (you == "lizard") {
            if (opponent == "spock" || opponent == "paper") {
                yourScore += 1;
                console.log("Voce ganhou!!")
            } else if (opponent == "rock" || opponent == "scissors") {
                opponentScore += 1;
                console.log("Computador ganhou!!")
            };
        } else if (you == "spock") {
            if (opponent == "scissors" || opponent == "rock") {
                yourScore += 1;
                console.log("Voce ganhou!!")
            } else if (opponent == "paper" || opponent == "lizard") {
                opponentScore += 1;
                console.log("Computador ganhou!!")
            };
        }
    }
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
