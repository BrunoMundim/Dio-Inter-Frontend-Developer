const array = [1, 2, 3, 4];

// Utilizando Map

function multiplicarPorVariavel(array, variavel){
    return array.map(function(item){
        return item * variavel;
    });
}

// Utilizando Map com This

const MACA = {
    preco: 2,
}

function multiplicarPorThis(array, thisArg){
    return array.map(function(item){
        return item * this.preco;
    }, thisArg);
} 

console.log(multiplicarPorThis(array, MACA));
console.log(multiplicarPorVariavel(array, 5));

// Utilizando Filter

let pares = array.filter(function(num){
    if(num % 2 === 0){
        return num;
    }
});

console.log(pares);

// Utilizando Reduce para somar

const REDUCER = (previousValue, currentValue) => previousValue + currentValue;

console.log(array.reduce(REDUCER));

// Utilizando Reduce para resolver desafio compras

function calculaSaldoFinal(listaPrecos, saldoDisponivel){
    if(typeof saldoDisponivel !== 'number' || !listaPrecos || !listaPrecos.length) return 'Envie todos os valores!';

    const saldoRestante = listaPrecos.reduce((acumulador, listaPrecos) => acumulador - listaPrecos.preco, saldoDisponivel);

    if(saldoRestante >= 0){
        return `O saldo restante será de ${saldoRestante} reais.`
    }   return 'Saldo insuficiente!'
}

listaPrecos = [
    {
        preco: 400,
        nome: 'teclado',
    },
    {
        preco: 150,
        nome: 'mouse',
    },
    {
        preco: 320,
        nome: 'fone',
    },
];

let saldoDisponivel = 100;

console.log(saldoRestante(listaPrecos, saldoDisponivel));