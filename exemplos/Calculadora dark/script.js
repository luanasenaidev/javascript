// Seleciona o elemento HTML com o id 'inputBox' e armazena-o na variável 'input'.
let input = document.getElementById('inputBox');

// Seleciona todos os elementos HTML do tipo 'button' e armazena-os em 'buttons'.
let buttons = document.querySelectorAll('button');

// Inicializa uma string vazia para armazenar a entrada do usuário.
let string = "";

// Converte a coleção de botões em um array para que possamos percorrer sobre eles.
let arr = Array.from(buttons);

// Percorre sobre cada botão no array 'arr'.
arr.forEach(button => {
    // Adiciona um ouvinte de eventos de clique a cada botão.
    button.addEventListener('click', (e) => {
        // Verifica se o texto dentro do botão clicado é '='.
        if(e.target.innerHTML == '=') {
            
            //  A funçaõ eval() é uma função JS que avalia e executa dinamicamnete o código. Calcula soma, exemplo eval("2 + 2") resultariua em 4.
            string = eval(string);
            // Define o valor da caixa de entrada 'input' como a nova string calculada.
            input.value = string;
        }
        // Verifica se o texto dentro do botão clicado é 'AC' (Clear All)
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })

})
