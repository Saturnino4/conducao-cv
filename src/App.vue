<template>
  <div id="app">
    <div class="container">
      <h1>Quiz de Código da Estrada</h1>
      
      <!-- Mostrar o menu de tópicos ou o quiz selecionado -->
      <MenuTopicos 
        v-if="currentScreen === 'menu'" 
        @topic-selected="handleTopicSelection" 
      />
      
      <Velocidade v-else-if="currentScreen === 'velocidade'" @back-to-menu="backToMenu" />
      
      <!-- Placeholder para futuros tópicos -->
      <div v-else class="not-available">
        <p>Este tópico ainda não está disponível.</p>
        <button class="btn btn-primary" @click="backToMenu">Voltar ao Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import MenuTopicos from './components/MenuTopicos.vue'
import Velocidade from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    MenuTopicos,
    Velocidade
  },
  data() {
    return {
      currentScreen: 'menu',
      selectedTopic: null
    }
  },
  methods: {
    handleTopicSelection(topic) {
      this.selectedTopic = topic;
      this.currentScreen = topic; // Trocamos para o tópico selecionado
    },
    backToMenu() {
      this.currentScreen = 'menu';
      this.selectedTopic = null;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

#app {
  padding: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.not-available {
  text-align: center;
  padding: 3rem;
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

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  .container {
    padding: 0.5rem;
  }
}
</style>
