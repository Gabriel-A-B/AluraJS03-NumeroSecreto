function verificaValidação(resposta) {
    const numero = +resposta

    if(respostaForInvalida(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Invalido</div>
        `
    }else if(passouDoLimite(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Invalido</div>
        <div>O Numero mensionado não esta entre ${menorValor} e ${maiorValor}</div>
        `
    }else if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Parabens, voce acertou o Numero Secreto!! </h2>
        <h3> De tantas possibilidades, voce mirou no meio do Alvo!! </h3>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div class="dica">O numero secreto e menor que a sua resposta, tente denovo
        <span class="material-symbols-outlined">
    stat_minus_2
    </span>
        </div>
        `
    }else {
        elementoChute.innerHTML += `
        <div class="dica">O numero secreto e maior que a sua resposta, tente denovo
        <span class="material-symbols-outlined">
        stat_2
        </span>
        </div>
        `
    }
}

function respostaForInvalida(numero) {
    return Number.isNaN(numero)
}

function passouDoLimite(numero) {
   return numero > maiorValor || numero < menorValor
}