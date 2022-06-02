//Há uma função para cada área do currículo, e foi utilizado `let` ao invés de var, para que o nome fosse mantido durante todo o projeto sem nenhum problema
function showStudies() {
    let divId = $("#studiesContent") //Aqui entra a parte do JQuery para coletar o item com a id studiesContent
  
    // Algoritmo para mudar a classe da div no html, fazendo com que seu display esteja como none, ou normal
    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenStContent")

    } else {
        divId.attr("class", "normal")
    }
}


function showExperience() {
    let divId = $("#expContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenExpContent")

    } else {
        divId.attr("class", "normal")

    }
}


function showLanguages() {
    let divId = $("#langContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenLangContent")

    } else {
        divId.attr("class", "normal")

    }
}


// rotas 
function loadData() {
    var xhttp = new XMLHttpRequest() 

    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(xhttp.responseText)

            $('#nome').html(res.Nome)
            $('#titulo').html(res.Titulo)
            $('#nacionalidade').html(res.Nacionalidade)
            $('#contato').html(res.Email)
            
        }
        
    }
    
    xhttp.open('GET', 'http://localhost:3001/dados', false)
    xhttp.send()
    
}