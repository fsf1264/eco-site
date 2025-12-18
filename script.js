const quizData = [
  {
    question: "Какие последствия вызывает таяние ледников?",
    options: ["Рост биоразнообразия", "Уменьшение осадков", "Повышение уровня мирового океана", "Снижение температуры воздуха"],
    answer: 2,
    explanation: "Таяние ледников приводит к повышению уровня мирового океана, угрожая прибрежным регионам."
  },
  {
    question: "Какие погодные явления учащаются из-за изменения климата?",
    options: ["Снегопады и морозы", "Засухи, ураганы, наводнения", "Град и ливни", "Туманы и грозы"],
    answer: 1,
    explanation: "Изменение климата вызывает учащение экстремальных погодных явлений, таких как засухи и ураганы."
  },
  {
    question: "Какая возрастная группа особенно уязвима к загрязнённому воздуху?",
    options: ["Подростки", "Спортсмены", "Дети и пожилые люди", "Люди с высоким доходом"],
    answer: 2,
    explanation: "Загрязнённый воздух особенно опасен для детей, пожилых и людей с хроническими заболеваниями."
  },
  {
    question: "Почему коралловые рифы погибают?",
    options: ["Из-за загрязнения пластиком", "Из-за вылова рыбы", "Из-за повышения температуры и закисления океанов", "Из-за солнечной активности"],
    answer: 2,
    explanation: "Кораллы чувствительны к температуре и кислотности воды, что приводит к их гибели."
  },
  {
    question: "Почему переработка отходов остаётся на низком уровне во многих странах?",
    options: [
      "Из-за нехватки мусора",
      "Из-за высокого уровня переработки",
      "Из-за отсутствия системы сортировки",
      "Из-за запрета на переработку"
    ],
    answer: 2,
    explanation: "Во многих странах отсутствует эффективная система сортировки и переработки отходов."
  },
  {
    question: "Что загрязняет воду?",
    options: ["Листья и ветки", "Пыль и песок", "Химические отходы, пластик, тяжёлые металлы", "Солнечные лучи"],
    answer: 2,
    explanation: "Основные загрязнители воды — это химические вещества, пластик и сточные воды."
  },
  {
    question: "Почему пластик опасен для окружающей среды?",
    options: ["Он быстро разлагается", "Он улучшает качество почвы", "Он используется для удобрений", "Он попадает в пищевые цепи"],
    answer: 3,
    explanation: "Пластик разлагается сотни лет и может накапливаться в организмах животных и человека."
  },
  {
    question: "Что требуется для повышения уровня переработки отходов?",
    options: ["Увеличение числа свалок", "Снижение потребления воды", "Внедрение систем сортировки и переработки", "Рост производства пластика"],
    answer: 2,
    explanation: "Сортировка и переработка отходов — ключ к снижению экологической нагрузки."
  },
  {
    question: "Что способствует потере биоразнообразия?",
    options: ["Развитие туризма", "Сельское хозяйство", "Вырубка лесов, браконьерство, загрязнение", "Рост населения"],
    answer: 2,
    explanation: "Основные причины — разрушение среды обитания, загрязнение и незаконная охота."
  },
  {
    question: "Какие источники энергии считаются возобновляемыми?",
    options: ["Уголь, нефть, газ", "Солнечная, ветровая, гидроэнергия", "Биотопливо", "Ядерная энергия"],
    answer: 1,
    explanation: "Возобновляемые источники — это те, которые не исчерпываются и не загрязняют окружающую среду."
  },
  {
    question: "Что поможет сократить выбросы в атмосферу?",
    options: ["Рост потребления нефти", "Использование дизельных автомобилей", "Развитие угольной промышленности", "Экологичный транспорт"],
    answer: 3,
    explanation: "Экологичный транспорт, включая электромобили и общественный транспорт, снижает уровень загрязнения."
  },
  {
    question: "Какие газы способствуют глобальному потеплению?",
    options: ["Кислород, водород, азот", "Метан, углекислый газ, закись азота", "Озон, фреон, водяной пар", "Хлор, фтор, углерод"],
    answer: 1,
    explanation: "Парниковые газы — метан, CO₂ и закись азота — усиливают эффект потепления."
  },
  {
    question: "Сколько целей устойчивого развития приняты ООН?",
    options: ["17", "15", "10", "20"],
    answer: 0,
    explanation: "В 2015 году ООН приняла 17 целей устойчивого развития."
  },
  {
    question: "Какая цель ЦУР связана с климатом?",
    options: ["Мир и правосудие", "Борьба с изменением климата", "Гендерное равенство", "Качественное образование"],
    answer: 1,
    explanation: "Одна из целей ЦУР напрямую направлена на борьбу с изменением климата."
  },
  {
    question: "Что является важным условием международного сотрудничества в решении экологических проблем?",
    options: [
      "Рост конкуренции",
      "Глобальные соглашения и программы",
      "Снижение инвестиций",
      "Изоляция стран"
    ],
    answer: 1,
    explanation: "Глобальные соглашения и программы позволяют странам объединять усилия для защиты окружающей среды."
  },
  {
    question: "Кто должен участвовать в реализации ЦУР?",
    options: ["Только правительства", "Только бизнес", "Все: от глав государств до школьников", "Только международные организации"],
    answer: 2,
    explanation: "ЦУР предполагают участие всех слоёв общества, включая каждого человека."
  }
];

const quizContainer = document.querySelector(".quiz-container");

quizData.forEach((item, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${item.question}`;
  questionDiv.appendChild(questionTitle);

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  item.options.forEach((option, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = i;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    optionsDiv.appendChild(label);
  });

  questionDiv.appendChild(optionsDiv);
  quizContainer.appendChild(questionDiv);
});

document.querySelector(".submit-btn").addEventListener("click", () => {
  let score = 0;
  const resultsDiv = document.querySelector(".results");
  const resultsFooter = document.querySelector(".results-footer");
  resultsFooter.innerHTML = ""
  resultsDiv.innerHTML = "";

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`[name='question${index}']:checked`);
    const result = document.createElement("div");

    if (selected) {
      const answer = parseInt(selected.value);
      if (answer === item.answer) {
        score++;
        result.innerHTML = `<strong>Вопрос ${index + 1}:</strong><span style = 'color:#3cb371'> Верно</span><br>${item.explanation}`;
      } else {
        result.innerHTML = `<strong>Вопрос ${index + 1}:</strong><span style = 'color:#FF474C'> Неверно</span><br>${item.explanation}`;
      }
    } else {
      result.innerHTML = `<strong>Вопрос ${index + 1}:</strong><span style = 'color:#FF474C'> Не выбран ответ.</span><br>${item.explanation}`;
    }
    resultsDiv.appendChild(result);
  });

  const finalScore = document.createElement("p");
  finalScore.innerHTML = `<strong>Ваш результат: ${score} из ${quizData.length}</strong>`;
  resultsFooter.appendChild(finalScore);
});

