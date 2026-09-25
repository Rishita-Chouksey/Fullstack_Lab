const questions = [
    {
        question: "Which storage mechanism keeps data after the browser is closed?",
        options: ["sessionStorage","localStorage","temporaryStorage","memoryStorage"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var","let","const","constant"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>","<a>","<href>","<url>"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-color","text-color","color","foreground"],
        answer: 2
    },
    {
        question: "Which method converts JSON string into a JavaScript object?",
        options: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],
        answer: 0
    }
];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const usernameInput = document.querySelector("#username");
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const restartBtn = document.querySelector("#restart-btn");
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const questionCountElement = document.querySelector("#question-count");
const timerElement = document.querySelector("#timer");
const progressBar = document.querySelector("#progress-bar");
const scoreElement = document.querySelector("#score");
const finalScoreElement = document.querySelector("#final-score");
const resultNameElement = document.querySelector("#result-name");
const leaderboardElement = document.querySelector("#leaderboard");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timeLeft = 15;
let timer;

startBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter your name.");
        return;
    }
    localStorage.setItem("currentPlayer",username);
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = score;
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    clearInterval(timer);
    selectedAnswer = null;
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    questionCountElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.addEventListener("click",() => selectAnswer(index, button));
        optionsElement.appendChild(button);
    });

    startTimer();
}

function selectAnswer(index, button) {
    if (selectedAnswer !== null) {
        return;
    }
    selectedAnswer = index;
    const correctAnswer = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(option => {option.disabled = true;});
    if (index === correctAnswer) {
        button.classList.add("correct");
        score++;
        scoreElement.textContent = score;
    } else {
        button.classList.add("wrong");
        allOptions[correctAnswer].classList.add("correct");
    }
    clearInterval(timer);
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const correctAnswer = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(option => {
        option.disabled = true;
    });

    allOptions[correctAnswer].classList.add("correct");
}

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        handleTimeout();
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            finishQuiz();
        } else {
            loadQuestion();
        }
    }, 500);
});

function finishQuiz() {
    clearInterval(timer);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    const username = localStorage.getItem("currentPlayer");
    resultNameElement.textContent = username;
    finalScoreElement.textContent = score;
    saveScore(username, score);
    displayLeaderboard();
}

function saveScore(username, score) {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({
        name: username,
        score: score
    });

    leaderboard.sort(
        (a, b) => b.score - a.score
    );

    leaderboard = leaderboard.slice(0, 5);
    localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    const leaderboard =JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboardElement.innerHTML = "";
    if (leaderboard.length === 0) {
        leaderboardElement.innerHTML ="<p>No scores yet.</p>";
        return;
    }

    leaderboard.forEach((player, index) => {
        const item = document.createElement("div");
        item.classList.add("leaderboard-item");

        item.innerHTML = `
            <div class="player-name">
                <span class="rank">#${index + 1}</span>
                <span>${player.name}</span>
            </div>

            <span class="player-score">
                ${player.score}/${questions.length}
            </span>
        `;
        leaderboardElement.appendChild(item);
    });

}

restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    usernameInput.value = "";
});

displayLeaderboard();

const cityInput =document.querySelector("#city-input");
const weatherBtn =document.querySelector("#weather-btn");
const weatherContainer =document.querySelector("#weather-container");

weatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city.");
        return;
    }
    getWeather(city);
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        weatherBtn.click();
    }
});

async function getWeather(city) {
    weatherContainer.innerHTML = `<div class="weather-loading">Loading weather...</div>`;
    try {
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
        const geoData = await geoResponse.json();

        if (!geoData.results) {
            throw new Error("City not found");
        }
        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`);
        const weatherData =
            await weatherResponse.json();
        displayWeather(
            location,
            weatherData.current
        );
    } catch (error) {
        console.error(error);
        weatherContainer.innerHTML = `<div class="weather-loading">Unable to find weather for this city.</div>
        `;
    }
}

function displayWeather(location, weather) {
    const weatherInfo =getWeatherDescription(weather.weather_code);
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div class="weather-main">
                <div class="weather-location">
                    <h3>📍 ${location.name}</h3>
                    <p>${location.country}</p>
                    <p>${weatherInfo}</p>
                </div>
                <div class="temperature">
                    <span class="weather-icon">${getWeatherIcon(weather.weather_code)}</span>
                    <span class="temperature-value">${Math.round(weather.temperature_2m)}°C</span>
                </div>
            </div>
            <div class="weather-stats">
                <div class="weather-stat">
                    <span>Feels Like</span>
                    <strong>${Math.round(weather.apparent_temperature)}°C</strong>
                </div>
                <div class="weather-stat">
                    <span>Humidity</span>
                    <strong>${weather.relative_humidity_2m}%</strong>
                </div>
                <div class="weather-stat">
                    <span>Wind Speed</span>
                    <strong>${weather.wind_speed_10m} km/h</strong>
                </div>
            </div>
      </div>
    `;
}

function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorm"
    };

    return weatherCodes[code] || "Unknown weather";
}

function getWeatherIcon(code) {
    if (code === 0) {
        return "☀️";
    }
    if ([1, 2, 3].includes(code)) {
        return "⛅";
    }
    if ([45, 48].includes(code)) {
        return "🌫️";
    }
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
        return "🌧️";
    }
    if ([71, 73, 75].includes(code)) {
        return "❄️";
    }
    if (code === 95) {
        return "⛈️";
    }
    return "🌤️";
}