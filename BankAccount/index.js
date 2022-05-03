import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor  = new Diretor("Geraldo", 10000, 45645645687);
diretor.cadastrarSenha("123");
const gerente  = new Gerente("Eduardo", 5000, 78978978954);
gerente.cadastrarSenha("123456");
const cliente = new Cliente("Lais", 78945612355, "456");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado,clienteEstaLogado);
