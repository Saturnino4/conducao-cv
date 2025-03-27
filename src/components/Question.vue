<template>
  <div class="question-container">
    <!-- Barra de navegação sempre visível -->
    <div class="navigation-bar">
      <div class="navigation-left">
        <button class="btn-icon" @click="showResetConfirmation = true" title="Reiniciar Quiz">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
        <button class="btn-icon" @click="showMenuConfirmation = true" title="Voltar ao Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="question">
      <h3>{{ question ? question.question : 'Carregando pergunta...' }}</h3>
    </div>
    
    <div class="options" v-if="question && options && options.length > 0">
      <button 
        v-for="(option, index) in options" 
        :key="index"
        class="option-btn"
        :class="{
          'correct': answered && option === question.correctAnswer,
          'incorrect': answered && option === selectedOption && option !== question.correctAnswer
        }"
        @click="selectAnswer(option)"
        :disabled="answered"
      >
        {{ option !== null ? option + ' km/h' : 'Não pode' }} 
      </button>
    </div>
    <div v-else class="loading">
      <p>Carregando opções...</p>
    </div>
    
    <div v-if="answered" class="feedback-container">
      <p v-if="isCorrect" class="feedback correct-feedback">Resposta Correta!</p>
      <p v-else class="feedback incorrect-feedback">
        Resposta Incorreta! A resposta correta é {{ question.correctAnswer }} km/h.
      </p>
      <div class="next-button-container">
        <button class="btn-next" @click="nextQuestion">
          <span>Próxima</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Pop-up de confirmação para reiniciar -->
    <div v-if="showResetConfirmation" class="modal-overlay">
      <div class="confirmation-modal">
        <h4>Reiniciar Quiz?</h4>
        <p>Tem certeza que deseja reiniciar o quiz? Todo o seu progresso será perdido.</p>
        <div class="modal-buttons">
          <button class="btn-cancel" @click="showResetConfirmation = false">Cancelar</button>
          <button class="btn-confirm" @click="confirmReset">Sim, reiniciar</button>
        </div>
      </div>
    </div>
    
    <!-- Pop-up de confirmação para voltar ao menu -->
    <div v-if="showMenuConfirmation" class="modal-overlay">
      <div class="confirmation-modal">
        <h4>Voltar ao Menu?</h4>
        <p>Tem certeza que deseja voltar ao menu? Todo o seu progresso será perdido.</p>
        <div class="modal-buttons">
          <button class="btn-cancel" @click="showMenuConfirmation = false">Cancelar</button>
          <button class="btn-confirm" @click="confirmBackToMenu">Sim, voltar ao menu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      answered: false,
      selectedOption: null,
      isCorrect: false,
      showResetConfirmation: false,
      showMenuConfirmation: false
    }
  },
  methods: {
    selectAnswer(option) {
      if (this.answered) return;
      
      this.selectedOption = option;
      this.answered = true;
      this.isCorrect = option === this.question.correctAnswer;
      
      this.$emit('answer-selected', {
        selectedOption: option,
        isCorrect: this.isCorrect
      });
    },
    nextQuestion() {
      this.$emit('next-question');
      // Resetar estado para a próxima questão
      this.answered = false;
      this.selectedOption = null;
    },
    reset() {
      this.answered = false;
      this.selectedOption = null;
      this.isCorrect = false;
    },
    confirmReset() {
      this.showResetConfirmation = false;
      this.$emit('reset-quiz');
    },
    confirmBackToMenu() {
      this.showMenuConfirmation = false;
      this.$emit('back-to-menu');
    }
  },
  watch: {
    question() {
      // Quando a questão mudar, reset o estado do componente
      this.reset();
    }
  }
}
</script>

<style scoped>
.question-container {
  margin-bottom: 2rem;
  position: relative;
  padding-top: 50px; /* Espaço para a barra de navegação */
}

/* Nova barra de navegação */
.navigation-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  z-index: 5;
  padding: 0.5rem 0;
}

.navigation-left {
  display: flex;
  gap: 10px;
}

.btn-icon {
  background: none;
  border: none;
  color: #6c757d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background-color: #f0f0f0;
  color: #3498db;
}

/* Container específico para o botão próxima */
.next-button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.question {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 5px;
  border-left: 5px solid #3498db;
}

.question h3 {
  font-size: 1.2rem;
  font-weight: 600;
}

.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.option-btn {
  padding: 1rem;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.option-btn:hover:not([disabled]) {
  background-color: #f0f0f0;
  border-color: #3498db;
}

.option-btn:disabled {
  cursor: default;
}

/* Estilos para opções corretas e incorretas */
.option-btn.correct {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.option-btn.incorrect {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

/* Feedback após responder */
.feedback-container {
  margin-top: 1.5rem;
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  animation: fadeIn 0.5s;
  position: relative;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.feedback {
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 5px;
}

.correct-feedback {
  background-color: #d4edda;
  color: #155724;
}

.incorrect-feedback {
  background-color: #f8d7da;
  color: #721c24;
}

/* Navegação - Novo estilo para os botões */
.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.navigation-left {
  display: flex;
  gap: 10px;
}

.btn-icon {
  background: none;
  border: none;
  color: #6c757d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background-color: #f0f0f0;
  color: #3498db;
}

.btn-next {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #3498db;
  color: white;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);
}

.btn-next:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(52, 152, 219, 0.3);
}

.btn-next:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
}

.btn-next svg {
  transition: transform 0.2s ease;
}

.btn-next:hover svg {
  transform: translateX(3px);
}

/* Estilos para os modais de confirmação */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.confirmation-modal {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.confirmation-modal h4 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.confirmation-modal p {
  margin-bottom: 1.5rem;
  color: #666;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel {
  padding: 8px 16px;
  background-color: #f8f9fa;
  color: #495057;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.btn-confirm {
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.btn-cancel:hover {
  background-color: #e2e6ea;
}

.btn-confirm:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .options {
    grid-template-columns: 1fr;
  }
  
  .option-btn {
    padding: 15px;
    font-size: 1.1rem;
  }
  
  .question h3 {
    font-size: 1.1rem;
  }
  
  .btn-next {
    width: auto;
    padding: 10px 20px;
  }
  
  .modal-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .navigation-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navigation-left {
    order: 2;
    margin-top: 0.5rem;
  }
  
  .btn-next {
    order: 1;
    align-self: flex-end;
  }
}

.loading {
  text-align: center;
  padding: 2rem;
  font-style: italic;
  color: #6c757d;
}
</style>
