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

    // Banco do Brasil - 2015
    {
        theme: "raciocinio",
        exam: "Banco do Brasil",
        question: "(Banco do Brasil - 2015) Aldo, Baldo e Caldo resolvem fazer um bolão para um concurso da Mega-Sena. Aldo contribui com 12 bilhetes, Baldo, com 15 bilhetes e Caldo, com 9 bilhetes. Eles combinaram que, se um dos bilhetes do bolão fosse sorteado, o prêmio seria dividido entre os três proporcionalmente à quantidade de bilhetes com que cada um contribuiu. Caldo também fez uma aposta fora do bolão e, na data do sorteio, houve 2 bilhetes ganhadores, sendo um deles o da aposta individual de Caldo, e o outro, um dos bilhetes do bolão. Qual a razão entre a quantia total que Caldo recebeu e a quantia que Baldo recebeu?",
        options: ["0,8", "1,5", "2", "2,5", "3"],
        answer: "3",
    },
    {
        theme: "conhecimentos",
        exam: "Banco do Brasil",
        question: "(Banco do Brasil - 2015) A Comissão de Valores Mobiliários (CVM) é um órgão que regula e fiscaliza o mercado de capitais no Brasil, sendo",
        options: ["subordinada ao Banco Central do Brasil", "subordinada ao Banco do Brasil", "subordinada à Bolsa de Valores de São Paulo (BOVESPA)", "independente do poder público", "vinculada ao poder executivo (Ministério da Fazenda)"],
        answer: "vinculada ao poder executivo (Ministério da Fazenda)",
    },
    {
        theme: "raciocinio",
        exam: "Banco do Brasil",
        question: "(Banco do Brasil - 2015) Amanda e Belinha são amigas e possuem assinaturas de TV a cabo de empresas diferentes. A empresa de TV a cabo de Amanda dá descontos de 25% na compra dos ingressos de cinema de um shopping. A empresa de TV a cabo de Belinha dá desconto de 30% na compra de ingressos do mesmo cinema. O preço do ingresso de cinema, sem desconto, é de R$ 20,00. Em um passeio em família, Amanda compra 4 ingressos, e Belinha compra 5 ingressos de cinema no shopping, ambas utilizando-se dos descontos oferecidos por suas respectivas empresas de TV a cabo. Quantos reais Belinha gasta a mais que Amanda na compra dos ingressos?",
        options: ["10", "15", "20", "25", "30"],
        answer: "10",
    },
    {
        theme: "raciocinio",
        exam: "Banco do Brasil",
        question: "(Banco do Brasil - 2015) Em uma determinada agência bancária, para um cliente que chega entre 15 h e 16 h, a probabilidade de que o tempo de espera na fila para ser atendido seja menor ou igual a 15 min é de 80%. Considerando que quatro clientes tenham chegado na agência entre 15 h e 16 h, qual a probabilidade de que exatamente três desses clientes esperem mais de 15 min na fila?",
        options: ["0,64%", "2,56%", "30,72%", "6,67%", "10,24%"],
        answer: "2,56%",
    },
    {
        theme: "raciocinio",
        exam: "Banco do Brasil",
        question: "(Banco do Brasil - 2015) Um grupo de analistas financeiros composto por 3 especialistas  X, Y e Z – possui a seguinte característica: X e Y decidem corretamente com probabilidade de 80%, e Z decide corretamente em metade das vezes. Como as decisões são tomadas pela maioria, a probabilidade de o grupo tomar uma decisão correta é:",
        options: ["0,16", "0,64", "0,48", "0,32", "0,80"],
        answer: "0,80",
    },

    // Questões do IBGE
    {
        theme: "conhecimentos",
        exam: "IBGE",
        question: "(IBGE - 2007) Em 2006, o IBGE completou 70 anos de sua fundação. Esse instituto foi criado no contexto histórico da(o):",
        options: ["Ditadura Militar, de Costa e Silva", "Transição Democrática, de José Sarney", "Estado Novo, de Getúlio Vargas", "Plano de Metas, de Juscelino Kubitschek", "Milagre Brasileiro, de Ernesto Geisel"],
        answer: "Estado Novo, de Getúlio Vargas",
    },
    {
        theme: "conhecimentos",
        exam: "IBGE",
        question: "(IBGE - 2011) Uma nova medição realizada em 2004 pelo Instituto Brasileiro de Geografia e Estatística IBGE foi responsável pela mudança do ponto considerado o mais alto do país que de pouco mais de 3 mil metros de altitude passou a ter pouco mais de 2900 metros. Localizado na região Norte brasileira, recebe a denominação de:",
        options: ["Pico da Neblina", "Pico Cristal", "Pico da Bandeira", "Pico 31 de Março", "Pico das Agulhas Negras"],
        answer: "Pico da Neblina",
    },
    {
        theme: "conhecimentos",
        exam: "IBGE",
        question: "(IBGE - 2007) O Brasil é uma república federativa formada pela União, pelos estados e pelos municípios. A Câmara dos Deputados e as Câmaras de Vereadores correspondem, respectivamente, aos níveis federativos:",
        options: ["municipal e federal", "estadual e federal", "estadual e distrital", "federal e estadual", "federal e municipal"],
        answer: "federal e municipal",
    },

    // Questões da PRF
    {
        theme: "penal",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - Com relação aos princípios, institutos e dispositivos da parte geral do Código Penal (CP), julgue os itens seguintes. Considere que um indivíduo penalmente capaz, em total estado de embriaguez, decorrente de caso fortuito, atropele um pedestre, causando-lhe a morte. Nessa situação, a embriaguez não excluía imputabilidade penal do agente.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "constitucional",
        exam: "PRF",
        question: "(CESPE - 2019 - PRF - Policial Rodoviário Federal) - À luz da Constituição Federal de 1988, julgue o item que se segue, a respeito de direitos e garantias fundamentais e da defesa do Estado e das instituições democráticas. Policial rodoviário federal com mais de dez anos de serviço pode candidatar-se ao cargo de deputado federal, devendo, no caso de ser eleito, passar para inatividade a partir do ato de sua diplomação.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "raciocinio",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - Considerando que uma equipe de 30 operários, igualmente produtivos, construa uma estrada de 10 km de extensão em 30 dias, julgue os próximos itens. Se a tarefa estiver sendo realizada pela equipe inicial de 30 operários e, no início do quinto dia, 2 operários abandonarem a equipe, e não forem substituídos, então essa perda ocasionará atraso de 10 dias no prazo de conclusão da obra.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "administrativo",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - No que se refere ao regime jurídico administrativo, julgue os itens subsecutivos. A administração não pode estabelecer, unilateralmente, obrigações aos particulares, mas apenas aos seus servidores e aos concessionários, permissionários e delegatários de serviços públicos.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "administrativo",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - No que concerne ao regime jurídico do servidor público federal, julgue os próximos itens. A nomeação para cargo de provimento efetivo será realizada mediante prévia habilitação em concurso público de provas ou de provas e títulos ou, em algumas situações excepcionais, por livre escolha da autoridade competente.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "administrativo",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - No que concerne ao abuso de autoridade e ao Estatuto do Desarmamento, julgue os itens a seguir. Considere que um PRF aborde o condutor de um veículo por este trafegar acima da velocidade permitida em rodovia federal. Nessa situação, se demorar em autuar o condutor, o policial poderá responder por abuso de autoridade, ainda que culposamente.",
        options: ["Certo", "Errado"],
        answer: "Errado",
    },
    {
        theme: "penal",
        exam: "PRF",
        question: "(CESPE - 2019 - PRF - Policial Rodoviário Federal) - Com relação aos meios de prova e os procedimentos inerentes a sua colheita, no âmbito da investigação criminal, julgue o próximo item. A entrada forçada em determinado domicílio é lícita, mesmo sem mandado judicial e ainda que durante a noite, caso esteja ocorrendo, dentro da casa, situação de flagrante delito nas modalidades próprio, impróprio ou ficto.",
        options: ["Certo", "Errado"],
        answer: "Certo",
    },
    {
        theme: "constitucional",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - No que se refere aos princípios fundamentais da Constituição Federal de 1988 (CF) e à aplicabilidade das normas constitucionais, julgue os itens a seguir. No que se refere às relações internacionais, a República Federativa do Brasil rege-se pelos princípios da igualdade entre os Estados, da cooperação entre os povos para o progresso da humanidade e da concessão de asilo político, entre outros.",
        options: ["Certo", "Errado"],
        answer: "Certo",
    },
    {
        theme: "portugues",
        exam: "PRF",
        question: "(CESPE - 2019 - PRF - Policial Rodoviário Federal) - 1 As atividades pertinentes ao trabalho relacionam-se intrinsecamente com a satisfação das necessidades dos seres humanos — alimentar-se, proteger-se do frio e do 4 calor, ter o que calçar etc. Estas colocam os homens em uma relação de dependência com a natureza, pois no mundo natural estão os elementos que serão utilizados para 7 atendê-las. Se prestarmos atenção à nossa volta, perceberemos que quase tudo que vemos existe em razão de atividades do 10 trabalho humano. Os processos de produção dos objetos que nos cercam movimentam relações diversas entre os indivíduos, assim como a organização do trabalho 13 alterou-se bastante entre diferentes sociedades e momentos da história. De acordo com o cientista social norte-americano 16 Marshall Sahlins, nas sociedades tribais, o trabalho geralmente não tem a mesma concepção que vigora nas sociedades industrializadas. Naquelas, o trabalho está 19 integrado a outras dimensões da sociabilidade — festas, ritos, artes, mitos etc. —, não representando, assim, um mundo à parte. 22 Nas sociedades tribais, o trabalho está em tudo, e praticamente todos trabalham. Sahlins propôs que tais sociedades fossem conhecidas como “sociedades de abundância” ou “sociedades do lazer”, pelo fato de que nelas a satisfação das necessidades básicas sociais e materiais se dá plenamente. Thiago de Mello. Trabalho. Internet: <educacao.globo.com> (com adaptações) Julgue o seguinte item, a respeito das ideias e das construções linguísticas do texto apresentado. Com o emprego da expressão “assim como” (ℓ.12), estabelece-se uma relação de comparação entre ideias expressas no período.",
        options: ["Certo", "Errado"],
        answer: "Certo",
    },
    {
        theme: "constitucional",
        exam: "PRF",
        question: "(CESPE - 2013 - PRF - Policial Rodoviário Federal) - No que se refere aos princípios fundamentais da Constituição Federal de 1988 (CF) e à aplicabilidade das normas constitucionais, julgue os itens a seguir. O mecanismo denominado sistema de freios e contrapesos é aplicado, por exemplo, no caso da nomeação dos ministros do Supremo Tribunal Federal (STF), atribuição do presidente da República e dependente da aprovação pelo Senado Federal.",
        options: ["Certo", "Errado"],
        answer: "Certo",
    },
    // Nova questão
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
const exams = ["IBGE", "Banco do Brasil", "Pref. Guarulhos/SP", "PRF"]; // Lista de órgãos (bancas)
let currentThemeIndex = 0;

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const themeSelect = document.getElementById("theme");
const examSelect = document.getElementById("exam"); // Novo select para banca
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
    const selectedExam = examSelect.value; // Obtém a banca selecionada

    selectedQuestions = questions
        .filter(question => question.theme === selectedTheme)
        .filter(question => selectedExam === "all" || question.exam === selectedExam); // Filtra por banca, se aplicável

    if (selectedQuestions.length === 0) {
        alert("Não há questões disponíveis para este tema e banca.");
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
            examSelect.value = "all"; // Reseta a seleção da banca
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
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
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