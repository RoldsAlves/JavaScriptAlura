class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    numeroConta;
    agencia;
    // #saldo = 0; é uma proposta de campo privado mais ainda não foi aceita
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            // console.log(this.#saldo);
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Rodolfo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteRodolfo = new ContaCorrente();
contaCorrenteRodolfo.agencia = 1001;
contaCorrenteRodolfo.numeroConta = 12345;
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
const valorSacado = contaCorrenteRodolfo.sacar(50);
console.log(valorSacado);