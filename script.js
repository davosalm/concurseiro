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
        question: "O que é poder de policia?",
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
        question: "O que é um ato discricionário?",
        options: ["Um ato que a Administração Pública é obrigada a praticar", "Um ato que a Administração Pública tem liberdade para praticar", "Um ato que a Administração Pública não pode praticar", "Um ato que a Administração Pública pratica em conjunto com o Poder Judiciário"],
        answer: "Um ato que a Administração Pública tem liberdade para praticar",
    },
    {
        theme: "administrativo",
        question: "O que é um ato vinculado?",
        options: ["Um ato que a Administração Pública é obrigada a praticar", "Um ato que a Administração Pública tem liberdade para praticar", "Um ato que a Administração Pública não pode praticar", "Um ato que a Administração Pública pratica em conjunto com o Poder Legislativo"],
        answer: "Um ato que a Administração Pública é obrigada a praticar",
    },
    {
        theme: "administrativo",
        question: "O que é um contrato administrativo?",
        options: ["Um contrato entre particulares", "Um contrato entre a Administração Pública e um particular", "Um contrato entre a Administração Pública e um servidor público", "Um contrato entre a Administração Pública e um órgão público"],
        answer: "Um contrato entre a Administração Pública e um particular",
    },
    {
        theme: "administrativo",
        question: "O que é uma autarquia?",
        options: ["Uma empresa privada", "Uma entidade da Administração Pública Indireta", "Um órgão da Administração Pública Direta", "Uma organização não governamental"],
        answer: "Uma entidade da Administração Pública Indireta",
    },

    // Português (10 questões placeholder)
    {
        theme: "portugues",
        question: "Qual é a forma correta do plural de 'cidadão'?",
        options: ["Cidadãos", "Cidadões", "Cidadães", "Cidadões"],
        answer: "Cidadãos",
    },
    {
        theme: "portugues",
        question: "Qual é o coletivo de 'abelhas'?",
        options: ["Enxame", "Colmeia", "Revoada", "Nuvem"],
        answer: "Enxame",
    },
    {
        theme: "portugues",
        question: "Qual é a classe gramatical da palavra 'rapidamente'?",
        options: ["Advérbio", "Adjetivo", "Substantivo", "Verbo"],
        answer: "Advérbio",
    },
    {
        theme: "portugues",
        question: "Qual é o antônimo de 'claro'?",
        options: ["Escuro", "Iluminado", "Brilhante", "Luminoso"],
        answer: "Escuro",
    },
    {
        theme: "portugues",
        question: "Qual é o sinônimo de 'alegria'?",
        options: ["Felicidade", "Tristeza", "Raiva", "Medo"],
        answer: "Felicidade",
    },
    {
        theme: "portugues",
        question: "Qual é a forma correta do verbo 'ir' no pretérito perfeito do indicativo, na 1ª pessoa do plural?",
        options: ["Fomos", "Íamos", "Vamos", "iremos"],
        answer: "Fomos",
    },
    {
        theme: "portugues",
        question: "Qual é a conjugação do verbo 'ser' no presente do indicativo, na 3ª pessoa do singular?",
        options: ["É", "Sou", "Somos", "São"],
        answer: "É",
    },
    {
        theme: "portugues",
        question: "Qual é a regência do verbo 'assistir' no sentido de 'ver'?",
        options: ["Assistir a", "Assistir em", "Assistir com", "Assistir para"],
        answer: "Assistir a",
    },
    {
        theme: "portugues",
        question: "Qual é a figura de linguagem presente na frase 'A cidade inteira dormia'?",
        options: ["Metonímia", "Metáfora", "Hipérbole", "Eufemismo"],
        answer: "Metonímia",
    },
    {
        theme: "portugues",
        question: "Qual é a função sintática do termo 'às aulas' na frase 'Ele faltou às aulas'?",
        options: ["Objeto indireto", "Adjunto adverbial de lugar", "Complemento nominal", "Adjunto adnominal"],
        answer: "Objeto indireto",
    },

    // Raciocínio Lógico (10 questões placeholder)
    {
        theme: "raciocinio",
        question: "Se todos os cães são mamíferos e todos os mamíferos são vertebrados, então todos os cães são vertebrados?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se alguns gatos são pretos e todos os gatos são felinos, então alguns felinos são pretos?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se nenhum peixe é mamífero e todos os tubarões são peixes, então nenhum tubarão é mamífero?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se todos os carros são veículos e alguns veículos são azuis, então todos os carros são azuis?",
        options: ["Verdadeiro", "Falso"],
        answer: "Falso",
    },
    {
        theme: "raciocinio",
        question: "Se algumas árvores são frutíferas e todas as árvores são plantas, então algumas plantas são frutíferas?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se todos os livros são objetos e alguns objetos são pesados, então alguns livros são pesados?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se nenhum metal é orgânico e todos os ouros são metais, então nenhum ouro é orgânico?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se todos os planetas são corpos celestes e alguns corpos celestes são habitáveis, então alguns planetas são habitáveis?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se algumas flores são vermelhas e todas as rosas são flores, então algumas rosas são vermelhas?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
    },
    {
        theme: "raciocinio",
        question: "Se todos os insetos são invertebrados e alguns invertebrados são voadores, então alguns insetos são voadores?",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
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

    // Conhecimentos Bancários (10 questões placeholder)
    {
        theme: "conhecimentos",
        question: "O que é um banco?",
        options: ["Uma instituição financeira", "Uma loja", "Uma escola", "Um hospital"],
        answer: "Uma instituição financeira",
    },
    {
        theme: "conhecimentos",
        question: "O que é uma conta corrente?",
        options: ["Uma conta para guardar dinheiro", "Uma conta para fazer investimentos", "Uma conta para receber salário", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "conhecimentos",
        question: "O que é um cartão de crédito?",
        options: ["Um cartão para fazer compras", "Um cartão para sacar dinheiro", "Um cartão para pagar contas", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "conhecimentos",
        question: "O que é um empréstimo?",
        options: ["Uma quantia de dinheiro que se pega emprestado", "Uma quantia de dinheiro que se dá de presente", "Uma quantia de dinheiro que se guarda no banco", "Uma quantia de dinheiro que se investe"],
        answer: "Uma quantia de dinheiro que se pega emprestado",
    },
    {
        theme: "conhecimentos",
        question: "O que é uma taxa de juros?",
        options: ["Uma taxa que se paga para usar um serviço", "Uma taxa que se recebe por um investimento", "Uma taxa que se paga por um empréstimo", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "conhecimentos",
        question: "O que é um investimento?",
        options: ["Uma forma de guardar dinheiro", "Uma forma de ganhar dinheiro", "Uma forma de gastar dinheiro", "Uma forma de perder dinheiro"],
        answer: "Uma forma de ganhar dinheiro",
    },
    {
        theme: "conhecimentos",
        question: "O que é uma poupança?",
        options: ["Uma conta para guardar dinheiro", "Uma conta para fazer investimentos", "Uma conta para receber salário", "Uma conta para pagar contas"],
        answer: "Uma conta para guardar dinheiro",
    },
    {
        theme: "conhecimentos",
        question: "O que é um cheque?",
        options: ["Um documento para fazer pagamentos", "Um documento para receber dinheiro", "Um documento para sacar dinheiro", "Um documento para investir dinheiro"],
        answer: "Um documento para fazer pagamentos",
    },
    {
        theme: "conhecimentos",
        question: "O que é um depósito?",
        options: ["Uma quantia de dinheiro que se coloca no banco", "Uma quantia de dinheiro que se retira do banco", "Uma quantia de dinheiro que se empresta do banco", "Uma quantia de dinheiro que se investe no banco"],
        answer: "Uma quantia de dinheiro que se coloca no banco",
    },
    {
        theme: "conhecimentos",
        question: "O que é um extrato bancário?",
        options: ["Um documento que mostra as movimentações da conta", "Um documento que autoriza um pagamento", "Um documento que comprova um depósito", "Um documento que solicita um empréstimo"],
        answer: "Um documento que mostra as movimentações da conta",
    },

    // Direito Penal (10 questões placeholder)
    {
        theme: "penal",
        question: "O que é um crime?",
        options: ["Uma conduta que viola a lei penal", "Uma conduta que viola a lei civil", "Uma conduta que viola a lei administrativa", "Uma conduta que viola a lei trabalhista"],
        answer: "Uma conduta que viola a lei penal",
    },
    {
        theme: "penal",
        question: "O que é uma pena?",
        options: ["Uma sanção imposta pelo Estado", "Uma recompensa por bom comportamento", "Uma indenização por danos causados", "Uma multa por infração de trânsito"],
        answer: "Uma sanção imposta pelo Estado",
    },
    {
        theme: "penal",
        question: "O que é dolo?",
        options: ["A intenção de cometer um crime", "A negligência ao cometer um crime", "A imprudência ao cometer um crime", "A imperícia ao cometer um crime"],
        answer: "A intenção de cometer um crime",
    },
    {
        theme: "penal",
        question: "O que é culpa?",
        options: ["A intenção de cometer um crime", "A falta de cuidado ao cometer um crime", "A premeditação de um crime", "A confissão de um crime"],
        answer: "A falta de cuidado ao cometer um crime",
    },
    {
        theme: "penal",
        question: "O que é um homicídio?",
        options: ["Matar alguém", "Roubar algo", "Falsificar um documento", "Dirigir embriagado"],
        answer: "Matar alguém",
    },
    {
        theme: "penal",
        question: "O que é um furto?",
        options: ["Subtrair coisa alheia móvel", "Matar alguém", "Falsificar um documento", "Dirigir embriagado"],
        answer: "Subtrair coisa alheia móvel",
    },
    {
        theme: "penal",
        question: "O que é um roubo?",
        options: ["Subtrair coisa alheia móvel, mediante violência ou grave ameaça", "Matar alguém", "Falsificar um documento", "Dirigir embriagado"],
        answer: "Subtrair coisa alheia móvel, mediante violência ou grave ameaça",
    },
    {
        theme: "penal",
        question: "O que é uma falsificação?",
        options: ["Alterar um documento verdadeiro", "Criar um documento falso", "Usar um documento falso", "Todas as anteriores"],
        answer: "Todas as anteriores",
    },
    {
        theme: "penal",
        question: "O que é embriaguez ao volante?",
        options: ["Dirigir sob a influência de álcool", "Dirigir sem habilitação", "Dirigir em alta velocidade", "Dirigir na contramão"],
        answer: "Dirigir sob a influência de álcool",
    },
    {
        theme: "penal",
        question: "O que é legítima defesa?",
        options: ["Agir para repelir injusta agressão", "Agir em estado de necessidade", "Agir em estrito cumprimento do dever legal", "Agir em exercício regular de direito"],
        answer: "Agir para repelir injusta agressão",
    },
    {
        theme: "civil",
        exam: "Pref. Guarulhos/SP",
        question: "(VUNESP - 2019 - Pref. Guarulhos/SP) - Considerando a disciplina constante da Lei de Introdução às Normas do Direito Brasileiro (LINDB), pode-se corretamente afirmar que",
        options: [
            "se, antes de entrar a lei em vigor, ocorrer nova publicação de seu texto, destinada a correção, o prazo de início da vigência começará a correr da primeira publicação.",
            "salvo disposição contrária, a lei começa a vigorar em todo o país 90 (noventa) dias depois de oficialmente publicada.",
            "não se destinando à vigência temporária, a lei terá vigência até que outra a modifique ou revogue e,salvo disposição em contrário, a lei revogada se restaura por ter a lei revogadora perdido a vigência.",
            "a lei posterior revoga a anterior quando expressa ou tacitamente o declare, quando seja com ela incompatível ou quando regule total ou parcialmente a matéria de que tratava a lei anterior.",
            "a lei nova, que estabeleça disposições gerais ou especiais a par das já existentes, não revoga nem modifica a lei anterior e as correções a texto de lei já em vigor consideram-se lei nova."
        ],
        answer: "e",
    }
];

const themes = ["constitucional", "administrativo", "portugues", "raciocinio", "administracao", "conhecimentos", "penal", "civil"];
const exams = ["all", "IBGE", "Banco do Brasil", "Pref. Guarulhos/SP", "PRF"];
let currentThemeIndex = 0;

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const themeSelect = document.getElementById("theme");
const examSelect = document.getElementById("exam");
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
    const selectedExam = examSelect.value;

    selectedQuestions = questions
        .filter(question => question.theme === selectedTheme)
        .filter(question => selectedExam === "all" || question.exam === selectedExam);

    if (selectedQuestions.length === 0) {
        alert("Não há questões disponíveis para este tema e concurso.");
        return;
    }

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
    if (themeToggle.checked) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
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

// Botão "Sobre"
const aboutButton = document.getElementById("about-button");
const aboutPopup = document.getElementById("about-popup");
const closeButton = document.querySelector(".close-button");

aboutButton.addEventListener("click", () => {
    aboutPopup.style.display = "block";
});

closeButton.addEventListener("click", () => {
    aboutPopup.style.display = "none";
});

// Fechar o popup ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === aboutPopup) {
        aboutPopup.style.display = "none";
    }
});

// Inicializar
loadStreak();