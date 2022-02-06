import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
    // #saldo = 0; é uma proposta de campo privado mais ainda não foi aceita

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas ++;
    }

    get saldo(){
        return this._saldo;
    }

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