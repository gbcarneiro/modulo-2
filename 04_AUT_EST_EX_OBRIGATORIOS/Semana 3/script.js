var gravidade = 10

function calculate() {
    var velocidade = document.getElementById("velocidade").value;
    var tempo = velocidade / gravidade;
    var hmax = (velocidade * velocidade) / (2 * gravidade);
    alert(tempo);
    alert(hmax);
}