const questions = [
  {
    question: "Qaysi obyekt foydalanuvchining operatsion tizim bilan muloqotini ta’minlaydi?",
    answers: ["Boshqaruv paneli", "Topshiriqlar paneli", "Ish stoli", "Moy kompyuter"],
    correct: 2
  },
  {
    question: "Raqamli axborot qanday shaklda bo‘ladi?",
    answers: ["Analog", "Diskret", "Subyektiv", "Obyektiv"],
    correct: 1
  },
  {
    question: "Kompyuterning yuragi va miyasi qaysi qurilma?",
    answers: ["RAM", "HDD", "CPU", "Monitor"],
    correct: 2
  },
  {
    question: "Ma’lumotlarni vaqtincha saqlovchi qurilma qaysi?",
    answers: ["HDD", "ROM", "RAM", "DVD"],
    correct: 2
  },
  {
    question: "Kompyuter qurilmalariga xizmat ko‘rsatuvchi dasturlar qanday ataladi?",
    answers: ["Kompilyator", "Drayverlar", "Translyator", "Editor"],
    correct: 1
  },
  {
    question: "Qaysi biri kiritish qurilmasi hisoblanadi?",
    answers: ["Printer", "Monitor", "Klaviatura", "Kolonka"],
    correct: 2
  },
  {
    question: "Kompyuterda asosiy axborot saqlovchi qurilma qaysi?",
    answers: ["CPU", "HDD", "RAM", "Monitor"],
    correct: 1
  },
  {
    question: "Elektron shaklda qayd etilgan hujjat qanday ataladi?",
    answers: ["Matnli hujjat", "Tovushli hujjat", "Elektron hujjat", "Tasvirli hujjat"],
    correct: 2
  },
  {
    question: "Axborot nima?",
    answers: ["Faqat internet ma’lumoti", "Atrof-muhit haqidagi ma’lumot", "Faqat video", "Faqat rasm"],
    correct: 1
  },
  {
    question: "Scaner qanday qurilma?",
    answers: ["Chiqarish", "Kiritish", "Saqlash", "Hisoblash"],
    correct: 1
  }
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answersBox");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const liveScore = document.getElementById("liveScore");

const finalPercent = document.getElementById("finalPercent");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const correctCount = document.getElementById("correctCount");
const totalCount = document.getElementById("totalCount");
const levelText = document.getElementById("levelText");

let currentIndex = 0;
let score = 0;
let timeLeft = 15;
let timer = null;
let answered = false;

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  liveScore.textContent = score;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  answered = false;
  nextBtn.disabled = true;
  timeLeft = 15;
  timerEl.textContent = timeLeft;

  const currentQuestion = questions[currentIndex];
  questionCount.textContent = `${currentIndex + 1} / ${questions.length}`;
  questionText.textContent = currentQuestion.question;
  questionText.classList.remove("fade-switch");
  void questionText.offsetWidth;
  questionText.classList.add("fade-switch");

  const progress = ((currentIndex) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  answersBox.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn fade-up";
    button.textContent = answer;
    button.dataset.letter = letters[index];
    button.addEventListener("click", () => selectAnswer(index, button));
    answersBox.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 5) {
      timerEl.style.color = "#f59e0b";
    } else {
      timerEl.style.color = "#ffffff";
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      autoRevealCorrect();
    }
  }, 1000);
}

function selectAnswer(selectedIndex, button) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const currentQuestion = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;

    if (index === currentQuestion.correct) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === currentQuestion.correct) {
    button.classList.add("correct");
    score++;
    liveScore.textContent = score;
  } else {
    button.classList.add("wrong");
  }

  nextBtn.disabled = false;
}

function autoRevealCorrect() {
  if (answered) return;

  answered = true;
  const currentQuestion = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQuestion.correct) {
      btn.classList.add("correct");
    }
  });

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);
  showScreen(resultScreen);

  const percent = Math.round((score / questions.length) * 100);
  finalPercent.textContent = `${percent}%`;
  correctCount.textContent = score;
  totalCount.textContent = questions.length;

  let level = "Beginner";
  let text = "Yana mashq qilishing kerak.";
  let title = "Yaxshi urinish";

  if (percent >= 90) {
    level = "Expert";
    title = "Zo‘r natija";
    text = "Sen testni juda kuchli topshirding. Bu daraja juda yaxshi.";
  } else if (percent >= 70) {
    level = "Strong";
    title = "Kuchli natija";
    text = "Juda yaxshi. Yana ozroq ishlasang yanada zo‘r bo‘ladi.";
  } else if (percent >= 50) {
    level = "Good";
    title = "Yomon emas";
    text = "Asosiy narsalarni bilasan. Endi mustahkamlash kerak.";
  }

  resultTitle.textContent = title;
  resultText.textContent = text;
  levelText.textContent = level;
  progressBar.style.width = "100%";
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => {
  showScreen(startScreen);
});