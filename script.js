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
  },
  {
    question: "CPU nima?",
    answers: ["Xotira", "Protsessor", "Monitor", "Port"],
    correct: 1
  },
  {
    question: "RAM nima?",
    answers: ["Doimiy xotira", "Tezkor xotira", "Disk", "Printer"],
    correct: 1
  },
  {
    question: "HDD nima?",
    answers: ["Qattiq disk", "Monitor", "Printer", "Operatsion tizim"],
    correct: 0
  },
  {
    question: "Printer qanday qurilma?",
    answers: ["Kiritish", "Chiqarish", "Saqlash", "Hisoblash"],
    correct: 1
  },
  {
    question: "Monitor qanday qurilma?",
    answers: ["Kiritish", "Chiqarish", "Aloqa", "Saqlash"],
    correct: 1
  },
  {
    question: "Modem nima uchun ishlatiladi?",
    answers: ["Ovoz chiqarish", "Internetga ulash", "Rasm chizish", "Matn yozish"],
    correct: 1
  },
  {
    question: "USB nima?",
    answers: ["Port", "Operatsion tizim", "Brauzer", "Virus"],
    correct: 0
  },
  {
    question: "Wi-Fi nima?",
    answers: ["Simsiz tarmoq", "Disk turi", "Xotira", "Monitor"],
    correct: 0
  },
  {
    question: "Bluetooth nima?",
    answers: ["Simsiz aloqa", "Printer drayveri", "Qattiq disk", "Antivirus"],
    correct: 0
  },
  {
    question: "Server nima?",
    answers: ["Ma’lumot va xizmatlarni taqdim qiluvchi kompyuter", "Faqat telefon", "Printer", "Kabel"],
    correct: 0
  },
  {
    question: "Notebook nima?",
    answers: ["Noutbuk", "Skaner", "Disk", "Brauzer"],
    correct: 0
  },
  {
    question: "Planshet nima?",
    answers: ["Mobil qurilma", "Printer", "Karta", "Modem"],
    correct: 0
  },
  {
    question: "Smartfon nima?",
    answers: ["Aqlli telefon", "Qattiq disk", "Ona plata", "Brauzer"],
    correct: 0
  },
  {
    question: "OS nimani anglatadi?",
    answers: ["Operatsion tizim", "Optik skaner", "Onlayn servis", "Open storage"],
    correct: 0
  },
  {
    question: "Windows bu —",
    answers: ["Operatsion tizim", "Brauzer", "Kompyuter turi", "Virus"],
    correct: 0
  },
  {
    question: "Linux bu —",
    answers: ["Operatsion tizim", "Printer", "Qattiq disk", "Port"],
    correct: 0
  },
  {
    question: "Android bu —",
    answers: ["Mobil operatsion tizim", "Disk", "Skaner", "Monitor"],
    correct: 0
  },
  {
    question: "iOS bu —",
    answers: ["Mobil operatsion tizim", "Brauzer", "Wi-Fi", "RAM"],
    correct: 0
  },
  {
    question: "BIOS nima?",
    answers: ["Boshlang‘ich tizim dasturi", "Brauzer", "Antivirus", "Rasm formati"],
    correct: 0
  },
  {
    question: "GPU nima?",
    answers: ["Grafik protsessor", "Asosiy xotira", "Port", "Virus"],
    correct: 0
  },
  {
    question: "LAN nimani anglatadi?",
    answers: ["Mahalliy tarmoq", "Global tarmoq", "Disk turi", "Elektron hujjat"],
    correct: 0
  },
  {
    question: "WAN nimani anglatadi?",
    answers: ["Global/keng tarmoq", "Printer turi", "RAM", "Port"],
    correct: 0
  },
  {
    question: "HTML nima?",
    answers: ["Belgilash tili", "Operatsion tizim", "Antivirus", "Server"],
    correct: 0
  },
  {
    question: "CSS nima uchun ishlatiladi?",
    answers: ["Dizayn va uslub berish", "Ma’lumot saqlash", "Internetga ulash", "Xatolik topish"],
    correct: 0
  },
  {
    question: "JavaScript nima uchun ishlatiladi?",
    answers: ["Interaktivlik qo‘shish", "Faqat rasm chizish", "Kompyuter yig‘ish", "Disk formatlash"],
    correct: 0
  },
  {
    question: "Email bu —",
    answers: ["Elektron pochta", "Disk xotira", "Telefon turi", "Grafik karta"],
    correct: 0
  },
  {
    question: "Browser nima?",
    answers: ["Veb brauzer", "Qattiq disk", "Printer", "Tarmoq kabeli"],
    correct: 0
  },
  {
    question: "Google asosan nima?",
    answers: ["Qidiruv tizimi", "Operatsion tizim", "Telefon turi", "Qattiq disk"],
    correct: 0
  },
  {
    question: "YouTube nima?",
    answers: ["Video platforma", "Antivirus", "Disk turi", "Brauzer"],
    correct: 0
  },
  {
    question: "PDF bu —",
    answers: ["Fayl formati", "Operatsion tizim", "Monitor", "Kiritish qurilmasi"],
    correct: 0
  },
  {
    question: "DOC bu —",
    answers: ["Hujjat formati", "Grafik karta", "Qattiq disk", "Brauzer"],
    correct: 0
  },
  {
    question: "Excel nima?",
    answers: ["Jadval dasturi", "Brauzer", "Printer", "Server"],
    correct: 0
  },
  {
    question: "PowerPoint nima?",
    answers: ["Taqdimot dasturi", "Antivirus", "Disk", "Klaviatura"],
    correct: 0
  },
  {
    question: "Antivirus nima qiladi?",
    answers: ["Zararli dasturlardan himoya qiladi", "Internetga ulaydi", "Matn yozadi", "Rasm chiqaradi"],
    correct: 0
  },
  {
    question: "Virus nima?",
    answers: ["Zararli dastur", "Fayl papkasi", "Monitor turi", "Tarmoq porti"],
    correct: 0
  },
  {
    question: "Cloud storage nima?",
    answers: ["Bulutli saqlash", "Printer turi", "RAM", "CPU"],
    correct: 0
  },
  {
    question: "Database nima?",
    answers: ["Ma’lumotlar bazasi", "Grafik editor", "Qattiq disk", "Simsiz aloqa"],
    correct: 0
  },
  {
    question: "AI nimani anglatadi?",
    answers: ["Sun’iy intellekt", "Avtomatik internet", "Asosiy interfeys", "Arxiv fayl"],
    correct: 0
  },
  {
    question: "Robot bu —",
    answers: ["Dasturlashtirilgan qurilma", "Operatsion tizim", "Brauzer", "Hujjat turi"],
    correct: 0
  },
  {
    question: "Ona plata nima?",
    answers: ["Asosiy elektron plata", "Printer qismi", "Brauzer turi", "Skaner qismi"],
    correct: 0
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
  timerEl.style.color = "#ffffff";

  const currentQuestion = questions[currentIndex];
  questionCount.textContent = `${currentIndex + 1} / ${questions.length}`;
  questionText.textContent = currentQuestion.question;
  questionText.classList.remove("fade-switch");
  void questionText.offsetWidth;
  questionText.classList.add("fade-switch");

  const progress = (currentIndex / questions.length) * 100;
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