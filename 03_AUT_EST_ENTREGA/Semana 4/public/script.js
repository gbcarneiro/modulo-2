
function showStudies() {
    var divhidden = $("#studiesContent")
    var row = $(".row")

    if (divhidden.attr("class") == "normal") {
        divhidden.attr("class", "hiddenStContent")

    } else {
        divhidden.attr("class", "normal")
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