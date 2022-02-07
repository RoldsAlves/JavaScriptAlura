import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Rodolfo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente1);

const conta1 = new Conta(0, cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);
const conta2 = new ContaPoupanca(150, cliente2, 1001);

console.log(conta1);
console.log(conta2);