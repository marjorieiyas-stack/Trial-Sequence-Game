let sequence = [];
let score = 0;

const sequenceBox = document.getElementById("sequence-box");
const input = document.getElementById("player-input");
const submitBtn = document.getElementById("submit-btn");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

function generateNextNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function updateSequenceDisplay() {
    sequenceBox.textContent = sequence.join(" ");
}

function startGame() {
    sequence = [];
    score = 0;
    message.textContent = "";
    scoreDisplay.textContent = "Score: 0";

    input.disabled = false;
    submitBtn.disabled = false;

    nextRound();
}

function nextRound() {
    const nextNum = generateNextNumber();
    sequence.push(nextNum);
    updateSequenceDisplay();
}

submitBtn.addEventListener("click", () => {
    const playerAnswer = parseInt(input.value);
    input.value = "";

    const correctAnswer = sequence[sequence.length - 1];

    if (playerAnswer === correctAnswer) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        nextRound();
    } else {
        message.textContent = `Game Over! Final Score: ${score}`;
        input.disabled = true;
        submitBtn.disabled = true;
    }
});

startBtn.addEventListener("click", startGame);