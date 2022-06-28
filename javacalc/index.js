const num1 = parseFloat(prompt('Enter first number:'));
const num2 = parseFloat(prompt('Enter second number:'));

const operator = prompt('Enter operator(+,-,/,*)');
let result;
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '*') {
        result = num1 * num2;
    }
    else {
        alert("Invalid operator!");
    }
    alert(num1 + operator + num2 + '=' + result);
