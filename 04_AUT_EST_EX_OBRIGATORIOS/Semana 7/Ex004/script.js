function calcPrec() {
    let qtnPessoasInput = document.querySelector("#qtnPessoas");
    let periodo = document.querySelector("#periodo");


    let qtnPessoas = Number(qtnPessoasInput.value)
    let preco;

   if (periodo.value == "1") { 
        preco = 200 * qtnPessoas; 

        if (qtnPessoas > 50) {
            preco = 120 * qtnPessoas; 
        }
   } else {
       preco = 100 * qtnPessoas;

       if (qtnPessoas > 50) {
           preco = 80 * qtnPessoas;
       }
   }

   alert(preco)
}