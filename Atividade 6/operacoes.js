var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));

var soma = num1 + num2;
var subtracao = num1 - num2;
var produto = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

alert(
    "Resultados:\n\n" +
    "Soma: " + soma + "\n" +
    "Subtração (1º pelo 2º): " + subtracao + "\n" +
    "Produto (Multiplicação): " + produto + "\n" +
    "Divisão (1º pelo 2º): " + divisao + "\n" +
    "Resto da divisão: " + resto
);