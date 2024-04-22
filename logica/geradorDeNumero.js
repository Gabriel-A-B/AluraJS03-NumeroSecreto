/*aqui vc cria os objetos que serão usados para o sistema*/

const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

/*esse sistema gera um numero aleatorio e manda de volta a seu objeto, para assim, se usar em qualquer lugar*/

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

/*aqui ele re-escreve os limites de acordo com as duas constantes anteriores*/

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
