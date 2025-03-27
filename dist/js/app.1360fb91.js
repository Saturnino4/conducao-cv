(()=>{"use strict";var e={753:(e,t,a)=>{var s=a(471),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container"},[t("h1",[e._v("Quiz de Código da Estrada")]),"menu"===e.currentScreen?t("MenuTopicos",{on:{"topic-selected":e.handleTopicSelection}}):"velocidade"===e.currentScreen?t("Velocidade",{on:{"back-to-menu":e.backToMenu}}):t("div",{staticClass:"not-available"},[t("p",[e._v("Este tópico ainda não está disponível.")]),t("button",{staticClass:"btn btn-primary",on:{click:e.backToMenu}},[e._v("Voltar ao Menu")])])],1)])},o=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu-container"},[t("h2",{staticClass:"menu-title"},[e._v("Escolha um tópico para testar seus conhecimentos")]),t("div",{staticClass:"topics-grid"},[t("div",{staticClass:"topic-card available",on:{click:function(t){return e.selectTopic("velocidade")}}},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"}})])]),t("h3",[e._v("Velocidade")]),t("p",[e._v("Teste seus conhecimentos sobre os limites de velocidade para diferentes tipos de veículos")]),t("span",{staticClass:"status-badge available"},[e._v("Disponível")])]),t("div",{staticClass:"topic-card disabled"},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.5 7.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7Z"}})])]),t("h3",[e._v("Parar/Estacionar")]),t("p",[e._v("Teste seus conhecimentos sobre regras de paragem e estacionamento")]),t("span",{staticClass:"status-badge disabled"},[e._v("Em breve")])]),t("div",{staticClass:"topic-card disabled"},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm1.443 12.643L7.05 9.636l2.507-2.507 3.418 3.418a.5.5 0 0 1 0 .707l-2.979 2.979a.5.5 0 0 1-.707 0ZM6.343 7.05 2.928 3.636a.5.5 0 0 1 0-.707l2.97-2.97a.5.5 0 0 1 .707 0l3.418 3.417-2.98 2.98a.5.5 0 0 1-.707 0Z"}})])]),t("h3",[e._v("Cruzamentos")]),t("p",[e._v("Regras de prioridade em cruzamentos e entroncamentos")]),t("span",{staticClass:"status-badge disabled"},[e._v("Em breve")])]),t("div",{staticClass:"topic-card disabled"},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M4.174 1.184a.5.5 0 0 1 .516.066l6 5a.5.5 0 0 1 0 .768l-6 5A.5.5 0 0 1 4 11.5V1a.5.5 0 0 1 .174-.816z"}})])]),t("h3",[e._v("Sinais de Trânsito")]),t("p",[e._v("Reconheça os diferentes tipos de sinais de trânsito e seu significado")]),t("span",{staticClass:"status-badge disabled"},[e._v("Em breve")])]),t("div",{staticClass:"topic-card disabled"},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}})])]),t("h3",[e._v("Manobras")]),t("p",[e._v("Regras para realizar manobras seguras e permitidas")]),t("span",{staticClass:"status-badge disabled"},[e._v("Em breve")])]),t("div",{staticClass:"topic-card disabled"},[t("div",{staticClass:"icon-container"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"}}),t("path",{attrs:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"}})])]),t("h3",[e._v("Documentos")]),t("p",[e._v("Conheça os documentos obrigatórios para condução e veículos")]),t("span",{staticClass:"status-badge disabled"},[e._v("Em breve")])])])])},r=[];const c={name:"MenuTopicos",methods:{selectTopic(e){this.$emit("topic-selected",e)}}},l=c;var d=a(656),u=(0,d.A)(l,n,r,!1,null,"63b925e8",null);const v=u.exports;var h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"quiz-container"},["start"===e.gameState?t("div",{staticClass:"start-screen"},[t("button",{staticClass:"btn-back",on:{click:e.backToMenu}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}})]),e._v(" Voltar ao menu ")]),t("h2",[e._v(e._s(e.quizTitle))]),t("p",[e._v(e._s(e.quizDescription))]),t("button",{staticClass:"btn btn-primary",on:{click:e.startQuiz}},[e._v("Iniciar Quiz")])]):"playing"===e.gameState?t("div",[t("div",{staticClass:"quiz-header"},[t("span",{staticClass:"question-counter"},[e._v("Pergunta "+e._s(e.currentQuestionIndex+1)+" de "+e._s(e.totalQuestions))]),t("span",{staticClass:"score"},[e._v("Pontuação: "+e._s(e.score))])]),e.isLoading?t("div",{staticClass:"loading-container"},[t("div",{staticClass:"spinner"}),t("p",[e._v("Carregando perguntas...")])]):t("Question",{ref:"questionComponent",attrs:{question:e.currentQuestion,options:e.currentOptions},on:{"answer-selected":e.handleAnswerSelected,"next-question":e.nextQuestion,"reset-quiz":e.restartQuiz,"back-to-menu":e.backToMenu}})],1):"finished"===e.gameState?t("div",{staticClass:"result-screen"},[t("h2",[e._v("Quiz Concluído!")]),t("p",[e._v("Pontuação final: "+e._s(e.score)+" de "+e._s(e.totalQuestions))]),t("p",[e._v("Percentagem: "+e._s(Math.round(e.score/e.totalQuestions*100))+"%")]),t("div",{staticClass:"button-group"},[t("button",{staticClass:"btn btn-secondary",on:{click:e.backToMenu}},[e._v("Voltar ao Menu")]),t("button",{staticClass:"btn btn-primary",on:{click:e.restartQuiz}},[e._v("Jogar Novamente")])])]):e._e()])},p=[];const m=JSON.parse('{"aG":[{"vehicleType":"Veículo Ligeiro de passageiro sem reboque","limits":{"dentroLocalidade":50,"foraLocalidade":90,"viaReservada":100,"autoestrada":120}},{"vehicleType":"Veículo Ligeiro de mercadoria sem reboque","limits":{"dentroLocalidade":50,"foraLocalidade":80,"viaReservada":90,"autoestrada":110}},{"vehicleType":"Veículo Pesado de passageiro sem reboque","limits":{"dentroLocalidade":50,"foraLocalidade":80,"viaReservada":90,"autoestrada":100}},{"vehicleType":"Veículo Pesado de mercadoria sem reboque","limits":{"dentroLocalidade":50,"foraLocalidade":80,"viaReservada":80,"autoestrada":90}},{"vehicleType":"Veículo Ligeiro de passageiro com reboque","limits":{"dentroLocalidade":50,"foraLocalidade":70,"viaReservada":80,"autoestrada":100}},{"vehicleType":"Veículo Ligeiro de mercadoria com reboque","limits":{"dentroLocalidade":50,"foraLocalidade":70,"viaReservada":70,"autoestrada":90}},{"vehicleType":"Veículo Pesado de passageiro com reboque","limits":{"dentroLocalidade":50,"foraLocalidade":70,"viaReservada":90,"autoestrada":90}},{"vehicleType":"Veículo Pesado de mercadoria com reboque","limits":{"dentroLocalidade":40,"foraLocalidade":70,"viaReservada":70,"autoestrada":80}},{"vehicleType":"Motociclo até 50cc","limits":{"dentroLocalidade":40,"foraLocalidade":60,"viaReservada":null,"autoestrada":null}},{"vehicleType":"Ciclomotor ou Quadriciclo","limits":{"dentroLocalidade":40,"foraLocalidade":45,"viaReservada":null,"autoestrada":null}},{"vehicleType":"Trator Agrícola","limits":{"dentroLocalidade":30,"foraLocalidade":40,"viaReservada":null,"autoestrada":null}},{"vehicleType":"Máquina Industrial sem matrícula","limits":{"dentroLocalidade":30,"foraLocalidade":30,"viaReservada":null,"autoestrada":null}},{"vehicleType":"Máquina Agrícola, Tratorcarro ou Motocultivador","limits":{"dentroLocalidade":20,"foraLocalidade":20,"viaReservada":null,"autoestrada":null}},{"vehicleType":"Comboio Turístico","limits":{"dentroLocalidade":25,"foraLocalidade":null,"viaReservada":null,"autoestrada":null}}],"cn":{"dentroLocalidade":"Dentro da Localidade","foraLocalidade":"Fora da Localidade","viaReservada":"na Via Reservada","autoestrada":"em uma Autoestrada"},"oT":{"categoria":"velocidade","title":"Velocidades Máximas Permitidas","description":"Teste os seus conhecimentos sobre as velocidades máximas permitidas para os diferentes tipos de veículos."}}');var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"question-container"},[t("div",{staticClass:"navigation-bar"},[t("div",{staticClass:"navigation-left"},[t("button",{staticClass:"btn-icon",attrs:{title:"Reiniciar Quiz"},on:{click:function(t){e.showResetConfirmation=!0}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}}),t("path",{attrs:{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"}})])]),t("button",{staticClass:"btn-icon",attrs:{title:"Voltar ao Menu"},on:{click:function(t){e.showMenuConfirmation=!0}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}})])])])]),t("div",{staticClass:"question"},[t("h3",[e._v(e._s(e.question?e.question.question:"Carregando pergunta..."))])]),e.question&&e.options&&e.options.length>0?t("div",{staticClass:"options"},e._l(e.options,(function(a,s){return t("button",{key:s,staticClass:"option-btn",class:{correct:e.answered&&a===e.question.correctAnswer,incorrect:e.answered&&a===e.selectedOption&&a!==e.question.correctAnswer},attrs:{disabled:e.answered},on:{click:function(t){return e.selectAnswer(a)}}},[e._v(" "+e._s(null!==a?a+" km/h":"Não pode")+" ")])})),0):t("div",{staticClass:"loading"},[t("p",[e._v("Carregando opções...")])]),e.answered?t("div",{staticClass:"feedback-container"},[e.isCorrect?t("p",{staticClass:"feedback correct-feedback"},[e._v("Resposta Correta!")]):t("p",{staticClass:"feedback incorrect-feedback"},[e._v(" Resposta Incorreta! A resposta correta é "+e._s(e.question.correctAnswer)+" km/h. ")]),t("div",{staticClass:"next-button-container"},[t("button",{staticClass:"btn-next",on:{click:e.nextQuestion}},[t("span",[e._v("Próxima")]),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"}})])])])]):e._e(),e.showResetConfirmation?t("div",{staticClass:"modal-overlay"},[t("div",{staticClass:"confirmation-modal"},[t("h4",[e._v("Reiniciar Quiz?")]),t("p",[e._v("Tem certeza que deseja reiniciar o quiz? Todo o seu progresso será perdido.")]),t("div",{staticClass:"modal-buttons"},[t("button",{staticClass:"btn-cancel",on:{click:function(t){e.showResetConfirmation=!1}}},[e._v("Cancelar")]),t("button",{staticClass:"btn-confirm",on:{click:e.confirmReset}},[e._v("Sim, reiniciar")])])])]):e._e(),e.showMenuConfirmation?t("div",{staticClass:"modal-overlay"},[t("div",{staticClass:"confirmation-modal"},[t("h4",[e._v("Voltar ao Menu?")]),t("p",[e._v("Tem certeza que deseja voltar ao menu? Todo o seu progresso será perdido.")]),t("div",{staticClass:"modal-buttons"},[t("button",{staticClass:"btn-cancel",on:{click:function(t){e.showMenuConfirmation=!1}}},[e._v("Cancelar")]),t("button",{staticClass:"btn-confirm",on:{click:e.confirmBackToMenu}},[e._v("Sim, voltar ao menu")])])])]):e._e()])},f=[];const b={name:"Question",props:{question:{type:Object,required:!0},options:{type:Array,required:!0}},data(){return{answered:!1,selectedOption:null,isCorrect:!1,showResetConfirmation:!1,showMenuConfirmation:!1}},methods:{selectAnswer(e){this.answered||(this.selectedOption=e,this.answered=!0,this.isCorrect=e===this.question.correctAnswer,this.$emit("answer-selected",{selectedOption:e,isCorrect:this.isCorrect}))},nextQuestion(){this.$emit("next-question"),this.answered=!1,this.selectedOption=null},reset(){this.answered=!1,this.selectedOption=null,this.isCorrect=!1},confirmReset(){this.showResetConfirmation=!1,this.$emit("reset-quiz")},confirmBackToMenu(){this.showMenuConfirmation=!1,this.$emit("back-to-menu")}},watch:{question(){this.reset()}}},w=b;var C=(0,d.A)(w,g,f,!1,null,"49699404",null);const _=C.exports,T={name:"Quiz",components:{Question:_},data(){return{speedLimits:m.aG,roadTypes:m.cn,quizTitle:m.oT?.title||"Teste os seus conhecimentos sobre limites de velocidade!",quizDescription:m.oT?.description||"Este quiz irá testar o seu conhecimento sobre os limites de velocidade para diferentes tipos de veículos em várias condições de estrada.",questions:[],currentQuestionIndex:0,score:0,gameState:"start",totalQuestions:20,debugInfo:"",isLoading:!1}},computed:{currentQuestion(){return this.questions[this.currentQuestionIndex]},currentOptions(){return this.currentQuestion?this.currentQuestion.options:[]}},methods:{backToMenu(){this.$emit("back-to-menu")},startQuiz(){this.isLoading=!0,this.score=0,this.currentQuestionIndex=0;const e=this.generateQuestions();e&&this.questions.length>0?(this.gameState="playing",this.debugInfo=""):(alert("Não foi possível gerar questões suficientes. Por favor, tente novamente."),this.debugInfo="Falha ao gerar questões: "+this.questions.length+" geradas."),this.isLoading=!1},restartQuiz(){this.gameState="start"},generateQuestions(){const e=[],t=this.speedLimits.map((e=>e.vehicleType)),a=Object.keys(this.roadTypes);let s=500,i=0;while(e.length<this.totalQuestions&&i<s){i++;const s=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*a.length),n=t[s],r=a[o],c=this.roadTypes[r],l=this.speedLimits.find((e=>e.vehicleType===n));if(!l||!l.limits)continue;const d=l.limits[r];if(null===d||void 0===d)continue;const u=e.some((e=>e.vehicleType===n&&e.roadTypeKey===r));if(u)continue;const v=[20,25,30,40,45,50,60,70,80,90,100,110,120],h=this.generateWrongAnswers(v,d,3),p=[...h,d].sort((()=>Math.random()-.5));e.push({question:`Qual é o limite de velocidade para um ${n} ${c}?`,vehicleType:n,roadTypeKey:r,options:p,correctAnswer:d})}return console.log(`Geradas ${e.length} questões após ${i} tentativas.`),e.length>0&&(this.questions=e,e.length<this.totalQuestions&&(this.totalQuestions=e.length),!0)},generateWrongAnswers(e,t,a){const s=[],i=e.filter((e=>e!==t));while(s.length<a&&i.length>0){const e=Math.floor(Math.random()*i.length),t=i[e];s.push(t),i.splice(e,1)}return s},handleAnswerSelected(e){e.isCorrect&&this.score++},nextQuestion(){this.currentQuestionIndex<this.questions.length-1?this.currentQuestionIndex++:this.gameState="finished"}}},q=T;var M=(0,d.A)(q,h,p,!1,null,"93670408",null);const L=M.exports,z={name:"App",components:{MenuTopicos:v,Velocidade:L},data(){return{currentScreen:"menu",selectedTopic:null}},methods:{handleTopicSelection(e){this.selectedTopic=e,this.currentScreen=e},backToMenu(){this.currentScreen="menu",this.selectedTopic=null}}},y=z;var x=(0,d.A)(y,i,o,!1,null,null,null);const k=x.exports;s.Ay.config.productionTip=!1,new s.Ay({render:e=>e(k)}).$mount("#app")}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,(()=>{var e=[];a.O=(t,s,i,o)=>{if(!s){var n=1/0;for(d=0;d<e.length;d++){for(var[s,i,o]=e[d],r=!0,c=0;c<s.length;c++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](s[c])))?s.splice(c--,1):(r=!1,o<n&&(n=o));if(r){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,i,o]}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[n,r,c]=s,l=0;if(n.some((t=>0!==e[t]))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a)}for(t&&t(s);l<n.length;l++)o=n[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self["webpackChunkquiz_conducao"]=self["webpackChunkquiz_conducao"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[504],(()=>a(753)));s=a.O(s)})();
//# sourceMappingURL=app.1360fb91.js.map