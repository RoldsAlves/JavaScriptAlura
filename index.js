import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Rodolfo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteRodolfo = new ContaCorrente();
contaCorrenteRodolfo.agencia = 1001;
contaCorrenteRodolfo.numeroConta = 12345;
contaCorrenteRodolfo.cliente = cliente1;
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
contaCorrenteRodolfo.depositar(100);
console.log(contaCorrenteRodolfo._saldo);
const valorSacado = contaCorrenteRodolfo.sacar(50);
console.log(valorSacado);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1001;
conta2.numeroConta = 67890;

contaCorrenteRodolfo.transferir(200, conta2);

console.log(contaCorrenteRodolfo);
console.log(conta2);
