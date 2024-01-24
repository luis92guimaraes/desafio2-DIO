const vitorias = Number(prompt("Insira a quantidade de vitórias do seu Herói: "));
const derrotas = Number(prompt("Insira a quantidade de derrotas do seu Herói: "));

function calculaSaldo(vitorias , derrotas){
    return vitorias - derrotas
}
let rank = calculaSaldo(vitorias , derrotas);

let nivel = ""
if (rank < 10){
    nivel = "Ferro"
} else if (rank >= 11 && rank <= 20){
    nivel = "Bronze"
} else if (rank >= 21 && rank <= 50){
    nivel = "Prata"
} else if (rank >= 51 && rank <= 80){
    nivel = "Ouro"
} else if (rank >= 81 && rank <= 90){
    nivel = "Diamante"
} else if (rank >= 91 && rank <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

confirm("O Herói tem um saldo de vitórias de: " + rank + " e está no level: " + nivel)