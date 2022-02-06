class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    numeroConta;
    agencia;
    saldo;
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
contaCorrenteRodolfo.saldo = 0;
console.log(contaCorrenteRodolfo.saldo);
contaCorrenteRodolfo.saldo = 100;
console.log(contaCorrenteRodolfo.saldo);
let valorSacado = 200;
if(contaCorrenteRodolfo.saldo >= valorSacado){
    contaCorrenteRodolfo.saldo = valorSacado;
}
console.log(contaCorrenteRodolfo.saldo);