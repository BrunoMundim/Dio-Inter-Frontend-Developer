// Number() - Converte valores em números
// Prompt() - Para registrar entradas de usuário
// Alert() - Para mostrar mensagem ao usuário
// Template Strings - Para usar Strings junto com expressões

function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira(%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao > 6){
        alert('Operação inválida!');
        calculadora();
    } else{

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2){
        alert('Parâmetros inválidos!')
        calculadora();
    } else{

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }
    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }
    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
    }

    function novaOperacao(){
        let opcao = Number(prompt('Deseja fazer outra operação? \n 1 - Sim\n 2 - Não'));
        if (opcao == 1){
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais');
        } else {
            alert ('Digite uma opção válida')
            novaOperacao();
        }
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if(operacao == 3){
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
       divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    }
    novaOperacao();
    }
    }
}

calculadora();
