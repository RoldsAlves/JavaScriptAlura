export class ContaCorrente {
    numeroConta;
    agencia;
    cliente;
    _saldo = 0;
    // #saldo = 0; é uma proposta de campo privado mais ainda não foi aceita

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}