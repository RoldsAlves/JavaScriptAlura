import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Rodolfo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente1);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);
const conta2 = new ContaPoupanca(150, cliente2, 1001);
conta2.sacar(50);

const conta3 = new ContaSalario(cliente1);
conta3.depositar(1000);
conta3.sacar(100);

console.log(conta1);
console.log(conta2);
console.log(conta3);