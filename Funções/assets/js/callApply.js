function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Bruno',
    idade: 20
}
const pessoa2 = {
    nome: 'Duda',
    idade: 28
}

console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.apply(pessoa2, [3]));