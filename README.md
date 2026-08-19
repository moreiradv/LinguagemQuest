# 🎓 Linguagem Quest - Dia da Linguagem JOPS

O **Linguagem Quest** é um jogo de perguntas e respostas (quiz) interativo e estilizado em *pixel art*, desenvolvido para o **Dia da Linguagem JOPS**. O objetivo do jogo é testar e reforçar os conhecimentos dos estudantes sobre as **Vanguardas Europeias** e os movimentos artísticos do século XX de forma dinâmica e divertida.

---

## 🚀 Demonstração das Funcionalidades

* 🧠 **Banco de Questões Diversificado:** 70 perguntas cobrindo Expressionismo, Cubismo, Futurismo, Dadaísmo, Surrealismo, Fauvismo, Op Art, Pop Art e Relações entre Arte e Linguagem.
* 🎵 **Desafios Sonoros:** Questões com reprodução de áudio para identificação de características musicais e estéticas de cada vanguarda.
* ⏱️ **Modo Contratempo:** Temporizador ajustado por pergunta para aumentar o desafio.
* 🎧 **Trilha Sonora Integrada:** Música de fundo no menu principal e áudio individual para cada pergunta do quiz.
* 🏆 **Sistema de Ranking Local:** Salva o top 5 melhores pontuações no `localStorage` do navegador.
* 🎨 **Efeitos Visuais Interativos:** Animações de acerto/erro, efeitos de tela vibrante (shake) e chuva de confetes pixelados para celebrar pontuações altas.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web puras, sem a necessidade de frameworks externos:

* **HTML5:** Estruturação semântica e containers das telas.
* **CSS3:** Estilização com estética retro/pixel art, animações e responsividade.
* **JavaScript (ES6+):** Lógica do jogo, manipulação do DOM, controle de áudios e persistência de dados local.

---

## 📁 Estrutura de Arquivos

Para garantir que o projeto funcione corretamente, a estrutura de pastas e arquivos deve ser mantida assim:

```text
├── index.html
├── style.css
├── script.js
└── assets/
    ├── audio/
    │   └── musicas/       # Arquivos mp3 das questões e menu
    └── sounds/            # Efeitos sonoros (clique, acerto, erro, etc.)
