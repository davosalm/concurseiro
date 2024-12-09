// Dados das Questões (Concurso Público - Brasil)
const questions = [
    // Direito Constitucional
    {
        theme: "constitucional",
        question: "Qual o nome do atual presidente do Brasil?",
        options: ["Jair Bolsonaro", "Michel Temer", "Luiz Inácio Lula da Silva", "Dilma Rousseff"],
        answer: "Luiz Inácio Lula da Silva",
        source: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/presidente-da-republica",
    },
    // ... (mais de 50 questões de diferentes categorias)
];

const themes = ["constitucional", "administrativo", "portugues", "raciocinio", "administracao", /* ... outras categorias ... */];
let currentThemeIndex = 0;

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const themeSelect = document.getElementById("theme");
const startQuizButton = document.getElementById("start-quiz");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const streakCount = document.getElementById("streak-count");
const themeToggle = document.getElementById("theme-toggle");

let currentQuestionIndex = 0;
let currentStreak = 0;
let selectedQuestions = [];

// Carregar Streak do localStorage (Resetando ao carregar a página)
function loadStreak() {
    currentStreak = 0; // Reseta o streak
    localStorage.setItem("streak", currentStreak); // Salva o streak resetado
    streakCount.textContent = currentStreak;
}

// Salvar Streak no localStorage
function saveStreak() {
    localStorage.setItem("streak", currentStreak);
}

// Embaralhar array (Algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Iniciar o Quiz
function startQuiz() {
    const selectedTheme = themeSelect.value;

    selectedQuestions = questions.filter(question => question.theme === selectedTheme);

    if (selectedQuestions.length === 0) {
        alert("Não há questões disponíveis para este tema.");
        return;
    }

    // Embaralhar as questões selecionadas
    selectedQuestions = shuffle(selectedQuestions);

    currentQuestionIndex = 0;
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    displayQuestion();
}

// Exibir a Questão
function displayQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const question = selectedQuestions[currentQuestionIndex];
        questionText.textContent = question.question;

        // Adicionar link da fonte à questão
        if (question.source) {
            const sourceLink = document.createElement("a");
            sourceLink.href = question.source;
            sourceLink.target = "_blank"; // Abrir em nova aba
            sourceLink.textContent = "?";
            questionText.appendChild(sourceLink);
        }

        optionsContainer.innerHTML = "";

        question.options.forEach((option) => {
            const optionButton = document.createElement("button");
            optionButton.classList.add("option");
            optionButton.textContent = option;
            optionButton.addEventListener("click", () => selectAnswer(option, question.answer));
            optionsContainer.appendChild(optionButton);
        });
    } else {
        // Questões da categoria atual acabaram
        let nextThemeIndex = (currentThemeIndex + 1) % themes.length; // Próxima categoria
        let nextTheme = themes[nextThemeIndex];

        if (confirm(`As questões de ${selectedTheme} acabaram. Mudar para ${nextTheme}?`)) {
            currentThemeIndex = nextThemeIndex;
            themeSelect.value = nextTheme; // Muda a seleção do tema no select
            startQuiz(); // Reinicia o quiz com a nova categoria
        } else {
            // O usuário escolheu não mudar de categoria
            alert("Fim do Quiz!");
            startScreen.style.display = "block"; // Volta para a tela inicial
            quizScreen.style.display = "none";
        }
    }
}

// Selecionar Resposta
function selectAnswer(selectedOption, correctAnswer) {
    const selectedButton = event.target;
    selectedButton.classList.add("selected");

    if (selectedOption === correctAnswer) {
        currentStreak++;
        setTimeout(() => {
            selectedButton.classList.remove("selected");
            selectedButton.classList.add("correct");
            setTimeout(() => {
                goToNextQuestion();
            }, 1000);
        }, 500);        
    } else {
        currentStreak = 0;
        setTimeout(() => {
            selectedButton.classList.remove("selected");
            selectedButton.classList.add("wrong");
            setTimeout(() => {
                goToNextQuestion();
            }, 1000);
        }, 500);  
    }

    saveStreak();
    streakCount.textContent = currentStreak;
}

// Próxima pergunta
function goToNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Event Listeners
startQuizButton.addEventListener("click", startQuiz);

// Modo Noturno
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

// Pular Questão
const skipButton = document.createElement("button");
skipButton.textContent = "Pular";
skipButton.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});

optionsContainer.appendChild(skipButton); // Adiciona o botão "Pular"

// Inicializar
loadStreak();