function calc() {
    let valor = parseInt(document.getElementById('valor').value);
    let resultado = document.querySelectorAll('p')

    let cem = Math.floor(valor / 100); 
    let cinquenta = Math.floor((valor - cem * 100) / 50); 
    let vinte = Math.floor((valor - (cem * 100 + cinquenta * 50)) / 20);
    let dez = Math.floor((valor - (cem * 100 + cinquenta * 50 + vinte * 20)) / 10); 
    let cinco = Math.floor((valor - (cem * 100 + cinquenta * 50 + vinte * 20 + dez * 10)) / 5); 
    let dois = Math.floor((valor - (cem * 100 + cinquenta * 50 + vinte * 20 + dez * 10 + cinco * 5)) / 2);
    let um = Math.floor((valor - (cem * 100 + cinquenta * 50 + vinte * 20 + dez * 10 + cinco * 5 + dois * 2) / 1)); 

    document.getElementById('resultado').innerHTML = `
        Você precisará de ${cem} notas de 100. <br>
        Você precisará de ${cinquenta} notas de 50.<br>
        Você precisará de ${vinte} notas de 20.<br>
        Você precisará de ${dez} notas de 10.<br>
        Você precisará de ${cinco} notas de 5.<br>
        Você precisará de ${dois} notas de 2.<br>
        Você precisará de ${um} notas de 1.<br>
    `   
}