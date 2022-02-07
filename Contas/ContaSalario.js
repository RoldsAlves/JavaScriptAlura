import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 1000);
    }

    sacar(valor) {
        const taxa = 1.01;
        this._sacar(valor, taxa);
    }
}