function exercicioCondicionais01() {

    Swal.fire({

        title: 'Qual sua idade?',
        input: 'number',
        inputAttributes: {
            min: 0,
            max: 100,
            step: 1
        },
        inputPlaceholder: 'Digite sua idade...',
        showCancelButton: true,
        confirmButtonText: 'Verificar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {

        if (result.isDismissed) {
            return; // Usuário cancelou
        }

        let idade = result.value;

        if (idade === "" || isNaN(idade) || idade < 0 || idade > 100) {

            Swal.fire({

                title: 'Idade inválida!',
                text: 'Por favor, coloque uma idade válida entre 0 e 100 anos.',
                icon: 'warning'

            }).then(() => {

                exercicioCondicionais01(); // Chama a função de novo

            });

        } else if (idade >= 18) {
            
            Swal.fire({
                title: 'Maior de idade!',
                text: 'Você é maior de idade.',
                icon: 'success'
            });

        } else {

            Swal.fire({
                title: 'Menor de idade!',
                text: 'Você é menor de idade.',
                icon: 'info'
            });

        }
    });

}

function exercicioCondicionais02() {

    Swal.fire({

        title: 'Digite um número positivo ou negativo:',
        input: 'number',
        inputPlaceholder: 'Número...',
        showCancelButton: true,
        confirmButtonText: 'Verificar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {

        if (result.isDismissed) {
            return; // Usuário cancelou
        }

        let numero = result.value;

        if (numero === "" || isNaN(numero)) {

            Swal.fire({

                title: 'Número inválido!',
                text: 'Por favor, digite um número válido.',
                icon: 'warning'

            }).then(() => {
                exercicioCondicionais02(); // Repetir a função
            });

        } else if (numero > 0) {

            Swal.fire({
                title: 'Número positivo',
                text: `O número ${numero} é positivo.`,
                icon: 'success'
            });

        } else if (numero < 0) {

            Swal.fire({
                title: 'Número negativo',
                text: `O número ${numero} é negativo.`,
                icon: 'info'
            });

        } else {

            Swal.fire({
                title: 'Zero',
                text: 'O número é zero, que não é nem positivo nem negativo, se você não sabia.',
                icon: 'question'
            });

        }
    });
}

function exercicioCondicionais03() {

    Swal.fire({

        title: 'Qual a nota do aluno?',
        input: 'number',
        inputAttributes: {
            min: 0,
            max: 100,
            step: 1
        },
        inputPlaceholder: 'Digite a nota (0 a 100)',
        showCancelButton: true,
        confirmButtonText: 'Verificar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isDismissed) {
            return; // Usuário cancelou
        }

        let nota = result.value;

        if (nota === "" || isNaN(nota) || nota < 0 || nota > 100) {

            Swal.fire({

                title: 'Nota inválida!',
                text: 'Por favor, digite uma nota real entre 0 e 100.',
                icon: 'warning'
            }).then(() => {
                exercicioCondicionais03(); // Repetir input
            });

        } else if (nota >= 70) {

            Swal.fire({

                title: 'Aprovado!',
                text: 'Parabéns! Você passou com nota boa.',
                icon: 'success'

            });

        } else if (nota >= 60) {

            Swal.fire({

                title: 'Aprovado com uma ajudinha!',
                text: 'Você passou, mas precisa se dedicar mais.',
                icon: 'info'

            });

        } else if (nota >= 50) {

            Swal.fire({

                title: 'Recuperação!',
                text: 'Vai precisar estudar um pouco mais para passar.',
                icon: 'warning'

            });

        } else {

            Swal.fire({

                title: 'Reprovado!',
                text: 'Infelizmente, você não passou.',
                icon: 'error'
                
            });
        }
    });
}
