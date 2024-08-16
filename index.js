let homeScore = 0;
let guestScore = 0;
let homeFouls = 0;
let guestFouls = 0;
let period = 1;
let timer = 12 * 60; // 12 minutes in seconds
let timerInterval;

function updateScores(){
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;

    if (homeScore > questScore) {
        document.getElementById("home").classList.add("leader");
        document.getElementById("guest").classList.remove("leader");
    } else if (guestScore > homeScore) {
        document.getElementById("guest").classList.add("leader");
        document.getElementById("home").classList.remove("leader");
    } else {
        document.getElementById("home").classList.remove("leader");
        document.getElementById("guest").classList.remove("leader");
    }
}

function incrementScore(team) {
    if (team === 'home') {
        homeScore++;
    } else {
        guestScore++
    }
    updateScores();
}

function addHomeFoul() {
    document.getElementById("home-fouls").textContent = homeFouls; 
    homeFouls++;
}

function addGuestFoul() {
    document.getElementById("guest-fouls").textContent = guestFouls;
    guestFouls++;
}


function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeFouls = 0;
    guestFouls = 0;
    period = 0;
    timer = 12 * 60;
    clearInterval(timerInterval);
    updateScores();
    document.getElementById("home-fouls").textContent = homeFouls;
    document.getElementById("guest-fouls").textContent = guestFouls;
    document.getElementById("period").textContent = period;
    document.getElementById("timer").textContent = formatTime(timer);
}

function nextPeriod() {
    if (period < 4) {
        period++;
        document.getElementById("period").textContent = period;
    } else {
        alert("Game Over! No more periods.")
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timer").textContent = formatTime(timer);
        } else {
            clearInterval(timerInterval);
            alert("End of period!");
        }
    }, 1000);
}