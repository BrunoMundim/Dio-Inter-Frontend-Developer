function checkNumbers(n1, n2){  
    var n1 = Number(prompt('Escreva o primeiro número:'));
    var n2 = Number(prompt('Escreva o segundo número:'));
    
    function novaOperacao(){
        var opcao = Number(prompt('Quer fazer uma nova comparação?\n 1 - Sim\n 2 - Não'));
        opcao == 1 ? checkNumbers() : alert('Até mais!');
    }

    if(!n1 || !n2){
        alert('Não é um número, tente novamente.')
        checkNumbers();
    } else {
        var soma = n1 + n2;
        const saoIguais = n1 === n2;
        if(saoIguais === true && soma > 10 && soma > 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' são iguais. A soma dos números é ' + soma + ', que é maior que 10 e maior que 20.');
        } else if(saoIguais === true && soma < 10){
            alert('Os números ' + n1 + ' e ' + n2 + ' são iguais. A soma dos números é ' + soma + ', que é menor que 10 e menor que 20.');
        } else if(saoIguais === true && soma > 10 && soma < 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' são iguais. A soma dos números é ' + soma + ', que é maior que 10 e menor que 20.');
        } else if(saoIguais === true && soma == 10){
            alert('Os números ' + n1 + ' e ' + n2 + ' são iguais. A soma dos números é ' + soma + ', que é igual a 10 e menor que 20.');
        } else if(saoIguais === true && soma == 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' são iguais. A soma dos números é ' + soma + ', que é maior que 10 e igual que 20.');
        } else if(saoIguais === false && soma > 10 && soma > 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais. A soma dos números é ' + soma + ', que é maior que 10 e maior que 20.');
        } else if(saoIguais === false && soma < 10) {
            alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais. A soma dos números é ' + soma + ', que é menor que 10 e menor que 20.');
        } else if(saoIguais === false && soma > 10 && soma < 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais. A soma dos números é ' + soma + ', que é maior que 10 e menor que 20.');
        } else if(saoIguais === false && soma == 10){
            alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais. A soma dos números é ' + soma + ', que é igual a 10 e menor que 20.');
        } else if(saoIguais === false && soma == 20){
            alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais. A soma dos números é ' + soma + ', que é maior que 10 e igual que 20.');
        } else{
            alert('Boo');
        }
    }
    novaOperacao();
}

checkNumbers();