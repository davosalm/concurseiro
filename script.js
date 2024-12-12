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
    },
    // Novas questões de Informática
    {
        theme: "informatica",
        exam: "Pref. Antônio Prado/RS",
        question: "Uma recente falha de segurança descoberta numa rede social permitia que funcionários soubessem as senhas dos usuários, pois elas eram armazenadas sem qualquer tipo de codificação criptográfica. Para evitar tal falha, a empresa deveria, desde o início, ter lançado mão de algum método criptográfico para armazenar senhas, entre eles, uma das opções seria:",
        options: [
            "Usar redes privadas virtuais (VPN) dentro do ambiente corporativo.",
            "Utilizar um certificado digital para cada senha.",
            "Transformar cada senha em uma chave assimétrica com o protocolo IPsec.",
            "Transformar a senha com um método hash de mão única.",
            "Fatorar a senha em números primos grandes."
        ],
        answer: "Transformar a senha com um método hash de mão única."
    },
    {
        theme: "informatica",
        exam: "IDAF/AC",
        question: "No Windows 8, além das diversas funções e recursos existentes para facilitar o seu dia a dia, é possível utilizar teclas de atalhos no teclado para ajudar você a fazer o que quiser mais rápido. Qual a combinação de teclas de atalho para minimizar todas as janelas abertas e ir direto para sua área de trabalho?",
        options: [
            "Tecla do logotipo do Windows + L",
            "Tecla do logotipo do Windows + F",
            "Tecla do logotipo do Windows + M",
            "Tecla do logotipo do Windows + E",
            "Tecla do logotipo do Windows + F1"
        ],
        answer: "Tecla do logotipo do Windows + M"
    },
    {
        theme: "informatica",
        exam: "Pref. Barão de Cocais/MG",
        question: "Sobre as noções básicas de conhecimento de internet, analise as seguintes afirmativas.\n\n1. A URL é um endereço virtual que indica onde está o que o usuário procura.\n2. HTTP é um protocolo de comunicação que permite a transferência de informação entre redes.\n3. WWW é a sigla para World Wide Web, que significa rede de alcance local.\n\nEstão corretas as afirmativas:",
        options: [
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: "I e II, apenas."
    },
    {
        theme: "informatica",
        exam: "DMAE de Uberlândia/MG",
        question: "Conforme o cret.br, a política de segurança da informação define os direitos e as responsabilidades de cada um em relação à segurança dos recursos computacionais que utiliza.\n\nA respeito das políticas de segurança, analise as seguintes afirmativas.\n\n1. A política de privacidade define como são tratadas as informações institucionais, ou seja,define se tais informações podem ser repassadas a terceiros.\n2. A política de senhas define as regras sobre o uso de senhas nos recursos computacionais, como tamanho mínimo e máximo, regra de formação e periodicidade de troca.\n3. A política de backup define as regras sobre a realização de cópias de segurança, como o tipo de mídia utilizada, o período de retenção e a frequência de execução.\n\nEstão corretas as afirmativas:",
        options: [
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        answer: "II e III, apenas."
    },
    {
        theme: "informatica",
        exam: "TJ/AM",
        question: "Com relação a arquitetura e tecnologias de sistemas de informação: Quando o sistema envia a instrução de gravar um byte em um arranjo de discos em RAID 0, a informação é fatiada, e cópias idênticas são gravadas em todos os discos disponíveis.",
        options: [
            "Certo",
            "Errado"
        ],
        answer: "Errado"
    },
    {
        theme: "informatica",
        exam: "UNIRIO",
        question: "Q é servidor público e postulou readaptação por ter sofrido limitações que impediriam o exercício no cargo público originário que ocupava. Ao submeter-se à inspeção de saúde, foi diagnosticado como totalmente incapaz para o serviço público.\n\nNesse caso, nos termos da Lei no 8.112/1990, o servidor Q será:",
        options: [
            "exonerado",
            "demitido",
            "disponibilizado",
            "aposentado",
            "retornado"
        ],
        answer: "aposentado"
    },
    {
        theme: "informatica",
        exam: "Pref. Sertãozinho/SP",
        question: "O atalho de teclado para alternar janelas abertas no Windows 7 é:",
        options: [
            "TAB",
            "WINDOWS+TAB",
            "SHIFT+TAB",
            "CTRL+TAB",
            "ALT+TAB"
        ],
        answer: "ALT+TAB"
    },
    {
        theme: "informatica",
        exam: "Pref. Sant´Ana do Livramento/RS",
        question: "A internet é pautada em um paradigma. Que tipo de modelo de comunicação é esse paradigma?",
        options: [
            "Cliente - Servidor.",
            "Mainframe.",
            "Data Centers.",
            "Nenhuma das alternativas."
        ],
        answer: "Cliente - Servidor."
    },
    {
        theme: "informatica",
        exam: "IMBEL",
        question: "Gabriela preparou uma planilha no MS Excel para lançar as notas de seus alunos. Durante a digitação das notas, Gabriela gostaria de controlar automaticamente as seguintes regras:\n\n1. Aceitar somente notas entre 0 e 10;\n2. Ressaltar, com cor diferenciada, as notas menores que 5.\n\nAssinale a opção que indica os recursos do MS Excel que Gabriela deverá usar para obter esse controle.",
        options: [
            "Validação de dados / Formatação condicional.",
            "Formatação condicional / Classificar e Filtrar.",
            "Verificação de erros / Teste de hipóteses.",
            "Teste de hipóteses / Verificação de erros.",
            "Classificar e Filtrar / Validação de dados."
        ],
        answer: "Validação de dados / Formatação condicional."
    },
    // Novas questões de Legislação Federal
    {
        theme: "legislacao",
        exam: "FPMA",
        question: "A Constituição Federal de 1988 determina que a Administração Pública adote um parâmetro aberto de acesso à informação pública, sendo excepcional a atribuição de sigilo. Sobre o assunto, assinale a alternativa correta.",
        options: [
            "O orçamento do Fundo de Previdência Municipal de Araucária deve permanecer resguardado por sigilo, considerando que o acesso irrestrito a essas informações pode comprometer a estabilidade financeira do Município.",
            "A Lei nº 12.527/2011 não se aplica ao Fundo de Previdência Municipal de Araucária, dada sua natureza jurídica de autarquia municipal.",
            "De acordo com os tratados internacionais firmados pelo Brasil em relação a essa matéria, os documentos públicos sigilosos só podem adquirir publicidade após 20 anos de sua edição.",
            "O artigo 21 da Lei nº 12.52 7/2011 estabelece que n ão pode ser negado o acesso à informação pública pertinente à tutela judicial ou administrativa de direitos fundamentais. Esse dispositivo legal não pode ser oposto contra o Fundo de Previdência Municipal de Araucária, tendo em vista ser esse organismo submetido à disciplina do equilíbrio financeiro e atuarial.",
            "Os Municípios devem editar legislação própria acerca do acesso à informação pública, respeitados os parâmetros trazidos pela Lei nº 12.527/2011."
        ],
        answer: "Os Municípios devem editar legislação própria acerca do acesso à informação pública, respeitados os parâmetros trazidos pela Lei nº 12.527/2011."
    },
    {
        theme: "legislacao",
        exam: "UFG",
        question: "Quanto à habilitação de licitantes, o Decreto n. 2.745/1988 dispõe, em seu Capítulo IV, que a inscrição no registro cadastral de licitantes da Petrobras poderá ser cancelada, quando",
        options: [
            "houver títulos protestados ou executados.",
            "ocorrer declaração de inidoneidade da firma.",
            "deixar de renovar, no prazo, documentos com prazo de validade vencido.",
            "apresentar, na execução de contrato, desempenho considerado insuficiente."
        ],
        answer: "ocorrer declaração de inidoneidade da firma."
    },
    {
        theme: "legislacao",
        exam: "CRF/PR",
        question: "O Decreto n.º 8.373/2014 instituiu o Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas (e Social). Por meio desse sistema, os empregadores passarão a comunicar ao governo, de forma unificada, as informações relativas aos trabalhadores, como vínculos, contribuições previdenciárias, folha de pagamento, comunicações de acidente de trabalho, aviso prévio, escriturações fiscais e informações sobre o FGTS. Sendo assim, conforme a Resolução do Comitê Diretivo do e Social n.º 2/2016, publicada no dia 31 de agosto de 2016, no Diário Oficial da União, assinale a alternativa correta quanto ao cronograma de implantação do e Social.",
        options: [
            "A implantação do sistema foi realizada por completo, a partir do dia 1.º de julho de 2019, aos empregadores e contribuintes, independentemente do valor de faturamento anual.",
            "A implantação do sistema será realizada em duas etapas: a partir de 1.º de janeiro de 2021, a obrigatoriedade de utilização do e Social Empresas será para os empregadores e contribuintes com faturamento apurado, no ano de 2019, superior a R$ 78 milhões; e, a partir de 1.º de julho de 2021, a obrigatoriedade será estendida aos demais empregadores e contribuintes, independentemente do valor de faturamento anual.",
            "A implantação do sistema foi realizada em duas etapas: a partir de 1.º de janeiro de 2018, a obrigatoriedade de utilização do e Social Empresas foi para os empregadores e contribuintes com faturamento apurado, no ano de 2016, superior a R$ 78 milhões; e, a partir de 1.º de julho de 2018, a obrigatoriedade foi estendida aos demais empregadores e contribuintes, independentemente do valor de faturamento anual.",
            "A implantação do sistema foi realizada por completo, a partir do dia 1.º de janeiro de 2019, aos empregadores e contribuintes, independentemente do valor de faturamento anual.",
            "A implantação do sistema será realizada em duas etapas: a partir de 1.º de janeiro de 2020, a obrigatoriedade de utilização do e Social Empresas será para os empregadores e contribuintes com faturamento apurado, no ano de 2018, superior a R$ 78 milhões; e, a partir de 1.º de julho de 2020, a obrigatoriedade será estendida aos demais empregadores e contribuintes, independentemente do valor de faturamento anual."
        ],
        answer: "A implantação do sistema foi realizada em duas etapas: a partir de 1.º de janeiro de 2018, a obrigatoriedade de utilização do e Social Empresas foi para os empregadores e contribuintes com faturamento apurado, no ano de 2016, superior a R$ 78 milhões; e, a partir de 1.º de julho de 2018, a obrigatoriedade foi estendida aos demais empregadores e contribuintes, independentemente do valor de faturamento anual."
    },
    {
        theme: "legislacao",
        exam: "Pref. Sarandi/PR",
        question: "Assinale a alternativa que NÃO contém um princípio mínimo de atuação das guardas municipais, segundo dispõe o artigo 3º da Lei 13.022:",
        options: [
            "Proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas.",
            "Preservação da vida, redução do sofrimento e diminuição das perdas.",
            "Patrulhamento repressivo.",
            "Compromisso com a evolução social da comunidade"
        ],
        answer: "Patrulhamento repressivo."
    },
    {
        theme: "legislacao",
        exam: "Valiprev",
        question: "Com relação aos beneficiários do Regime Geral de Previdência Social, na condição de dependentes do segurado, nos termos da Lei no 8.213/1991, é correto afirmar que",
        options: [
            "não pode ser considerado como dependente para os fins de obtenção de benefício previdenciário o irmão não emancipado, de qualquer condição, menor de 21 (vinte e um) anos ou inválido ou que tenha deficiência intelectual ou mental ou deficiência grave.",
            "o enteado e o menor tutelado equiparam-se a filho e dispensam a comprovação da dependência econômica, bastando, para essa finalidade, a declaração escrita de próprio punho do segurado.",
            "a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 (vinte e um) anos são exemplos de dependentes presumidos, que dispensam prova da dependência econômica.",
            "as provas de união estável e de dependência econômica exigem início de prova material contemporânea dos fatos, sendo admitida, porém, a prova exclusivamente testemunhal quando não houver provas documentais.",
            "os pais e os avós são considerados dependentes especiais do segurado e poderão obter o benefício por meio de simples apresentação do documento que comprove a relação de parentesco, dispensados outros meios de prova."
        ],
        answer: "a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 (vinte e um) anos são exemplos de dependentes presumidos, que dispensam prova da dependência econômica."
    },
    {
        theme: "legislacao",
        exam: "CREA/GO",
        question: "Quanto à anotação de responsabilidade técnica (ART) e à Mútua de Assistência Profissional, previstas na Lei n.º 6.496/1977: A ART define, para os efeitos legais, os responsáveis técnicos pelo empreendimento, sendo que sua falta sujeitará o profissional ou a empresa à multa e às demais cominações legais.",
        options: [
            "Certo",
            "Errado"
        ],
        answer: "Certo"
    },
    {
        theme: "legislacao",
        exam: "CRO/AC",
        question: "Com base no Decreto n.º 1.171/1994: As comissões de ética devem ser criadas, obrigatoriamente, no âmbito da administração direta, sendo facultativa sua instituição na administração indireta.",
        options: [
            "Certo",
            "Errado"
        ],
        answer: "Errado"
    },
    {
        theme: "legislacao",
        exam: "CREA/TO",
        question: "Quanto às Leis n.º 5.194/1966, n.º 6.496/1977 e n.º 6.838/1980: Cabe ao Conselho Regional fixar e alterar as anuidades, os emolumentos e as taxas a serem pagas pelos profissionais.",
        options: [
            "Certo",
            "Errado"
        ],
        answer: "Errado"
    },
    {
        theme: "legislacao",
        exam: "TJ/AM",
        question: "Com base na Lei n.º 11.419/2006: A assinatura eletrônica do signatário corresponde a uma assinatura digital baseada em um certificado digital emitido por autoridade certificadora, em conjunto com a identificação do signatário mediante cadastro de usuário no Poder Judiciário",
        options: [
            "Certo",
            "Errado"
        ],
        answer: "Certo"
    },
    {
        theme: "legislacao",
        exam: "Pref. Lençóis Paulista/SP",
        question: "De acordo com a Lei Federal nº 8.429 de 2 de junho de 1992, Lei de Improbidade Administrativa , Art. 19. Constitui crime a representação por ato de improbidade contra agente público ou terceiro beneficiário, quando o autor da denúncia o sabe inocente. A pena será de:",
        options: [
            "detenção de seis a dez meses e multa.",
            "detenção de dez a dezoito meses e multa.",
            "detenção de dez a doze meses e multa.",
            "detenção de doze a vinte quatro meses e multa."
        ],
        answer: "detenção de seis a dez meses e multa."
    }
];

const themes = ["constitucional", "administrativo", "portugues", "raciocinio", "administracao", "conhecimentos", "penal", "civil", "informatica", "legislacao"];
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
        
        // Criar o texto da questão incluindo o nome do exame
        const examText = `[${question.exam}]\n\n`;
        questionText.textContent = examText + question.question;

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
        let nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        let nextTheme = themes[nextThemeIndex];

        if (confirm(`As questões de ${themeSelect.value} acabaram. Mudar para ${nextTheme}?`)) {
            currentThemeIndex = nextThemeIndex;
            themeSelect.value = nextTheme;
            startQuiz();
        } else {
            alert("Fim do Quiz!");
            startScreen.style.display = "block";
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