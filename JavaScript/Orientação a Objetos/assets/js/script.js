class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(novoSaldo){
        this._saldo = novoSaldo;
    }
    get saldo(){
        return this._saldo;
    }

    sacar(valorSacado){
        if(valorSacado <= this._saldo){
            this._saldo = this._saldo - valorSacado;
            return `O valor sacado foi de R$ ${valorSacado},00`;
        }
        return 'Saldo insuficiente!';
    }

    depositar(valorDepositado){
        if(valorDepositado > 0){
            this._saldo += valorDepositado;
            return `O valor depositado foi de R$ ${valorDepositado},00`;
        }
        return 'O valor depositado deve ser maior que 0!';
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
        this._saldo = saldo;
    }
    set cartaoCredito(limiteCartao){
        this.cartaoCredito = limiteCartao
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero);
        this.tipo = 'conta poupança';
        this._saldo = saldo; 
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero);
        this.tipo = 'conta universitaria'; 
        this._saldo = saldo; 
    }

    sacar(valorSacado){
        if(valorSacado <= this._saldo){
            if(valorSacado > 500){
                return 'Não é possível sacar mais que 500 reais por vez!'
            }
            this._saldo = this._saldo - valorSacado;
            return `O valor sacado foi de R$ ${valorSacado},00`;
        }
        return 'Saldo insuficiente!';
    }
}

const minhaConta = new contaCorrente (1, 221, true, 2000);
const contaUni = new contaUniversitaria (2, 112, 100)