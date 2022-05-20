function calculate() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let countOpt = document.querySelector('select');

    switch (countOpt.value) {
        case 'sum':
            res = num1 + num2
            break; 
        case 'subt':
            res = num1 - num2
            break;
        case 'times': 
            res = num1 * num2 
            break; 
        case 'division': 
            res = num1 / num2; 
            break; 
        case 'intDivision': 
            res = Math.floor(num1 / num2); 
            break; 
        case 'rest': 
            res = num1 % num2; 
            break;
    }

}