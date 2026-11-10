var escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
    alert("Escolha inválida! Recarregue a página e digite 'pedra', 'papel' ou 'tesoura'.");
} else {
    var aleatorio = Math.random();
    var escolhaComputador = "";

    if (aleatorio < 0.33) {
        escolhaComputador = "pedra";
    } else if (aleatorio < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    var resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultado = "Parabéns, você venceu!";
    } else {
        resultado = "O computador venceu!";
    }

    alert(
        "Sua escolha: " + escolhaUsuario + "\n" +
        "Escolha do computador: " + escolhaComputador + "\n\n" +
        resultado
    );
}