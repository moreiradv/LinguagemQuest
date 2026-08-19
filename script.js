// ============================================================
// Linguagem Quest - Dia da Linguagem JOPS
// Edite o array questions abaixo para trocar perguntas, respostas
// e caminhos de músicas. Para músicas, use assets/audio/musicas/.
// ============================================================

const questions = [
  {
    id: 1,
    category: "Vanguardas Europeias",
    question: "As vanguardas europeias surgiram principalmente em qual contexto histórico?",
    options: [
      "Durante o Renascimento, com valorização da arte clássica",
      "No início do século XX, em meio a transformações sociais, tecnológicas e políticas",
      "Na Idade Média, com domínio da arte religiosa",
      "No período barroco, com foco na religiosidade"
    ],
    correctAnswer: "No início do século XX, em meio a transformações sociais, tecnológicas e políticas",
    explanation: "As vanguardas europeias surgiram no início do século XX, questionando os padrões tradicionais da arte."
  },
  {
    id: 2,
    category: "Vanguardas Europeias",
    question: "Qual era uma característica comum entre as vanguardas europeias?",
    options: [
      "A defesa da arte clássica e acadêmica",
      "A busca por inovação e ruptura com padrões tradicionais",
      "A cópia fiel da realidade",
      "A valorização exclusiva da arte religiosa"
    ],
    correctAnswer: "A busca por inovação e ruptura com padrões tradicionais",
    explanation: "As vanguardas buscavam romper com modelos antigos e experimentar novas formas de expressão."
  },
  {
    id: 3,
    category: "Expressionismo",
    question: "O Expressionismo valorizava principalmente:",
    options: [
      "A representação objetiva e equilibrada da realidade",
      "A expressão de emoções, angústias e sentimentos intensos",
      "A exaltação das máquinas e da velocidade",
      "A escrita automática baseada em sonhos"
    ],
    correctAnswer: "A expressão de emoções, angústias e sentimentos intensos",
    explanation: "O Expressionismo destacava a subjetividade, a dor, o medo, a angústia e a intensidade emocional."
  },
  {
    id: 4,
    category: "Expressionismo",
    question: "Qual alternativa combina melhor com uma obra expressionista?",
    options: [
      "Cores suaves, harmonia clássica e equilíbrio perfeito",
      "Distorção das formas, cores fortes e clima de tensão",
      "Formas geométricas organizadas de modo racional",
      "Uso de objetos prontos como crítica à arte"
    ],
    correctAnswer: "Distorção das formas, cores fortes e clima de tensão",
    explanation: "O Expressionismo usava distorções e cores intensas para revelar estados emocionais."
  },
  {
    id: 5,
    category: "Expressionismo",
    question: "Na literatura, uma atitude expressionista seria:",
    options: [
      "Mostrar apenas a beleza idealizada do mundo",
      "Representar conflitos internos, medo, solidão e sofrimento humano",
      "Defender a velocidade e a máquina como símbolos máximos",
      "Organizar o texto como uma colagem sem sentido"
    ],
    correctAnswer: "Representar conflitos internos, medo, solidão e sofrimento humano",
    explanation: "A literatura expressionista costuma abordar crises interiores e angústias da vida moderna."
  },
  {
    id: 6,
    category: "Expressionismo",
    question: "A obra “O Grito”, de Edvard Munch, costuma ser associada a qual movimento?",
    options: ["Cubismo", "Expressionismo", "Futurismo", "Dadaísmo"],
    correctAnswer: "Expressionismo",
    explanation: "A imagem expressa angústia, medo e tensão psicológica, marcas ligadas ao Expressionismo."
  },
  {
    id: 7,
    category: "Expressionismo",
    question: "O Expressionismo se diferencia do Realismo porque:",
    options: [
      "Prefere copiar a realidade de forma fotográfica",
      "Busca mostrar a realidade filtrada pela emoção do artista",
      "Evita qualquer deformação da imagem",
      "Valoriza apenas temas religiosos"
    ],
    correctAnswer: "Busca mostrar a realidade filtrada pela emoção do artista",
    explanation: "O Expressionismo não busca retratar a realidade como ela é, mas como ela é sentida."
  },
  {
    id: 8,
    category: "Cubismo",
    question: "O Cubismo ficou conhecido por:",
    options: [
      "Representar figuras com fragmentação e geometrização",
      "Valorizar sonhos e imagens do inconsciente",
      "Defender o absurdo e a antiarte",
      "Exaltar a guerra e a velocidade"
    ],
    correctAnswer: "Representar figuras com fragmentação e geometrização",
    explanation: "O Cubismo fragmentava imagens e objetos em formas geométricas, mostrando diferentes pontos de vista."
  },
  {
    id: 9,
    category: "Cubismo",
    question: "Quais artistas são frequentemente associados ao Cubismo?",
    options: [
      "Pablo Picasso e Georges Braque",
      "Salvador Dalí e André Breton",
      "Marinetti e Boccioni",
      "Tristan Tzara e Marcel Duchamp"
    ],
    correctAnswer: "Pablo Picasso e Georges Braque",
    explanation: "Picasso e Braque são nomes centrais na formação do Cubismo."
  },
  {
    id: 10,
    category: "Cubismo",
    question: "Uma característica cubista na pintura seria:",
    options: [
      "Uso de perspectiva tradicional e profundidade realista",
      "Fragmentação de formas e múltiplos ângulos de visão",
      "Cenas de sonho com lógica impossível",
      "Rejeição total da arte por meio do nonsense"
    ],
    correctAnswer: "Fragmentação de formas e múltiplos ângulos de visão",
    explanation: "O Cubismo propunha representar o objeto por vários ângulos ao mesmo tempo."
  },
  {
    id: 11,
    category: "Cubismo",
    question: "Na literatura, o Cubismo influenciou textos que valorizavam:",
    options: [
      "Linearidade perfeita e descrição objetiva",
      "Fragmentação, simultaneidade e montagem de ideias",
      "Sentimentalismo romântico",
      "Estrutura medieval e religiosa"
    ],
    correctAnswer: "Fragmentação, simultaneidade e montagem de ideias",
    explanation: "A influência cubista aparece na quebra da linearidade e na sobreposição de imagens e ideias."
  },
  {
    id: 12,
    category: "Cubismo",
    question: "Qual alternativa melhor representa o espírito cubista?",
    options: [
      "Mostrar apenas um ponto de vista fixo",
      "Mostrar a realidade de maneira fragmentada e múltipla",
      "Reproduzir fielmente a natureza",
      "Criar imagens apenas a partir de sonhos"
    ],
    correctAnswer: "Mostrar a realidade de maneira fragmentada e múltipla",
    explanation: "O Cubismo rompe com a perspectiva única e propõe múltiplos pontos de vista."
  },
  {
    id: 13,
    category: "Cubismo",
    question: "O Cubismo rompeu principalmente com:",
    options: [
      "A ideia tradicional de perspectiva e representação realista",
      "A existência de cores nas pinturas",
      "O uso de qualquer forma geométrica",
      "A presença de figuras humanas na arte"
    ],
    correctAnswer: "A ideia tradicional de perspectiva e representação realista",
    explanation: "O Cubismo questionou a perspectiva clássica e a representação naturalista."
  },
  {
    id: 14,
    category: "Futurismo",
    question: "O Futurismo valorizava principalmente:",
    options: [
      "A tradição clássica e o passado histórico",
      "A velocidade, a máquina, a tecnologia e o movimento",
      "O sonho, o inconsciente e o acaso",
      "A religiosidade medieval"
    ],
    correctAnswer: "A velocidade, a máquina, a tecnologia e o movimento",
    explanation: "O Futurismo celebrava a modernidade, a energia urbana, as máquinas e a velocidade."
  },
  {
    id: 15,
    category: "Futurismo",
    question: "Qual elemento combina melhor com a estética futurista?",
    options: [
      "Um trem em alta velocidade",
      "Uma paisagem calma e bucólica",
      "Uma pintura religiosa medieval",
      "Uma cena parada e equilibrada"
    ],
    correctAnswer: "Um trem em alta velocidade",
    explanation: "O Futurismo se interessava pelo movimento, pela velocidade e pela vida moderna."
  },
  {
    id: 16,
    category: "Futurismo",
    question: "O Futurismo foi fortemente associado a qual país?",
    options: ["Itália", "Espanha", "Portugal", "Suíça"],
    correctAnswer: "Itália",
    explanation: "O Futurismo teve forte ligação com a Itália, especialmente com o manifesto de Marinetti."
  },
  {
    id: 17,
    category: "Futurismo",
    question: "Na linguagem, o Futurismo defendia muitas vezes:",
    options: [
      "Frases longas, tradicionais e acadêmicas",
      "Expressões rápidas, cortes, dinamismo e liberdade formal",
      "A repetição de modelos clássicos",
      "A ausência completa de relação com a modernidade"
    ],
    correctAnswer: "Expressões rápidas, cortes, dinamismo e liberdade formal",
    explanation: "A estética futurista buscava transmitir rapidez e energia também por meio da linguagem."
  },
  {
    id: 18,
    category: "Futurismo",
    question: "Qual ideia é mais próxima do Futurismo?",
    options: [
      "Amar o passado e preservar todas as tradições",
      "Celebrar a cidade moderna, os motores, o ruído e a velocidade",
      "Valorizar o sonho como fonte principal da arte",
      "Usar objetos prontos para negar a arte"
    ],
    correctAnswer: "Celebrar a cidade moderna, os motores, o ruído e a velocidade",
    explanation: "O Futurismo via a modernidade tecnológica como símbolo de renovação artística."
  },
  {
    id: 19,
    category: "Futurismo",
    question: "O Futurismo se opunha principalmente a:",
    options: [
      "Inovação, tecnologia e dinamismo",
      "Passadismo, tradição excessiva e arte acadêmica",
      "Movimento e energia",
      "Temas urbanos e industriais"
    ],
    correctAnswer: "Passadismo, tradição excessiva e arte acadêmica",
    explanation: "Os futuristas defendiam a ruptura com o passado e a exaltação do novo."
  },
  {
    id: 20,
    category: "Dadaísmo",
    question: "O Dadaísmo surgiu como reação principalmente:",
    options: [
      "À Primeira Guerra Mundial e aos valores que levaram ao conflito",
      "Ao excesso de religiosidade medieval",
      "Ao Renascimento italiano",
      "Ao Romantismo brasileiro"
    ],
    correctAnswer: "À Primeira Guerra Mundial e aos valores que levaram ao conflito",
    explanation: "O Dadaísmo reagiu ao absurdo da guerra e questionou os valores da sociedade."
  },
  {
    id: 21,
    category: "Dadaísmo",
    question: "Uma característica marcante do Dadaísmo é:",
    options: [
      "A busca por harmonia clássica",
      "O uso do absurdo, do acaso, da ironia e da antiarte",
      "A representação fiel da natureza",
      "A valorização exclusiva da razão"
    ],
    correctAnswer: "O uso do absurdo, do acaso, da ironia e da antiarte",
    explanation: "O Dadaísmo usava nonsense, provocação e acaso para criticar a arte tradicional."
  },
  {
    id: 22,
    category: "Dadaísmo",
    question: "O conceito de “antiarte” está muito ligado ao:",
    options: ["Dadaísmo", "Classicismo", "Arcadismo", "Parnasianismo"],
    correctAnswer: "Dadaísmo",
    explanation: "O Dadaísmo questionava o que poderia ser considerado arte."
  },
  {
    id: 23,
    category: "Dadaísmo",
    question: "Qual artista ficou famoso pelo uso de ready-made, como no caso de “Fonte”?",
    options: ["Marcel Duchamp", "Pablo Picasso", "Salvador Dalí", "Edvard Munch"],
    correctAnswer: "Marcel Duchamp",
    explanation: "Duchamp ficou conhecido por transformar objetos comuns em obras de arte por meio do ready-made."
  },
  {
    id: 24,
    category: "Dadaísmo",
    question: "Um poema dadaísta poderia ser construído:",
    options: [
      "Com regras fixas e rimas perfeitas",
      "Com palavras recortadas ao acaso e reorganizadas sem lógica tradicional",
      "Com descrição objetiva de uma paisagem",
      "Com linguagem religiosa e moralizante"
    ],
    correctAnswer: "Com palavras recortadas ao acaso e reorganizadas sem lógica tradicional",
    explanation: "O Dadaísmo valorizava o acaso, o nonsense e a quebra da lógica convencional."
  },
  {
    id: 25,
    category: "Dadaísmo",
    question: "O Dadaísmo pretendia provocar o público porque:",
    options: [
      "Queria confirmar todas as regras da arte clássica",
      "Desejava questionar a sociedade, a guerra e o próprio conceito de arte",
      "Buscava apenas criar pinturas realistas",
      "Defendia a arte religiosa medieval"
    ],
    correctAnswer: "Desejava questionar a sociedade, a guerra e o próprio conceito de arte",
    explanation: "A provocação dadaísta fazia parte de sua crítica cultural e artística."
  },
  {
    id: 26,
    category: "Surrealismo",
    question: "O Surrealismo valorizava principalmente:",
    options: [
      "A lógica racional e científica em todas as imagens",
      "O sonho, o inconsciente, a imaginação e o irracional",
      "A cópia fiel da realidade",
      "A exaltação exclusiva das máquinas"
    ],
    correctAnswer: "O sonho, o inconsciente, a imaginação e o irracional",
    explanation: "O Surrealismo explorava imagens de sonho, inconsciente e associações inesperadas."
  },
  {
    id: 27,
    category: "Surrealismo",
    question: "Qual artista é muito associado ao Surrealismo?",
    options: ["Salvador Dalí", "Georges Braque", "Filippo Marinetti", "Marcel Duchamp"],
    correctAnswer: "Salvador Dalí",
    explanation: "Dalí é um dos nomes mais conhecidos do Surrealismo, com imagens oníricas e inesperadas."
  },
  {
    id: 28,
    category: "Surrealismo",
    question: "Uma imagem surrealista costuma apresentar:",
    options: [
      "Cenas comuns representadas de forma totalmente realista",
      "Combinações impossíveis, sonhos e elementos ilógicos",
      "Apenas formas geométricas simples",
      "Somente máquinas e velocidade"
    ],
    correctAnswer: "Combinações impossíveis, sonhos e elementos ilógicos",
    explanation: "O Surrealismo mistura elementos reais de maneira inesperada, criando efeito de sonho."
  },
  {
    id: 29,
    category: "Surrealismo",
    question: "A escrita automática foi uma prática ligada ao:",
    options: ["Surrealismo", "Naturalismo", "Parnasianismo", "Classicismo"],
    correctAnswer: "Surrealismo",
    explanation: "A escrita automática buscava liberar conteúdos do inconsciente sem controle racional rígido."
  },
  {
    id: 30,
    category: "Surrealismo",
    question: "Qual frase combina melhor com o Surrealismo?",
    options: [
      "A arte deve obedecer fielmente à razão",
      "A arte pode revelar sonhos, desejos e imagens do inconsciente",
      "A arte deve copiar a natureza com exatidão",
      "A arte deve rejeitar qualquer imaginação"
    ],
    correctAnswer: "A arte pode revelar sonhos, desejos e imagens do inconsciente",
    explanation: "O Surrealismo procura ultrapassar a lógica racional e explorar o inconsciente."
  },
  {
    id: 31,
    category: "Surrealismo",
    question: "O Surrealismo foi influenciado por ideias relacionadas:",
    options: [
      "À psicanálise e ao inconsciente",
      "Ao teocentrismo medieval",
      "Ao equilíbrio clássico absoluto",
      "À arte acadêmica tradicional"
    ],
    correctAnswer: "À psicanálise e ao inconsciente",
    explanation: "O interesse pelo inconsciente aproximou o Surrealismo de discussões da psicanálise."
  },
  {
    id: 32,
    category: "Fauvismo",
    question: "O Fauvismo ficou conhecido principalmente pelo uso de:",
    options: [
      "Cores intensas, livres e expressivas",
      "Apenas preto e branco",
      "Objetos prontos industrializados",
      "Imagens de sonho e inconsciente"
    ],
    correctAnswer: "Cores intensas, livres e expressivas",
    explanation: "O Fauvismo valorizava cores fortes e não necessariamente realistas."
  },
  {
    id: 33,
    category: "Fauvismo",
    question: "O termo “fauves”, ligado ao Fauvismo, significa aproximadamente:",
    options: ["Feras", "Máquinas", "Sonhos", "Geometrias"],
    correctAnswer: "Feras",
    explanation: "O termo foi usado por causa da intensidade das cores e da ousadia visual dos artistas."
  },
  {
    id: 34,
    category: "Fauvismo",
    question: "Qual característica diferencia o Fauvismo de uma pintura realista tradicional?",
    options: [
      "O uso livre e emocional das cores",
      "A obrigação de copiar as cores reais da natureza",
      "A ausência total de cor",
      "O uso de objetos prontos"
    ],
    correctAnswer: "O uso livre e emocional das cores",
    explanation: "No Fauvismo, a cor pode expressar sensação e emoção, sem compromisso com o realismo."
  },
  {
    id: 35,
    category: "Fauvismo",
    question: "Henri Matisse é geralmente associado a qual movimento?",
    options: ["Fauvismo", "Dadaísmo", "Futurismo", "Surrealismo"],
    correctAnswer: "Fauvismo",
    explanation: "Matisse é um dos principais nomes ligados ao Fauvismo."
  },
  {
    id: 36,
    category: "Comparação entre Vanguardas",
    question: "Qual alternativa relaciona corretamente movimento e característica?",
    options: [
      "Cubismo — sonho e inconsciente",
      "Futurismo — velocidade e tecnologia",
      "Dadaísmo — harmonia clássica",
      "Surrealismo — cópia fiel da realidade"
    ],
    correctAnswer: "Futurismo — velocidade e tecnologia",
    explanation: "O Futurismo valorizava velocidade, máquinas, tecnologia e dinamismo."
  },
  {
    id: 37,
    category: "Comparação entre Vanguardas",
    question: "Qual movimento está mais ligado à fragmentação geométrica da imagem?",
    options: ["Cubismo", "Surrealismo", "Dadaísmo", "Fauvismo"],
    correctAnswer: "Cubismo",
    explanation: "A geometrização e a fragmentação são marcas fundamentais do Cubismo."
  },
  {
    id: 38,
    category: "Comparação entre Vanguardas",
    question: "Qual movimento está mais ligado ao absurdo, ao acaso e à provocação?",
    options: ["Dadaísmo", "Futurismo", "Expressionismo", "Cubismo"],
    correctAnswer: "Dadaísmo",
    explanation: "O Dadaísmo usava o absurdo e o acaso para questionar a arte e a sociedade."
  },
  {
    id: 39,
    category: "Comparação entre Vanguardas",
    question: "Qual movimento está mais ligado ao sonho e ao inconsciente?",
    options: ["Surrealismo", "Fauvismo", "Cubismo", "Futurismo"],
    correctAnswer: "Surrealismo",
    explanation: "O Surrealismo explora o mundo dos sonhos, da imaginação e do inconsciente."
  },
  {
    id: 40,
    category: "Comparação entre Vanguardas",
    question: "Qual movimento usa a deformação da realidade para expressar sentimentos intensos?",
    options: ["Expressionismo", "Cubismo", "Dadaísmo", "Futurismo"],
    correctAnswer: "Expressionismo",
    explanation: "O Expressionismo deforma a realidade para representar emoções profundas."
  },
  {
    id: 41,
    category: "Arte e Linguagem",
    question: "As vanguardas europeias influenciaram a literatura porque:",
    options: [
      "Estimularam novas formas de escrita, ruptura com padrões e experimentação",
      "Proibiram qualquer inovação textual",
      "Defenderam apenas sonetos clássicos",
      "Eliminaram a relação entre arte e sociedade"
    ],
    correctAnswer: "Estimularam novas formas de escrita, ruptura com padrões e experimentação",
    explanation: "As vanguardas também influenciaram a linguagem literária, incentivando experimentações formais."
  },
  {
    id: 42,
    category: "Arte e Linguagem",
    question: "A ideia de “ruptura” nas vanguardas significa:",
    options: [
      "Manter as regras antigas sem alteração",
      "Quebrar padrões tradicionais e propor novas formas de expressão",
      "Copiar exatamente a arte do passado",
      "Evitar qualquer tipo de inovação"
    ],
    correctAnswer: "Quebrar padrões tradicionais e propor novas formas de expressão",
    explanation: "As vanguardas são chamadas assim porque procuravam estar à frente, rompendo com modelos tradicionais."
  },
  {
    id: 43,
    category: "Arte e Linguagem",
    question: "Qual alternativa apresenta apenas movimentos de vanguarda europeia?",
    options: [
      "Cubismo, Futurismo, Dadaísmo e Surrealismo",
      "Barroco, Arcadismo, Realismo e Naturalismo",
      "Trovadorismo, Humanismo, Classicismo e Barroco",
      "Romantismo, Parnasianismo, Simbolismo e Realismo"
    ],
    correctAnswer: "Cubismo, Futurismo, Dadaísmo e Surrealismo",
    explanation: "Cubismo, Futurismo, Dadaísmo e Surrealismo fazem parte das vanguardas europeias."
  },
  {
    id: 44,
    category: "Arte e Linguagem",
    question: "No Brasil, as vanguardas europeias influenciaram principalmente:",
    options: [
      "O Modernismo brasileiro",
      "O Trovadorismo medieval",
      "A literatura de catequese",
      "O Arcadismo colonial"
    ],
    correctAnswer: "O Modernismo brasileiro",
    explanation: "As vanguardas europeias influenciaram a busca modernista brasileira por inovação e ruptura."
  },
  {
    id: 45,
    category: "Arte e Linguagem",
    question: "A Semana de Arte Moderna de 1922 dialoga com as vanguardas porque:",
    options: [
      "Defendeu novas linguagens artísticas e ruptura com padrões tradicionais",
      "Rejeitou toda forma de inovação artística",
      "Defendeu apenas a imitação da arte europeia clássica",
      "Impossibilitou mudanças na arte brasileira"
    ],
    correctAnswer: "Defendeu novas linguagens artísticas e ruptura com padrões tradicionais",
    explanation: "O Modernismo brasileiro se aproximou das vanguardas ao propor renovação estética."
  },
  {
    id: 46,
    category: "Música e Vanguardas",
    question: "Ouça o áudio. Se a música apresentar sons de máquinas, batidas aceleradas e sensação de movimento urbano, qual vanguarda ela mais representa?",
    audio: "assets/audio/musicas/futurismo_maquinas.mp3",
    options: ["Futurismo", "Surrealismo", "Dadaísmo", "Fauvismo"],
    correctAnswer: "Futurismo",
    explanation: "Sons de máquinas, velocidade e movimento urbano combinam com o espírito futurista."
  },
  {
    id: 47,
    category: "Música e Vanguardas",
    question: "Ouça o áudio. Se a música tiver sons desconexos, ruídos aleatórios, falas sem lógica e sensação de absurdo, qual movimento ela representa melhor?",
    audio: "assets/audio/musicas/dadaismo_absurdo.mp3",
    options: ["Dadaísmo", "Cubismo", "Expressionismo", "Fauvismo"],
    correctAnswer: "Dadaísmo",
    explanation: "O Dadaísmo explorava o absurdo, o acaso, a provocação e a quebra da lógica tradicional."
  },
  {
    id: 48,
    category: "Música e Vanguardas",
    question: "Ouça o áudio. Se a música criar uma atmosfera de sonho, mistério e imagens ilógicas, qual vanguarda ela mais representa?",
    audio: "assets/audio/musicas/surrealismo_sonho.mp3",
    options: ["Surrealismo", "Futurismo", "Cubismo", "Realismo"],
    correctAnswer: "Surrealismo",
    explanation: "O Surrealismo valoriza o sonho, o inconsciente e combinações inesperadas."
  },
  {
    id: 49,
    category: "Música e Vanguardas",
    question: "Ouça o áudio. Se a música causar tensão, angústia e emoção intensa, qual movimento artístico ela pode representar?",
    audio: "assets/audio/musicas/expressionismo_angustia.mp3",
    options: ["Expressionismo", "Fauvismo", "Cubismo", "Classicismo"],
    correctAnswer: "Expressionismo",
    explanation: "O Expressionismo busca expressar sentimentos fortes, como medo, dor, angústia e tensão."
  },
  {
    id: 50,
    category: "Música e Vanguardas",
    question: "Ouça o áudio. Se a música parecer fragmentada, com partes quebradas, sobrepostas e mudanças inesperadas de ritmo, qual vanguarda ela pode lembrar?",
    audio: "assets/audio/musicas/cubismo_fragmentado.mp3",
    options: ["Cubismo", "Surrealismo", "Arcadismo", "Barroco"],
    correctAnswer: "Cubismo",
    explanation: "A ideia de fragmentação e sobreposição pode ser relacionada ao Cubismo."
  },
  {
    id: 51,
    category: "Fauvismo",
    question: "Qual é a principal característica do Fauvismo?",
    options: ["Uso de cores fortes e vibrantes", "Pinturas religiosas", "Representação fiel da realidade", "Temas medievais"],
    correctAnswer: "Uso de cores fortes e vibrantes",
    explanation: "O Fauvismo se destacou pelo uso livre, intenso e expressivo das cores."
  },
  {
    id: 52,
    category: "Fauvismo",
    question: "Quem foi um dos principais artistas do Fauvismo?",
    options: ["Pablo Picasso", "Henri Matisse", "Salvador Dalí", "Andy Warhol"],
    correctAnswer: "Henri Matisse",
    explanation: "Henri Matisse é um dos nomes mais importantes associados ao Fauvismo."
  },
  {
    id: 53,
    category: "Fauvismo",
    question: "O termo \"Fauvismo\" significa:",
    options: ["Sonho", "Geometria", "Feras", "Movimento"],
    correctAnswer: "Feras",
    explanation: "A palavra vem de \"fauves\", termo usado para se referir à ousadia das cores dos artistas."
  },
  {
    id: 54,
    category: "Fauvismo",
    question: "O Fauvismo surgiu em qual país?",
    options: ["Itália", "Espanha", "França", "Alemanha"],
    correctAnswer: "França",
    explanation: "O Fauvismo surgiu na França, no início do século XX."
  },
  {
    id: 55,
    category: "Fauvismo",
    question: "Os artistas fauvistas utilizavam as cores para:",
    options: ["Reproduzir exatamente a natureza", "Expressar emoções", "Criar ilusões de ótica", "Fazer propaganda"],
    correctAnswer: "Expressar emoções",
    explanation: "Para os fauvistas, a cor servia para expressar sensações e emoções, não apenas copiar a realidade."
  },
  {
    id: 56,
    category: "Fauvismo",
    question: "Qual destas características pertence ao Fauvismo?",
    options: ["Cores puras e intensas", "Preto e branco predominante", "Formas extremamente realistas", "Temas tecnológicos"],
    correctAnswer: "Cores puras e intensas",
    explanation: "O uso de cores puras, fortes e intensas é uma marca do Fauvismo."
  },
  {
    id: 57,
    category: "Fauvismo",
    question: "O Fauvismo é considerado uma:",
    options: ["Arte medieval", "Vanguarda europeia", "Arte barroca", "Arte clássica"],
    correctAnswer: "Vanguarda europeia",
    explanation: "O Fauvismo faz parte das vanguardas europeias por romper com padrões artísticos tradicionais."
  },
  {
    id: 58,
    category: "Op Art",
    question: "O principal objetivo da Op Art é criar:",
    options: ["Paisagens naturais", "Ilusões de ótica", "Retratos históricos", "Esculturas religiosas"],
    correctAnswer: "Ilusões de ótica",
    explanation: "A Op Art explora efeitos visuais que criam a sensação de movimento ou instabilidade."
  },
  {
    id: 59,
    category: "Op Art",
    question: "O nome Op Art significa:",
    options: ["Open Art", "Optical Art", "Original Art", "Opera Art"],
    correctAnswer: "Optical Art",
    explanation: "Op Art é a abreviação de Optical Art, ou arte óptica."
  },
  {
    id: 60,
    category: "Op Art",
    question: "Qual elemento é muito usado na Op Art?",
    options: ["Geometria repetitiva", "Temas religiosos", "Natureza morta", "Mitologia grega"],
    correctAnswer: "Geometria repetitiva",
    explanation: "A repetição de formas geométricas ajuda a criar os efeitos ópticos da Op Art."
  },
  {
    id: 61,
    category: "Op Art",
    question: "A Op Art procura causar no observador a sensação de:",
    options: ["Movimento", "Tranquilidade absoluta", "Medo", "Sonolência"],
    correctAnswer: "Movimento",
    explanation: "Muitas obras de Op Art parecem vibrar, girar ou se mover diante dos olhos."
  },
  {
    id: 62,
    category: "Op Art",
    question: "Quem é considerado um dos principais artistas da Op Art?",
    options: ["Victor Vasarely", "Claude Monet", "Tarsila do Amaral", "Van Gogh"],
    correctAnswer: "Victor Vasarely",
    explanation: "Victor Vasarely é um dos artistas mais conhecidos da Op Art."
  },
  {
    id: 63,
    category: "Op Art",
    question: "A Op Art utiliza muito o contraste entre:",
    options: ["Luz e sombra", "Cores neutras apenas", "Preto e branco", "Azul e verde apenas"],
    correctAnswer: "Preto e branco",
    explanation: "O contraste entre preto e branco é muito usado para criar ilusões ópticas."
  },
  {
    id: 64,
    category: "Op Art",
    question: "As obras da Op Art normalmente exploram:",
    options: ["Perspectiva tradicional", "Enganos visuais", "Temas históricos", "Literatura clássica"],
    correctAnswer: "Enganos visuais",
    explanation: "A Op Art trabalha com efeitos que enganam a percepção visual do observador."
  },
  {
    id: 65,
    category: "Pop Art",
    question: "A Pop Art buscava inspiração principalmente em:",
    options: ["Cultura popular e mídia", "Arte medieval", "Religião", "Natureza selvagem"],
    correctAnswer: "Cultura popular e mídia",
    explanation: "A Pop Art dialogava com propagandas, quadrinhos, televisão, celebridades e objetos de consumo."
  },
  {
    id: 66,
    category: "Pop Art",
    question: "Quem foi um dos maiores representantes da Pop Art?",
    options: ["Henri Matisse", "Andy Warhol", "Edvard Munch", "Kandinsky"],
    correctAnswer: "Andy Warhol",
    explanation: "Andy Warhol é um dos nomes mais conhecidos da Pop Art."
  },
  {
    id: 67,
    category: "Pop Art",
    question: "Qual destes elementos aparece frequentemente na Pop Art?",
    options: ["Produtos de consumo", "Castelos medievais", "Templos gregos", "Manuscritos antigos"],
    correctAnswer: "Produtos de consumo",
    explanation: "Produtos industrializados e imagens da cultura de consumo aparecem com frequência na Pop Art."
  },
  {
    id: 68,
    category: "Pop Art",
    question: "A Pop Art surgiu principalmente como crítica à:",
    options: ["Cultura de massa e consumo", "Agricultura", "Filosofia antiga", "Matemática"],
    correctAnswer: "Cultura de massa e consumo",
    explanation: "A Pop Art também questionava a sociedade de consumo e a circulação de imagens pela mídia."
  },
  {
    id: 69,
    category: "Pop Art",
    question: "Qual obra é uma das mais famosas da Pop Art?",
    options: ["O Grito", "Mona Lisa", "Marilyn Monroe de Andy Warhol", "Guernica"],
    correctAnswer: "Marilyn Monroe de Andy Warhol",
    explanation: "As imagens de Marilyn Monroe feitas por Andy Warhol são ícones da Pop Art."
  },
  {
    id: 70,
    category: "Pop Art",
    question: "A Pop Art utiliza imagens retiradas de:",
    options: ["Revistas, propagandas e televisão", "Manuscritos medievais", "Pinturas rupestres", "Mapas antigos"],
    correctAnswer: "Revistas, propagandas e televisão",
    explanation: "A Pop Art apropria-se de imagens da mídia, da publicidade e da cultura popular."
  }
];

const screens = document.querySelectorAll(".screen");
const quizScreen = document.getElementById("quiz-screen");
const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");
const hudPlayer = document.getElementById("hud-player");
const scoreDisplay = document.getElementById("score-display");
const percentageDisplay = document.getElementById("percentage-display");
const progressBar = document.getElementById("progress-bar");
const questionCounter = document.getElementById("question-counter");
const questionCategory = document.getElementById("question-category");
const questionTimer = document.getElementById("question-timer");
const questionText = document.getElementById("question-text");
const questionPanel = document.querySelector(".question-panel");
const audioControls = document.getElementById("audio-controls");
const audioStatus = document.getElementById("audio-status");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");
const nextButton = document.getElementById("next-button");
const continueButton = document.getElementById("continue-button");
const menuMusicButton = document.getElementById("menu-music-button");
const menuMusicElement = document.getElementById("menu-music");
const resultPanel = document.querySelector(".result-panel");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const rankingList = document.getElementById("ranking-list");
const confettiLayer = document.getElementById("confetti-layer");
const introDuration = 32500;
const QUESTIONS_PER_GAME = 7;
const MUSIC_QUESTIONS_PER_GAME = 2;
const NORMAL_QUESTIONS_PER_GAME = QUESTIONS_PER_GAME - MUSIC_QUESTIONS_PER_GAME;
const NORMAL_QUESTION_TIME = 30;

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let currentAudio = null;
let currentQuestionMusic = null;
let menuMusic = null;
let menuMusicShouldPlay = true;
let hasAnswered = false;
let gameQuestions = [];
let introTimer = null;
let questionTimerId = null;
let questionTimeoutAdvanceId = null;
let timeLeft = NORMAL_QUESTION_TIME;

const menuMusicPath = "assets/audio/musicas/menu.mp3";
const questionMusicPath = "assets/sounds/musica_questoes.mp3";
const rankingStorageKey = "linguagemQuestRanking";
const rankingResetStorageKey = "linguagemQuestRankingResetVersion";
const rankingResetVersion = "expo-2026-06-02";

const soundPaths = {
  correct: "assets/sounds/correto.mp3",
  wrong: "assets/sounds/erro.mp3",
  click: "assets/sounds/clique.mp3",
  start: "assets/sounds/começar.mp3",
  scrollMenu: "assets/sounds/scrollmenu.mp3",
  question: "assets/sounds/questão.wav",
  final: "assets/sounds/final.mp3"
};

document.addEventListener("DOMContentLoaded", () => {
  resetRankingOnceForExpo();
  document.addEventListener("click", playButtonClickSound, true);
  bindEvents();
  document.addEventListener("click", tryStartMenuMusicAfterInteraction);
  document.addEventListener("keydown", tryStartMenuMusicAfterInteraction);
  loadRanking();
});

function bindEvents() {
  continueButton.addEventListener("click", startIntroExperience);
  document.querySelectorAll("#menu-screen button").forEach((button) => {
    button.addEventListener("mouseenter", () => playScrollMenuHoverSound(button));
  });

  document.getElementById("start-button").addEventListener("click", () => {
    menuMusicShouldPlay = false;
    stopMenuMusic();
    playerForm.classList.toggle("hidden");
    playerNameInput.focus();
  });

  document.getElementById("howto-button").addEventListener("click", () => {
    showScreen("howto-screen");
  });

  document.getElementById("teacher-button").addEventListener("click", () => {
    showScreen("teacher-screen");
  });

  menuMusicButton.addEventListener("click", () => {
    toggleMenuMusic();
  });

  document.querySelectorAll(".back-menu-button").forEach((button) => {
    button.addEventListener("click", () => {
      resetGame();
      showScreen("menu-screen");
    });
  });

  playerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startGame();
  });

  document.getElementById("play-audio-button").addEventListener("click", playQuestionAudio);
  document.getElementById("pause-audio-button").addEventListener("click", pauseQuestionAudio);
  document.getElementById("restart-audio-button").addEventListener("click", restartQuestionAudio);
  nextButton.addEventListener("click", nextQuestion);
  document.getElementById("restart-site-button").addEventListener("click", restartSiteFromIntro);
  document.getElementById("scoreboard-restart-button").addEventListener("click", restartSiteFromIntro);
  document.getElementById("clear-scoreboard-button").addEventListener("click", clearRanking);
  document.getElementById("show-scoreboard-button").addEventListener("click", () => {
    loadRanking();
    showScreen("scoreboard-screen");
  });
}

function showScreen(screenId) {
  stopCurrentAudio();
  if (screenId !== "intro-screen") {
    clearIntroTimer();
  }

  screens.forEach((screen) => {
    screen.classList.remove("screen-enter");
    screen.classList.toggle("active", screen.id === screenId);
  });

  const activeScreen = document.getElementById(screenId);
  if (activeScreen) {
    void activeScreen.offsetWidth;
    activeScreen.classList.add("screen-enter");
  }

  if (screenId === "intro-screen" || screenId === "menu-screen") {
    menuMusicShouldPlay = true;
    startMenuMusic();
  } else if (screenId !== "start-screen") {
    stopMenuMusic();
  }
}

function startIntroExperience() {
  menuMusicShouldPlay = true;
  startMenuMusic();
  restartIntroAnimations();
  showScreen("intro-screen");
  scheduleIntroToMenu();
}

function scheduleIntroToMenu() {
  clearIntroTimer();
  introTimer = setTimeout(() => showScreen("menu-screen"), introDuration);
}

function clearIntroTimer() {
  if (!introTimer) return;
  clearTimeout(introTimer);
  introTimer = null;
}

function restartSiteFromIntro() {
  window.setTimeout(() => window.location.reload(), 140);
}

function restartIntroAnimations() {
  document.querySelectorAll(".intro-sequence .game-title, .intro-line, .github-intro").forEach((element) => {
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomQuestionsForGame() {
  const musicQuestions = questions.filter((question) => question.audio);
  const normalQuestions = questions.filter((question) => !question.audio);

  if (musicQuestions.length < MUSIC_QUESTIONS_PER_GAME) {
    console.error(`É necessário ter pelo menos ${MUSIC_QUESTIONS_PER_GAME} questões com música.`);
    return shuffleArray(normalQuestions).slice(0, QUESTIONS_PER_GAME);
  }

  if (normalQuestions.length < NORMAL_QUESTIONS_PER_GAME) {
    console.error(`É necessário ter pelo menos ${NORMAL_QUESTIONS_PER_GAME} questões sem música.`);
    return shuffleArray(questions).slice(0, QUESTIONS_PER_GAME);
  }

  const selectedMusicQuestions = shuffleArray(musicQuestions).slice(0, MUSIC_QUESTIONS_PER_GAME);
  const selectedNormalQuestions = shuffleArray(normalQuestions).slice(0, NORMAL_QUESTIONS_PER_GAME);
  const selectedQuestions = [...selectedMusicQuestions, ...selectedNormalQuestions];

  return shuffleArray(selectedQuestions);
}

function startGame() {
  playerName = playerNameInput.value.trim() || playerName || "Jogador";
  playOptionalSound("start");
  menuMusicShouldPlay = false;
  stopMenuMusic();
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  gameQuestions = getRandomQuestionsForGame();
  hudPlayer.textContent = playerName;
  resultPanel.classList.remove("victory");
  confettiLayer.innerHTML = "";
  showScreen("quiz-screen");
  loadQuestion();
}

function loadQuestion() {
  stopCurrentAudio();
  clearQuestionTimer();
  playOptionalSound("question");
  hasAnswered = false;
  questionPanel.classList.remove("question-pop");
  void questionPanel.offsetWidth;
  questionPanel.classList.add("question-pop");
  feedbackBox.className = "feedback-box hidden";
  optionsContainer.innerHTML = "";
  audioStatus.textContent = "";
  audioControls.classList.remove("playing-audio");

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const totalQuestions = gameQuestions.length;
  const questionNumber = currentQuestionIndex + 1;
  questionCounter.textContent = `Pergunta ${questionNumber}/${totalQuestions}`;
  questionCategory.textContent = currentQuestion.category;
  questionText.textContent = currentQuestion.question;

  updateHud();

  if (currentQuestion.audio) {
    audioControls.classList.remove("hidden");
  } else {
    audioControls.classList.add("hidden");
  }

  startQuestionTimer(currentQuestion);

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "pixel-button option-button";
    optionButton.textContent = option;
    optionButton.style.animationDelay = `${index * 60}ms`;
    optionButton.addEventListener("mouseenter", () => playScrollMenuHoverSound(optionButton));
    optionButton.addEventListener("click", () => selectAnswer(option, optionButton));
    optionsContainer.appendChild(optionButton);
  });
}

function startQuestionTimer(currentQuestion) {
  clearQuestionTimer();

  if (!questionTimer || currentQuestion.audio) {
    questionTimer?.classList.add("hidden");
    return;
  }

  timeLeft = NORMAL_QUESTION_TIME;
  questionTimer.classList.remove("hidden", "timer-warning", "timer-danger");
  updateQuestionTimerDisplay();
  startQuestionMusic();

  questionTimerId = window.setInterval(() => {
    timeLeft -= 1;
    updateQuestionTimerDisplay();

    if (timeLeft <= 0) {
      handleQuestionTimeout();
    }
  }, 1000);
}

function updateQuestionTimerDisplay() {
  if (!questionTimer) return;

  questionTimer.textContent = timeLeft > 0 ? `Tempo: ${timeLeft}s` : "Tempo esgotado";
  questionTimer.classList.toggle("timer-warning", timeLeft <= 10 && timeLeft > 5);
  questionTimer.classList.toggle("timer-danger", timeLeft <= 5);
}

function stopQuestionTimerInterval() {
  if (!questionTimerId) return;
  window.clearInterval(questionTimerId);
  questionTimerId = null;
}

function clearQuestionTimer() {
  stopQuestionTimerInterval();
  stopQuestionMusic();

  if (questionTimeoutAdvanceId) {
    window.clearTimeout(questionTimeoutAdvanceId);
    questionTimeoutAdvanceId = null;
  }

  if (!questionTimer) return;
  questionTimer.classList.add("hidden");
  questionTimer.classList.remove("timer-warning", "timer-danger");
  questionTimer.textContent = `Tempo: ${NORMAL_QUESTION_TIME}s`;
}

function startQuestionMusic() {
  stopQuestionMusic();

  currentQuestionMusic = new Audio(questionMusicPath);
  currentQuestionMusic.volume = 0.32;
  currentQuestionMusic.currentTime = 0;
  currentQuestionMusic.play().catch(() => {
    // Trilha opcional das questões: se o navegador bloquear ou o arquivo faltar, o quiz continua.
  });
}

function stopQuestionMusic() {
  if (!currentQuestionMusic) return;
  currentQuestionMusic.pause();
  currentQuestionMusic.currentTime = 0;
  currentQuestionMusic = null;
}

function handleQuestionTimeout() {
  if (hasAnswered) return;

  hasAnswered = true;
  stopQuestionTimerInterval();
  stopQuestionMusic();
  timeLeft = 0;
  updateQuestionTimerDisplay();

  [...optionsContainer.children].forEach((button) => {
    button.disabled = true;
  });

  updateHud();

  questionTimeoutAdvanceId = window.setTimeout(() => {
    questionTimeoutAdvanceId = null;
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= gameQuestions.length) {
      showResult();
      return;
    }

    loadQuestion();
  }, 900);
}

function playQuestionAudio() {
  const currentQuestion = gameQuestions[currentQuestionIndex];
  if (!currentQuestion || !currentQuestion.audio) return;

  stopCurrentAudio();
  currentAudio = new Audio(currentQuestion.audio);
  currentAudio.volume = 0.7;
  currentAudio.preload = "metadata";
  currentAudio.addEventListener("error", () => {
    audioStatus.textContent = "Áudio não encontrado. Coloque o arquivo na pasta assets/audio/musicas/.";
  });

  currentAudio.play()
    .then(() => {
      audioStatus.textContent = "Áudio tocando...";
      audioControls.classList.add("playing-audio");
    })
    .catch(() => {
      audioStatus.textContent = "Não foi possível tocar o áudio. Verifique se o arquivo existe.";
      audioControls.classList.remove("playing-audio");
    });
}

function pauseQuestionAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
  audioStatus.textContent = "Áudio pausado.";
  audioControls.classList.remove("playing-audio");
}

function restartQuestionAudio() {
  if (currentAudio) {
    currentAudio.currentTime = 0;
    currentAudio.play().catch(() => {
      audioStatus.textContent = "Não foi possível reiniciar o áudio.";
      audioControls.classList.remove("playing-audio");
    });
    audioStatus.textContent = "Áudio reiniciado.";
    audioControls.classList.add("playing-audio");
    return;
  }

  playQuestionAudio();
}

function stopCurrentAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
  audioControls.classList.remove("playing-audio");
}

function startMenuMusic() {
  if (!menuMusicShouldPlay) return;

  if (!menuMusic) {
    menuMusic = menuMusicElement || new Audio(menuMusicPath);
    menuMusic.loop = true;
    menuMusic.volume = 0.45;
    menuMusic.addEventListener("playing", () => updateMenuMusicButton(true));
    menuMusic.addEventListener("pause", () => updateMenuMusicButton(false));
    menuMusic.addEventListener("error", () => {
      menuMusic = null;
      updateMenuMusicButton(false);
    });
  }

  menuMusic.play().catch(() => {
    // Navegadores podem bloquear áudio antes do primeiro clique do usuário.
    updateMenuMusicButton(false);
  }).then(() => {
    if (menuMusic && !menuMusic.paused) {
      updateMenuMusicButton(true);
    }
  });
}

function stopMenuMusic() {
  if (!menuMusic) return;
  menuMusic.pause();
  menuMusic.currentTime = 0;
  updateMenuMusicButton(false);
}

function toggleMenuMusic() {
  if (menuMusic && !menuMusic.paused) {
    menuMusicShouldPlay = false;
    stopMenuMusic();
    return;
  }

  menuMusicShouldPlay = true;
  startMenuMusic();
}

function updateMenuMusicButton(isPlaying) {
  menuMusicButton.textContent = isPlaying ? "Pausar música" : "Tocar música";
  menuMusicButton.classList.toggle("playing", isPlaying);
}

function tryStartMenuMusicAfterInteraction(event) {
  const activeScreen = document.querySelector(".screen.active")?.id;
  const canPlayMenuMusic = activeScreen === "intro-screen" || activeScreen === "menu-screen";

  if (!menuMusicShouldPlay || !canPlayMenuMusic) return;
  if (event?.target === menuMusicButton) return;

  startMenuMusic();
}

function selectAnswer(selectedAnswer, selectedButton) {
  if (hasAnswered) return;
  hasAnswered = true;
  clearQuestionTimer();
  stopCurrentAudio();

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    score += 1;
    selectedButton.classList.add("correct");
    triggerBodyEffect("hit-flash");
    playOptionalSound("correct");
  } else {
    selectedButton.classList.add("wrong");
    quizScreen.classList.remove("shake");
    void quizScreen.offsetWidth;
    quizScreen.classList.add("shake");
    triggerBodyEffect("miss-flash");
    playOptionalSound("wrong");
  }

  [...optionsContainer.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
  });

  updateHud();
  showFeedback(isCorrect, currentQuestion.explanation);
}

function showFeedback(isCorrect, explanation) {
  feedbackTitle.textContent = isCorrect ? "Resposta correta!" : "Resposta errada!";
  feedbackExplanation.textContent = explanation;
  feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
  nextButton.textContent = currentQuestionIndex === gameQuestions.length - 1 ? "Ver resultado" : "Próxima pergunta";
}

function triggerBodyEffect(className) {
  document.body.classList.remove(className);
  void document.body.offsetWidth;
  document.body.classList.add(className);
  setTimeout(() => document.body.classList.remove(className), 520);
}

function nextQuestion() {
  clearQuestionTimer();
  stopCurrentAudio();
  currentQuestionIndex += 1;

  if (currentQuestionIndex >= gameQuestions.length) {
    showResult();
    return;
  }

  loadQuestion();
}

function showResult() {
  clearQuestionTimer();
  const totalQuestions = gameQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = "Continue praticando! A linguagem se desenvolve com leitura, escuta e interpretação.";

  if (percentage >= 41 && percentage <= 70) {
    message = "Bom desempenho! Você demonstrou bons conhecimentos sobre linguagem.";
  }

  if (percentage >= 71) {
    message = "Excelente! Você mandou muito bem no Dia da Linguagem JOPS!";
  }

  resultTitle.textContent = `${playerName || "Jogador"}, fim de jogo!`;
  resultScore.textContent = `${score}/${totalQuestions} acertos - ${percentage}%`;
  resultMessage.textContent = message;

  saveRanking(score, percentage, totalQuestions);
  loadRanking();
  showScreen("result-screen");
  playOptionalSound("final");

  if (percentage >= 71) {
    resultPanel.classList.add("victory");
    launchPixelConfetti();
  } else {
    resultPanel.classList.remove("victory");
    confettiLayer.innerHTML = "";
  }
}

function resetRankingOnceForExpo() {
  if (localStorage.getItem(rankingResetStorageKey) === rankingResetVersion) return;

  localStorage.removeItem(rankingStorageKey);
  localStorage.setItem(rankingResetStorageKey, rankingResetVersion);
}

function clearRanking() {
  localStorage.removeItem(rankingStorageKey);
  loadRanking();
}

function saveRanking(finalScore, percentage, totalQuestions = gameQuestions.length || QUESTIONS_PER_GAME) {
  const ranking = JSON.parse(localStorage.getItem(rankingStorageKey) || "[]");
  ranking.push({
    name: playerName || "Jogador",
    score: finalScore,
    totalQuestions,
    percentage,
    date: new Date().toLocaleDateString("pt-BR")
  });

  ranking.sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return b.score - a.score;
  });

  localStorage.setItem(rankingStorageKey, JSON.stringify(ranking.slice(0, 5)));
}

function loadRanking() {
  const ranking = JSON.parse(localStorage.getItem(rankingStorageKey) || "[]");
  rankingList.innerHTML = "";

  if (ranking.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "Nenhuma pontuação salva ainda.";
    rankingList.appendChild(emptyItem);
    return;
  }

  ranking.slice(0, 5).forEach((entry) => {
    const item = document.createElement("li");
    const total = entry.totalQuestions || Math.max(QUESTIONS_PER_GAME, entry.score);
    item.textContent = `${entry.name} - ${entry.score}/${total} (${entry.percentage}%) - ${entry.date}`;
    rankingList.appendChild(item);
  });
}

function resetGame() {
  stopCurrentAudio();
  clearQuestionTimer();
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  gameQuestions = [];
  feedbackBox.className = "feedback-box hidden";
  optionsContainer.innerHTML = "";
  progressBar.style.width = "0%";
  scoreDisplay.textContent = "0";
  percentageDisplay.textContent = "0%";
  quizScreen.classList.remove("shake");
  resultPanel.classList.remove("victory");
  confettiLayer.innerHTML = "";
}

function updateHud() {
  const totalQuestions = gameQuestions.length || QUESTIONS_PER_GAME;
  const answeredQuestions = hasAnswered ? currentQuestionIndex + 1 : currentQuestionIndex;
  const currentPercentage = answeredQuestions === 0 ? 0 : Math.round((score / answeredQuestions) * 100);
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  scoreDisplay.textContent = String(score);
  percentageDisplay.textContent = `${currentPercentage}%`;
  progressBar.style.width = `${progress}%`;
}

function playButtonClickSound(event) {
  const clickedButton = event.target instanceof Element ? event.target.closest("button") : null;
  if (!clickedButton || clickedButton.disabled || clickedButton.dataset.silent === "true") return;

  playOptionalSound("click");
}

function playScrollMenuHoverSound(button) {
  if (button.disabled) return;
  playOptionalSound("scrollMenu");
}

function playOptionalSound(soundName) {
  const path = soundPaths[soundName];
  if (!path) return;

  const sound = new Audio(path);
  sound.volume = 0.55;
  sound.play().catch(() => {
    // Sons de efeito são opcionais. Se o arquivo não existir, o jogo continua normal.
  });
}

function launchPixelConfetti() {
  confettiLayer.innerHTML = "";
  const colors = ["#29fff2", "#ff3fd1", "#ffe66d", "#65ff8f", "#936dff"];

  for (let index = 0; index < 46; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.color = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.8}s`;
    confettiLayer.appendChild(piece);
  }
}
