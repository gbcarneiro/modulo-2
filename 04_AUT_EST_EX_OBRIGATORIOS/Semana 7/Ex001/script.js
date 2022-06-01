function plusOne() {
    let input = document.querySelector("#value");

    let newValue = Number(input.value) + 1;

    input.value = newValue;
}

function minusOne() {
    let input = document.querySelector("#value");

    let newValue = Number(input.value) - 1;

    input.value = newValue;
}