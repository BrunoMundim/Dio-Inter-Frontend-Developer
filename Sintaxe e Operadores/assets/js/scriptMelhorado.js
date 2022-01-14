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

        //Primeira frase
        let comparar = n1 === n2;
        let saoIguais = '';

        if(!comparar){
            saoIguais = 'não';
        }

        //Segunda frase
        const SOMA = n1 + n2
        let resultado10 = 'menor que';
        let resultado20 = 'menor que';

        const COMPARA10 = SOMA > 10;
        const COMPARA20 = SOMA > 20;
        const IGUAL10 = SOMA == 10;
        const IGUAL20 = SOMA == 20;
        
        if(COMPARA10){
            resultado10 = 'maior que';
        }
        if(COMPARA20){
            resultado20 = 'maior que';
        }
        if(IGUAL10){
            resultado10 = 'igual a';
        }
        if(IGUAL20){
            resultado20 = 'igual a';
        }

        // Criando a frase
        alert(`Os números ${n1} e ${n2} ${saoIguais} são iguais. Sua soma é ${SOMA}, que é ${resultado10} 10 e ${resultado20} 20.`);
    }
    novaOperacao();
}
checkNumbers();







