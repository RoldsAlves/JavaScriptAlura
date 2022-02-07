import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodolfo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Lorena", 5000, 83364499900);
gerente.cadastrarSenha("123456");
const cliente = new Cliente("Lais", 79946513100, "467898");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "467898");


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);