<template>
  <div class="quiz-container">
    <div v-if="gameState === 'start'" class="start-screen">
      <button class="btn-back" @click="backToMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Voltar ao menu
      </button>
      
      <h2>{{ quizTitle }}</h2>
      <p>{{ quizDescription }}</p>
      <button class="btn btn-primary" @click="startQuiz">Iniciar Quiz</button>
    </div>

    <div v-else-if="gameState === 'playing'">
      <div class="quiz-header">
        <span class="question-counter">Pergunta {{ currentQuestionIndex + 1 }} de {{ totalQuestions }}</span>
        <span class="score">Pontuação: {{ score }}</span>
      </div>

      <div v-if="isLoading" class="loading-container">
        <div class="spinner"></div>
        <p>Carregando perguntas...</p>
      </div>

      <Question 
        v-else
        :question="currentQuestion" 
        :options="currentOptions"
        @answer-selected="handleAnswerSelected"
        @next-question="nextQuestion"
        @reset-quiz="restartQuiz"
        @back-to-menu="backToMenu"
        ref="questionComponent"
      />
    </div>

    <div v-else-if="gameState === 'finished'" class="result-screen">
      <h2>Quiz Concluído!</h2>
      <p>Pontuação final: {{ score }} de {{ totalQuestions }}</p>
      <p>Percentagem: {{ Math.round((score / totalQuestions) * 100) }}%</p>
      <div class="button-group">
        <button class="btn btn-secondary" @click="backToMenu">Voltar ao Menu</button>
        <button class="btn btn-primary" @click="restartQuiz">Jogar Novamente</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import speedLimitsData from '../data/speedLimits.json';
import Question from './Question.vue';

export default {
  name: 'Quiz',
  components: {
    Question
  },
  data() {
    return {
      speedLimits: speedLimitsData.speedLimits,
      roadTypes: speedLimitsData.roadTypes,
      quizTitle: speedLimitsData.quiz?.title || 'Teste os seus conhecimentos sobre limites de velocidade!',
      quizDescription: speedLimitsData.quiz?.description || 'Este quiz irá testar o seu conhecimento sobre os limites de velocidade para diferentes tipos de veículos em várias condições de estrada.',
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      gameState: 'start',
      totalQuestions: 20,
      debugInfo: '',
      isLoading: false
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    currentOptions() {
      if (!this.currentQuestion) return [];
      return this.currentQuestion.options;
    }
  },
  methods: {
    backToMenu() {
      this.$emit('back-to-menu');
    },
    startQuiz() {
      this.isLoading = true;
      this.score = 0;
      this.currentQuestionIndex = 0;
      
      // Gerar as questões e verificar se foi bem sucedido
      const success = this.generateQuestions();
      
      if (success && this.questions.length > 0) {
        this.gameState = 'playing';
        this.debugInfo = '';
      } else {
        alert('Não foi possível gerar questões suficientes. Por favor, tente novamente.');
        this.debugInfo = 'Falha ao gerar questões: ' + this.questions.length + ' geradas.';
      }
      
      this.isLoading = false;
    },
    restartQuiz() {
      this.gameState = 'start';
    },
    generateQuestions() {
      const questions = [];
      const vehicleTypes = this.speedLimits.map(item => item.vehicleType);
      const roadTypeKeys = Object.keys(this.roadTypes);
      
      // Para evitar loop infinito
      let maxAttempts = 500;
      let attempts = 0;
      
      // Generate unique random questions
      while (questions.length < this.totalQuestions && attempts < maxAttempts) {
        attempts++;
        
        const randomVehicleIndex = Math.floor(Math.random() * vehicleTypes.length);
        const randomRoadTypeIndex = Math.floor(Math.random() * roadTypeKeys.length);
        
        const vehicleType = vehicleTypes[randomVehicleIndex];
        const roadTypeKey = roadTypeKeys[randomRoadTypeIndex];
        const roadTypeName = this.roadTypes[roadTypeKey];
        
        // Find correct answer
        const vehicleData = this.speedLimits.find(item => item.vehicleType === vehicleType);
        if (!vehicleData || !vehicleData.limits) {
          continue; // Pular se não encontrar dados do veículo ou limites
        }
        
        const correctAnswer = vehicleData.limits[roadTypeKey];
        
        // Skip combinations where no limit is set (null values)
        if (correctAnswer === null || correctAnswer === undefined) continue;
        
        // Check if this combination already exists in questions
        const questionExists = questions.some(
          q => q.vehicleType === vehicleType && q.roadTypeKey === roadTypeKey
        );
        
        if (questionExists) continue;
        
        // Generate wrong answers (3 different from correct answer)
        const possibleLimits = [20, 25, 30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120];
        const wrongAnswers = this.generateWrongAnswers(possibleLimits, correctAnswer, 3);
        
        // Combine correct and wrong answers, then shuffle
        const allOptions = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
        
        questions.push({
          question: `Qual é o limite de velocidade para um ${vehicleType} ${roadTypeName}?`,
          vehicleType,
          roadTypeKey,
          options: allOptions,
          correctAnswer
        });
      }
      
      console.log(`Geradas ${questions.length} questões após ${attempts} tentativas.`);
      
      // Se não conseguiu gerar questões suficientes, mas gerou algumas, usar o que temos
      if (questions.length > 0) {
        this.questions = questions;
        // Ajustar o totalQuestions se não conseguimos gerar todas
        if (questions.length < this.totalQuestions) {
          this.totalQuestions = questions.length;
        }
        return true;
      }
      
      return false; // Falha ao gerar questões
    },
    generateWrongAnswers(possibleValues, correctAnswer, count) {
      const wrongAnswers = [];
      const availableValues = possibleValues.filter(val => val !== correctAnswer);
      
      while (wrongAnswers.length < count && availableValues.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableValues.length);
        const wrongAnswer = availableValues[randomIndex];
        
        wrongAnswers.push(wrongAnswer);
        availableValues.splice(randomIndex, 1);
      }
      
      return wrongAnswers;
    },
    handleAnswerSelected(answer) {
      if (answer.isCorrect) {
        this.score++;
      }
      // Não avançamos para a próxima questão automaticamente,
      // agora esperamos que o usuário clique no botão "Próxima Questão"
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.gameState = 'finished';
      }
    }
  }
};
</script>

<style scoped>
.quiz-container {
  margin-top: 1rem;
  position: relative;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #3498db;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 1rem;
  transition: color 0.2s;
}

.btn-back:hover {
  color: #2980b9;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: bold;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.start-screen, .result-screen {
  text-align: center;
  padding: 2rem 0;
}

.start-screen h2, .result-screen h2 {
  margin-bottom: 1rem;
}

.start-screen p, .result-screen p {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
  }
  
  .quiz-header {
    flex-direction: column;
    text-align: center;
  }
  
  .question-counter, .score {
    margin-bottom: 0.5rem;
  }
  
  .button-group {
    flex-direction: column;
  }
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #3498db;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
