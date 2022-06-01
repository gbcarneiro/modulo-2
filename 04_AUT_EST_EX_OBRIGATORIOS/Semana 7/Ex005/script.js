let notasProvaGeral = []; 
let notasTrabalhoGeral = [];
let mediasGeral = []; 

let qntAlunosInputField; 
let div; 
let qtnAlunos;

let provaInput; 
let trabalhoInput; 

let h3

function g() {
    qntAlunosInputField = document.querySelector('#qtnAlunos');
    div = document.querySelector('#alunos');
    qtnAlunos = Number(qntAlunosInputField.value);

    for (let i=1; i <= qtnAlunos; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        h3 = document.createElement('h3'); 
        h3.innerHTML = `Aluno ${i}`;

        provaInput = document.createElement('input');
        trabalhoInput = document.createElement('input');

        provaInput.setAttribute('id', `notaProva${i}`);
        provaInput.setAttribute('class', 'col');
        provaInput.setAttribute('placeholder', 'Prova')
        trabalhoInput.setAttribute('id', `notaTrabalho${i}`);
        trabalhoInput.setAttribute('class', 'col');
        trabalhoInput.setAttribute('placeholder', 'Trabalho')
        
        row.appendChild(h3);
        row.appendChild(provaInput);
        row.appendChild(trabalhoInput);

        div.appendChild(row);
    }

    const button = document.createElement('button');
    button.innerHTML = 'calcular'
    button.setAttribute('onclick', 'calcular()');

    div.appendChild(button);

}

function calcular() {
    let divRes = document.querySelector('#resultado')

    for (let i = 1; i <= qtnAlunos; i++) {
        let provaValue = document.querySelector(`#notaProva${i}`).value;
        let trabalhoValue = document.querySelector(`#notaTrabalho${i}`).value;
    
        let provaInt = Number(provaValue);
        let trabalhoInt = Number(trabalhoValue);


        let media = ((provaInt * 2) + (trabalhoInt * 3)) / 5

        const p = document.createElement('p');
        p.innerHTML = `Média igual a: ${media}`;

        h3 = document.createElement('h3'); 
        h3.innerHTML = `Aluno ${i}`;

        divRes.appendChild(h3);
        divRes.appendChild(p);

        notasProvaGeral.push(provaInt);
        notasTrabalhoGeral.push(trabalhoInt);
        mediasGeral.push(media);
    }

    const somaMediasGeral = mediasGeral.reduce((partialSum, a) => partialSum + a, 0);
    const calculoMediaGeral = somaMediasGeral / qtnAlunos;
    
    const somaNotaProva = notasProvaGeral.reduce((partialSum, a) => partialSum + a, 0); 
    const  mediaProvas = somaNotaProva / qtnAlunos; 

    const somaNotaTrabalho = notasTrabalhoGeral.reduce((partialSum, a) => partialSum + a, 0); 
    const  mediaTrabalhos = somaNotaTrabalho / qtnAlunos; 

    divRes.innerHTML += `
        <h2> Média Geral </h2> 
        <p>${calculoMediaGeral}</p>

        <h2>Média das Provas</h2> 
        <p>${mediaProvas}</p>

        <h2>Média dos Trabalhos</h2> 
        <p>${mediaTrabalhos}</p>

        <div class="row">
            <div class="col">
                <h2>Menor nota das Provas</h2> 
                <p>${Math.min(...notasProvaGeral)}</p>
            </div>

            <div class="col">
                <h2>Maior nota das Provas</h2> 
                <p>${Math.max(...notasProvaGeral)}</p>
            </div>
            
        </div>

        <div class="row">
            <div class="col">
                <h2>Menor nota dos Trabalhos</h2> 
                <p>${Math.min(...notasTrabalhoGeral)}</p>
            </div>

            <div class="col">
                <h2>Maior nota dos Trabalhos</h2> 
                <p>${Math.max(...notasTrabalhoGeral)}</p>
            </div>
            
        </div>
        
    `
}
