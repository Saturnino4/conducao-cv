<template>
  <div class="menu-container">
    <h2 class="menu-title">Escolha um tópico para testar seus conhecimentos</h2>
    
    <div class="topics-grid">
      <!-- Tópico Velocidade - Disponível -->
      <div 
        class="topic-card available" 
        @click="selectTopic('velocidade')"
      >
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
            <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
          </svg>
        </div>
        <h3>Velocidade</h3>
        <p>Teste seus conhecimentos sobre os limites de velocidade para diferentes tipos de veículos</p>
        <span class="status-badge available">Disponível</span>
      </div>
      
      <!-- Tópico Parar/Estacionar - Indisponível -->
      <div class="topic-card disabled">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.5 7.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7Z"/>
          </svg>
        </div>
        <h3>Parar/Estacionar</h3>
        <p>Teste seus conhecimentos sobre regras de paragem e estacionamento</p>
        <span class="status-badge disabled">Em breve</span>
      </div>
      
      <!-- Tópico Cruzamentos - Indisponível -->
      <div class="topic-card disabled">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm1.443 12.643L7.05 9.636l2.507-2.507 3.418 3.418a.5.5 0 0 1 0 .707l-2.979 2.979a.5.5 0 0 1-.707 0ZM6.343 7.05 2.928 3.636a.5.5 0 0 1 0-.707l2.97-2.97a.5.5 0 0 1 .707 0l3.418 3.417-2.98 2.98a.5.5 0 0 1-.707 0Z"/>
          </svg>
        </div>
        <h3>Cruzamentos</h3>
        <p>Regras de prioridade em cruzamentos e entroncamentos</p>
        <span class="status-badge disabled">Em breve</span>
      </div>
      
      <!-- Tópico Sinais - Indisponível -->
      <div class="topic-card disabled">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.174 1.184a.5.5 0 0 1 .516.066l6 5a.5.5 0 0 1 0 .768l-6 5A.5.5 0 0 1 4 11.5V1a.5.5 0 0 1 .174-.816z"/>
          </svg>
        </div>
        <h3>Sinais de Trânsito</h3>
        <p>Reconheça os diferentes tipos de sinais de trânsito e seu significado</p>
        <span class="status-badge disabled">Em breve</span>
      </div>
      
      <!-- Tópico Manobras - Indisponível -->
      <div class="topic-card disabled">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </div>
        <h3>Manobras</h3>
        <p>Regras para realizar manobras seguras e permitidas</p>
        <span class="status-badge disabled">Em breve</span>
      </div>
      
      <!-- Tópico Documentos - Indisponível -->
      <div class="topic-card disabled">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
        </div>
        <h3>Documentos</h3>
        <p>Conheça os documentos obrigatórios para condução e veículos</p>
        <span class="status-badge disabled">Em breve</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MenuTopicos',
  methods: {
    selectTopic(topic) {
      this.$emit('topic-selected', topic);
    }
  }
}
</script>

<style scoped>
.menu-container {
  padding: 1rem;
}

.menu-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 1.6rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.topic-card {
  border-radius: 12px;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
}

.topic-card.available {
  cursor: pointer;
  border: 2px solid #3498db;
}

.topic-card.available:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(52, 152, 219, 0.2);
}

.topic-card.disabled {
  opacity: 0.6;
  border: 2px solid #e0e0e0;
  cursor: not-allowed;
}

.icon-container {
  margin-bottom: 1rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f8f9fa;
  color: #3498db;
}

.topic-card.disabled .icon-container {
  color: #a0a0a0;
}

h3 {
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
  color: #2c3e50;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.status-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
}

.status-badge.available {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

@media (max-width: 768px) {
  .topics-grid {
      /*grid-template-columns: 1fr; */
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      font-size: .5em;
      
    }
    .topic-card h3{
        font-size: 1.5em;
    }

.topic-card{
    height: 84%;
}
.topic-card p{
    font-size: .9em;
    /*display: none; */
}
.topic-card .status-badge{
    font-size: 1em;
}
  
  .menu-title {
    font-size: 1.3rem;
  }
}
</style>
