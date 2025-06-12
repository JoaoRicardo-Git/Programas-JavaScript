function exercicioCondicionais01() {

    let idade = prompt("Qual sua idade?");

    if (idade === null) {
        return;
    }

    if (idade == "" || isNaN(idade) || idade < 0 || idade > 100) {
        
        alert("coloque uma idade válida entre 0 e 100 anos.");
        return exercicioCondicionais01(); // Chama a função novamente para solicitar a idade

    }

    if (idade >= 18) {

        alert("Você é maior de idade.");

    } else {

        alert("Você é menor de idade.");

    }

}

function exercicioCondicionais02() {

    let numero = prompt("Digite um número positivo ou negativo:");

    if (numero === null) {
        return;
    }

    if (numero == "" || isNaN(numero)) {
        
        alert("Por favor, digite um número válido.");
        return exercicioCondicionais02(); // Chama a função novamente para solicitar o número

    }

    if (numero > 0) {

        alert("O número " + numero + " é positivo.");

    } else if (numero < 0) {

        alert("O número " + numero + " é negativo.");

    } else {

        alert("O número é zero, que não é nem positivo nem negativo, se você nao sabia.");

    }

}

function exercicioCondicionais03() {

   let nota = prompt ("Qual a nota do aluno?");

    if (nota === null) {
         return;
    }

    if (nota == "" || isNaN(nota) || nota < 0 || nota > 100) {
        
        alert("Por favor, digite uma nota real.");
        return exercicioCondicionais03(); // Chama a função novamente para solicitar a nota

    }

    if (nota >= 70) {

        alert("Aprovado!");

    } else if (nota >= 60) {

        alert("Aprovado com uma ajudinha!");

    } else if (nota >= 50) {

        alert("Recuperação!");

    } else {

        alert("Reprovado!");

    }

}