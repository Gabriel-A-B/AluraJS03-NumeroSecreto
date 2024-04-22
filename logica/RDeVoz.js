const elementoChute = document.querySelector('#chute')
const modo = document.querySelector('.modo')
let tentativas = 0

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-br"
  recognition.start()

recognition.addEventListener('result', onSpeak)

/*quando passamos para uma função rodar dentro de outra, sempre
temos que colocar em seu parenteses a constante necesaria, que
dara o valor que sera usado na fucntion escrita*/

function onSpeak(e) {
    resposta = e.results[0][0].transcript
    mostrarResultado(resposta)
    verificaValidação(resposta)
}

function mostrarResultado(resposta) {
    elementoChute.innerHTML = `
    <div>Voce disse:</div>
    <span class="box">${resposta}</span>
    `
    modo.style.display = 'none'
}

recognition.addEventListener('end', () => recognition.start())