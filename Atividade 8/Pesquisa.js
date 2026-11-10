var somaIdade = 0;
var idadeMaisVelha = -Infinity;
var idadeMaisNova = Infinity;
var qtdPessimo = 0;
var qtdOtimoBom = 0;
var qtdMulheres = 0;
var qtdHomens = 0;
var qtdOutros = 0;

var totalPessoas = 3; 

for (var i = 1; i <= totalPessoas; i++) {
    alert("Entrevistado " + i + " de " + totalPessoas);

    var idade = parseInt(prompt("Digite a idade:"));
    var sexo = prompt("Digite o sexo (F - Feminino, M - Masculino, O - Outros):").toUpperCase();
    var opiniao = parseInt(prompt("Digite a opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo):"));

    somaIdade += idade;

    if (idade > idadeMaisVelha) {
        idadeMaisVelha = idade;
    }
    if (idade < idadeMaisNova) {
        idadeMaisNova = idade;
    }

    if (opiniao === 1) {
        qtdPessimo++;
    }

    if (opiniao === 4 || opiniao === 3) {
        qtdOtimoBom++;
    }

    if (sexo === "F") {
        qtdMulheres++;
    } else if (sexo === "M") {
        qtdHomens++;
    } else {
        qtdOutros++;
    }
}

var mediaIdade = somaIdade / totalPessoas;
var porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

alert(
    "=== RESULTADOS DA PESQUISA ===" + "\n\n" +
    "• Média da idade: " + mediaIdade.toFixed(2) + " anos\n" +
    "• Idade da pessoa mais velha: " + idadeMaisVelha + " anos\n" +
    "• Idade da pessoa mais nova: " + idadeMaisNova + " anos\n" +
    "• Quantidade que respondeu péssimo: " + qtdPessimo + "\n" +
    "• Porcentagem que respondeu ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%\n" +
    "• Mulheres: " + qtdMulheres + "\n" +
    "• Homens: " + qtdHomens + "\n" +
    "• Outros: " + qtdOutros
);