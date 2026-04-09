function executar(opcao) {

    
    if (opcao === 1) {
        let numero = Number(prompt("Digite um número natural:"));

        function imprimirImpares(n) {
            let impares = [];

            for (let i = 1; i <= n; i += 2) {
                impares.push(i);
            }

            return impares;
        }

        function verificarParOuImpar(n) {
            if (n % 2 === 0) {
                return "Par";
            } else {
                return "Ímpar";
            }
        }

        alert("Ímpares menores ou iguais a " + numero + ": " + imprimirImpares(numero).join(", "));
        alert("O número " + numero + " é " + verificarParOuImpar(numero));
    }

    
    else if (opcao === 2) {
        function lerVetor() {
            let vetor = [];

            for (let i = 0; i < 10; i++) {
                vetor.push(Number(prompt("Digite o número da posição " + i + ":")));
            }

            return vetor;
        }

        function mostrarInicioFim(vetor) {
            return vetor.join(", ");
        }

        function mostrarFimInicio(vetor) {
            return vetor.slice().reverse().join(", ");
        }

        let vetor = lerVetor();

        alert("Vetor do início para o fim: " + mostrarInicioFim(vetor));
        alert("Vetor do fim para o início: " + mostrarFimInicio(vetor));
    }

    
    else if (opcao === 3) {
        function lerMatriz() {
            let matriz = [];

            for (let i = 0; i < 3; i++) {
                matriz[i] = [];
                for (let j = 0; j < 3; j++) {
                    matriz[i][j] = Number(prompt("Digite o valor da posição [" + i + "][" + j + "]"));
                }
            }

            return matriz;
        }

        function mostrarMatriz(matriz) {
            let texto = "";

            for (let i = 0; i < 3; i++) {
                texto += matriz[i].join(" ") + "\n";
            }

            return texto;
        }

        function colunasPares(matriz) {
            let valores = [];

            for (let j = 0; j < 3; j += 2) {
                for (let i = 0; i < 3; i++) {
                    valores.push(matriz[i][j]);
                }
            }

            return valores;
        }

        function linhasImpares(matriz) {
            let valores = [];

            for (let i = 1; i < 3; i += 2) {
                for (let j = 0; j < 3; j++) {
                    valores.push(matriz[i][j]);
                }
            }

            return valores;
        }

        let matriz = lerMatriz();

        alert("Matriz:\n" + mostrarMatriz(matriz));
        alert("Elementos das colunas pares: " + colunasPares(matriz).join(", "));
        alert("Elementos das linhas ímpares: " + linhasImpares(matriz).join(", "));
    }
}