let currentQuestion = 0;
let score = 0;

const questions = document.querySelectorAll('.question');
const result = document.getElementById('result');
const progress = document.querySelector('.progress');
const currentQuestionText = document.getElementById('currentQuestion');

function updateProgress(){

  const percent = ((currentQuestion + 1) / 8) * 100;

  progress.style.width = percent + '%';

  currentQuestionText.innerHTML = currentQuestion + 1;
}

function nextQuestion(points){

  score += points;

  questions[currentQuestion].classList.remove('active');

  currentQuestion++;

  questions[currentQuestion].classList.add('active');

  updateProgress();
}

function finishQuiz(points){

  score += points;

  questions[currentQuestion].classList.remove('active');

  progress.style.width = '100%';

  result.style.display = 'block';

  if(score <= 10){

    result.innerHTML = `

      <h2>Uso saudável</h2>

      <p>
        Você aparenta manter uma relação equilibrada
        com as redes sociais.
      </p>

      <p>
        Continue valorizando momentos offline,
        pausas digitais e seu bem-estar mental.
      </p>

      <button onclick="window.location.href='index.html'">
        Voltar ao início
      </button>

    `;

  }

  else if(score <= 17){

    result.innerHTML = `

      <h2>Fique atento(a)</h2>

      <p>
        As redes sociais já demonstram certo impacto
        na sua rotina, autoestima e emoções.
      </p>

      <p>
        Talvez seja um bom momento para reduzir
        o tempo online e cuidar mais da sua saúde mental.
      </p>

      <button onclick="window.location.href='index.html'">
        Voltar ao início
      </button>

    `;

  }

  else{

    result.innerHTML = `

      <h2>Sinais de dependência digital</h2>

      <p>
        O uso excessivo das redes sociais pode estar
        afetando seu bem-estar emocional e sua qualidade de vida.
      </p>

      <p>
        Considere fazer pausas digitais, conversar
        com pessoas próximas e buscar apoio se necessário.
      </p>

      <button onclick="window.location.href='https://cvv.org.br/'">
        Buscar apoio
      </button>

    `;

  }
}