var jogador1 = 2;
var jogador2 = 5;
var placar;

jogador1 >= 0 && jogador2 >=0 
? console.log('Jogadores válidos!') 
: console.log('Jogadores inválidos'); 
// if ternário. Digita as condições, depois um ? seguido do que deve ser feito se for verdadeiro, depois um : seguido do que deve ser feito se for falso

if (jogador1 > 0 && jogador1 > jogador2) {
    placar = jogador1 > jogador2;
} else if(jogador2 > 0 && jogador2 > jogador1) {
    placar = jogador2 > jogador1;
} else if(jogador1 < 0 || jogador2 <0) {
    placar = 'Invalido';
} else {
    placar = 'Empate';
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    case placar = 'Invalido':
        break;
    default:
        console.log('Empate!')      
}

jogador1 >= 0 && jogador2 >=0 ? console.log('Placar final: ' + jogador1 + ' - ' + jogador2) : console.log('Placar inválido!');