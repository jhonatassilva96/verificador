function isFibonacci(num) {
    if (num === 0 || num === 1) return true;
    let a = 0, b = 1, next = a + b;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

function checkFibonacci() {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    if (isFibonacci(num)) {
        resultElement.textContent = `${num} pertence à sequência de Fibonacci.`;
    } else {
        resultElement.textContent = `${num} não pertence à sequência de Fibonacci.`;
    }
}
function checkLetter() {
    const text = document.getElementById('textInput').value;
    const count = (text.match(/a/gi) || []).length;
    const resultElement = document.getElementById('result');
    if (count > 0) {
        resultElement.textContent = `A letra 'a' aparece ${count} vezes na string.`;
    } else {
        resultElement.textContent = `A letra 'a' não foi encontrada na string.`;
    }}