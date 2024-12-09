// Dados das Questões (Concurso Público - Brasil)
const questions = [
    // Direito Constitucional (12 questões placeholder)
    {
        theme: "constitucional",
        question: "Qual é a capital do Brasil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        answer: "Brasília",
    },
    {
        theme: "constitucional",
        question: "Em que ano foi promulgada a Constituição Federal vigente?",
        options: ["1988", "1998", "1964", "1934"],
        answer: "1988",
    },
    {
        theme: "constitucional",
        question: "Quantos Poderes há no Brasil?",
        options: ["3", "2", "4", "5"],
        answer: "3",
    },
    {
        theme: "constitucional",
        question: "Qual é o órgão máximo do Poder Judiciário?",
        options: ["Supremo Tribunal Federal", "Senado Federal", "Câmara dos Deputados", "Presidência da República"],
        answer: "Supremo Tribunal Federal",
    },
    {
        theme: "constitucional",
        question: "O Brasil é uma República?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "constitucional",
        question: "O Brasil é uma Federação?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "constitucional",
        question: "O voto é obrigatório no Brasil?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "constitucional",
        question: "Qual a idade mínima para votar no Brasil?",
        options: ["16", "18", "21", "25"],
        answer: "16",
    },
    {
        theme: "constitucional",
        question: "O Brasil tem um sistema presidencialista?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "constitucional",
        question: "Quem é o chefe de Estado no Brasil?",
        options: ["Presidente da República", "Rei", "Primeiro Ministro", "Governador"],
        answer: "Presidente da República",
    },
    {
        theme: "constitucional",
        question: "Qual é a duração do mandato presidencial no Brasil?",
        options: ["4 anos", "5 anos", "6 anos", "7 anos"],
        answer: "4 anos",
    },
    {
        theme: "constitucional",
        question: "A Constituição Federal pode ser emendada?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },

    // Direito Administrativo (11 questões placeholder)
    {
        theme: "administrativo",
        question: "O que é um ato administrativo?",
        options: ["Uma decisão judicial", "Uma lei aprovada pelo Congresso", "Uma manifestação de vontade da Administração Pública", "Um contrato privado"],
        answer: "Uma manifestação de vontade da Administração Pública",
    },
    {
        theme: "administrativo",
        question: "Qual é o princípio da legalidade?",
        options: ["A Administração Pública deve agir conforme a lei", "A Administração Pública deve ser eficiente", "A Administração Pública deve ser transparente", "A Administração Pública deve ser justa"],
        answer: "A Administração Pública deve agir conforme a lei",
    },
    {
        theme: "administrativo",
        question: "O que é licitação?",
        options: ["Um concurso público", "Um processo seletivo para empresas privadas", "Um procedimento para contratação pela Administração Pública", "Uma forma de punição"],
        answer: "Um procedimento para contratação pela Administração Pública",
    },
    {
        theme: "administrativo",
        question: "O que é poder de polícia?",
        options: ["A capacidade da polícia de prender criminosos", "A capacidade da Administração Pública de limitar direitos individuais em benefício do interesse público", "A capacidade do Presidente da República de governar", "A capacidade do Congresso Nacional de criar leis"],
        answer: "A capacidade da Administração Pública de limitar direitos individuais em benefício do interesse público",
    },
    {
        theme: "administrativo",
        question: "O que são servidores públicos?",
        options: ["Empregados de empresas privadas", "Pessoas que trabalham para a Administração Pública", "Políticos eleitos", "Juízes"],
        answer: "Pessoas que trabalham para a Administração Pública",
    },
    {
        theme: "administrativo",
        question: "O que é um concurso público?",
        options: ["Uma competição esportiva", "Um processo seletivo para servidores públicos", "Uma eleição", "Um sorteio"],
        answer: "Um processo seletivo para servidores públicos",
    },
    {
        theme: "administrativo",
        question: "O que é improbidade administrativa?",
        options: ["Um ato ilegal cometido por um servidor público", "Um erro cometido por um servidor público", "Uma decisão judicial injusta", "Uma lei inconstitucional"],
        answer: "Um ato ilegal cometido por um servidor público",
    },
    {
        theme: "administrativo",
        question: "O que é responsabilidade civil do Estado?",
        options: ["A obrigação do Estado de indenizar danos causados a terceiros", "A obrigação do Estado de punir criminosos", "A obrigação do Estado de criar leis", "A obrigação do Estado de realizar eleições"],
        answer: "A obrigação do Estado de indenizar danos causados a terceiros",
    },
    {
        theme: "administrativo",
        question: "O que é um contrato administrativo?",
        options: ["Um contrato entre particulares", "Um contrato entre a Administração Pública e um particular", "Um contrato entre dois órgãos públicos", "Um contrato internacional"],
        answer: "Um contrato entre a Administração Pública e um particular",
    },
    {
        theme: "administrativo",
        question: "O que é um órgão público?",
        options: ["Uma empresa privada", "Uma entidade da Administração Pública", "Uma organização não governamental", "Um partido político"],
        answer: "Uma entidade da Administração Pública",
    },
    {
        theme: "administrativo",
        question: "O que é a Administração Pública?",
        options: ["O conjunto de órgãos e entidades que exercem a função administrativa do Estado", "O Poder Judiciário", "O Poder Legislativo", "O Presidente da República"],
        answer: "O conjunto de órgãos e entidades que exercem a função administrativa do Estado",
    },

    // Português (11 questões placeholder)
    {
        theme: "portugues",
        question: "Qual é o plural de 'cão'?",
        options: ["Cães", "Cãos", "Cãeses", "Canis"],
        answer: "Cães",
    },
    {
        theme: "portugues",
        question: "Qual é o feminino de 'gato'?",
        options: ["Gata", "Gatoa", "Gatinha", "Gatona"],
        answer: "Gata",
    },
    {
        theme: "portugues",
        question: "Qual é o antônimo de 'bom'?",
        options: ["Mau", "Ruim", "Péssimo", "Malvado"],
        answer: "Mau",
    },
    {
        theme: "portugues",
        question: "Qual é o sinônimo de 'feliz'?",
        options: ["Alegre", "Triste", "Raiva", "Medo"],
        answer: "Alegre",
    },
    {
        theme: "portugues",
        question: "Qual é o verbo na frase 'Eu como maçã'?",
        options: ["Eu", "Como", "Maçã", "Nenhum"],
        answer: "Como",
    },
    {
        theme: "portugues",
        question: "Qual é o substantivo na frase 'O carro é vermelho'?",
        options: ["O", "Carro", "É", "Vermelho"],
        answer: "Carro",
    },
    {
        theme: "portugues",
        question: "Qual é o adjetivo na frase 'A casa é grande'?",
        options: ["A", "Casa", "É", "Grande"],
        answer: "Grande",
    },
    {
        theme: "portugues",
        question: "Qual é o advérbio na frase 'Ele corre rapidamente'?",
        options: ["Ele", "Corre", "Rapidamente", "Nenhum"],
        answer: "Rapidamente",
    },
    {
        theme: "portugues",
        question: "Qual é o pronome na frase 'Eu te amo'?",
        options: ["Eu", "Te", "Amo", "Nenhum"],
        answer: "Te",
    },
    {
        theme: "portugues",
        question: "Qual é a preposição na frase 'Eu vou para a escola'?",
        options: ["Eu", "Vou", "Para", "Escola"],
        answer: "Para",
    },
    {
        theme: "portugues",
        question: "Qual é a conjunção na frase 'Eu gosto de você e de seu irmão'?",
        options: ["Eu", "Gosto", "E", "Irmão"],
        answer: "E",
    },

    // Raciocínio Lógico (11 questões placeholder)
    {
        theme: "raciocinio",
        question: "Qual é o próximo número na sequência: 2, 4, 6, 8, ...?",
        options: ["10", "11", "12", "13"],
        answer: "10",
    },
    {
        theme: "raciocinio",
        question: "Se todos os gatos são mamíferos e todos os mamíferos são animais, então todos os gatos são animais?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "raciocinio",
        question: "Se A é maior que B e B é maior que C, então A é maior que C?",
        options: ["Sim", "Não"],
        answer: "Sim",
    },
    {
        theme: "raciocinio",
        question: "Qual é o valor de 2 + 2?",
        options: ["4", "5", "6", "7"],
        answer: "4",
    },
    {
        theme: "raciocinio",
        question: "Qual é o valor de 5 - 3?",
        options: ["2", "3", "4", "5"],
        answer: "2",
    },
    {
        theme: "raciocinio",
        question: "Qual é o valor de 3 * 2?",
        options: ["6", "7", "8", "9"],
        answer: "6",
    },
    {
        theme: "raciocinio",
        question: "Qual é o valor de 8 / 2?",
        options: ["4", "5", "6", "7"],
        answer: "4",
    },
    {
        theme: "raciocinio",
        question: "Se uma maçã custa R$ 1, quanto custam 3 maçãs?",
        options: ["R$ 3", "R$ 4", "R$ 5", "R$ 6"],
        answer: "R$ 3",
    },
    {
        theme: "raciocinio",
        question: "Se um carro percorre 100 km em 2 horas, qual é a sua velocidade média?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        answer: "50 km/h",
    },
    {
        theme: "raciocinio",
        question: "Se um quadrado tem lado 4, qual é a sua área?",
        options: ["16", "17", "18", "19"],
        answer: "16",
    },
    {
        theme: "raciocinio",
        question: "Se um círculo tem raio 3, qual é o seu perímetro?",
        options: ["18,84", "19,84", "20,84", "21,84"],
        answer: "18,84",
    },

    // Administração (11 questões placeholder)
    {
        theme: "administracao",
        question: "O que é administração?",
        options: ["A arte de gerenciar recursos", "A ciência de liderar pessoas", "A prática de tomar decisões", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "Qual é o objetivo principal da administração?",
        options: ["Alcançar os objetivos da organização", "Maximizar os lucros", "Minimizar os custos", "Satisfazer os clientes"],
        answer: "Alcançar os objetivos da organização",
    },
    {
        theme: "administracao",
        question: "Quais são as funções da administração?",
        options: ["Planejar, organizar, dirigir e controlar", "Planejar, liderar, motivar e comunicar", "Organizar, coordenar, executar e avaliar", "Controlar, monitorar, corrigir e prevenir"],
        answer: "Planejar, organizar, dirigir e controlar",
    },
    {
        theme: "administracao",
        question: "O que é planejamento?",
        options: ["Definir objetivos e metas", "Alocar recursos", "Estabelecer estratégias", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é organização?",
        options: ["Estruturar a empresa", "Dividir o trabalho", "Alocar recursos", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é direção?",
        options: ["Liderar pessoas", "Motivar equipes", "Comunicar objetivos", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é controle?",
        options: ["Monitorar o desempenho", "Corrigir desvios", "Prevenir erros", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é liderança?",
        options: ["Influenciar pessoas", "Motivar equipes", "Alcançar objetivos", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é motivação?",
        options: ["Incentivar as pessoas a agir", "Estimular o desempenho", "Recompensar o esforço", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é comunicação?",
        options: ["Transmitir informações", "Compartilhar ideias", "Promover o diálogo", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "administracao",
        question: "O que é gestão?",
        options: ["Administrar recursos", "Liderar pessoas", "Alcançar objetivos", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
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

    const nextButton = document.createElement("button"); // Cria o botão "Próximo"
    nextButton.textContent = "Próximo";
    nextButton.addEventListener("click", goToNextQuestion); // Adiciona o evento para a próxima questão

    if (selectedOption === correctAnswer) {
        currentStreak++;
        setTimeout(() => {
            selectedButton.classList.remove("selected");
            selectedButton.classList.add("correct");
            optionsContainer.appendChild(nextButton); // Adiciona o botão "Próximo" após a resposta correta
        }, 500);
    } else {
        currentStreak = 0;
        setTimeout(() => {
            selectedButton.classList.remove("selected");
            selectedButton.classList.add("wrong");
            optionsContainer.appendChild(nextButton); // Adiciona o botão "Próximo" após a resposta incorreta
        }, 500);
    }

    // Desabilita os botões de opção após a seleção
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => button.disabled = true);

    saveStreak();
    streakCount.textContent = currentStreak;

    // Remove o botão "Pular" após a resposta
    if (skipButton) {
        optionsContainer.removeChild(skipButton);
    }
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

// Pular Questão (fora da função selectAnswer)
const skipButton = document.createElement("button");
skipButton.textContent = "Pular";
skipButton.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});

// Adiciona o botão "Pular" inicialmente
optionsContainer.appendChild(skipButton);

// Inicializar
loadStreak();