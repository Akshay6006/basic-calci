const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === 'π') {
        display.value += Math.PI.toFixed(8);
    } else if (value === 'e') {
        display.value += Math.E.toFixed(8);
    } else if (value === '√(') {
        display.value += 'Math.sqrt(';
    } else if (value === 'sin(') {
        display.value += 'Math.sin(';
    } else if (value === 'cos(') {
        display.value += 'Math.cos(';
    } else if (value === 'tan(') {
        display.value += 'Math.tan(';
    } else if (value === 'log(') {
        display.value += 'Math.log10(';
    } else if (value === 'ln(') {
        display.value += 'Math.log(';
    } else if (value === '^') {
        display.value += '**';
    } else if (value === '!') {
        display.value += '!';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateResult() {
    try {
        let expression = display.value;

        // Handle factorials
        expression = expression.replace(/(\d+)!/g, (match, number) => {
            return factorial(parseInt(number));
        });

        // Evaluate the expression
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
