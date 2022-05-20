function calc() {
    let valores = [];

    let valoresInput = document.getElementById('valores');
    let valorFoco = document.getElementById('valor-foco');

    let resultado  = document.getElementById('resultado')

    valoresInput.value.split(',').forEach( valor => {
        valores.push(valor.trim());
    }); 

    valores.sort((a,b) => a -b);

    let posicaoValorFoco = valores.indexOf(valorFoco.value);

    resultado.innerHTML = `
        ${valores}, <br>
        A posição do valor foco é ${posicaoValorFoco + 1}
    `

}