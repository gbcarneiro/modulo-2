function changeIT() {
    let value1 = document.querySelector("#value1");
    let value2 = document.querySelector("#value2");

    let valueONE = value1.value

    value1.value = value2.value
    value2.value = valueONE
}