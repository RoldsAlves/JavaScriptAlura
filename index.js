import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Rodolfo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente1);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);
new ContaCorrente(1001, cliente2);
new ContaCorrente(1001, cliente2);
new ContaCorrente(1001, cliente2);
new ContaCorrente(1001, cliente2);
new ContaCorrente(1001, cliente2);

console.log(ContaCorrente.numeroDeContas);
