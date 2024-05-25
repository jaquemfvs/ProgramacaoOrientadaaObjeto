import chalk from "chalk";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumoCliente from "../negocio/cadastroConsumoCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import CadastroServicos from "../negocio/cadastroServico";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemComusumoGen from "../negocio/listagem/listagemComusumoGen";
import ListagemConsumoMais from "../negocio/listagem/listagemConsumoMais";
import ListagemConsumoMenos from "../negocio/listagem/listagemConsumoMenos";
import ListagemComusumoValor from "../negocio/listagem/listagemConsumoValor";
import ListagemGenero from "../negocio/listagem/listagemGenero";
import ListagemProdutosOuServicosMais from "../negocio/listagem/listagemProdutoOuServicoMais";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServicos";
import { clearInterval } from "timers";
import cliente from "../modelo/cliente";

console.log(chalk.greenBright(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`))
let empresa = new Empresa()

let cli1 = new Cliente('Natalia Gomes', 'Nat G', new CPF('45869545454',new Date(25,11,1975)), 'Feminino')
let cli2 = new Cliente('Ana Santos', 'Ana S', new CPF('89428745454',new Date(15,3,1985)), 'Feminino')
let cli3 = new Cliente('Luiz Couto', 'Luiz C', new CPF('49954542453',new Date(18,7,1988)), 'Masculino')
let cli4 = new Cliente('Isabela Santos', 'Isa S', new CPF('7349822354',new Date(24,8,1982)), 'Feminino')
let cli5 = new Cliente('João Silva', 'João S', new CPF('28422154454',new Date(3,2,1968)), 'Masculino')
let cli6 = new Cliente('Pietra Almeida', 'Pietra A', new CPF('39687475554',new Date(8,12,1990)), 'Feminino')
let cli7 = new Cliente('Heloisa Cabral', 'Heloisa C', new CPF('14432577456',new Date(27,7,1986)), 'Feminino')
let cli8 = new Cliente('Luiza Ferreira', 'Luiza F', new CPF('52874245451',new Date(30,1,1992)), 'Feminino')
let cli9 = new Cliente('Iago Chaves', 'Iago C', new CPF('11459685458',new Date(14,8,1955)), 'Masculino')
let cli10 = new Cliente('Noemia Carvalho', 'Noemia C', new CPF('31458455895',new Date(7,5,19881)), 'Feminino')
let cli11 = new Cliente('Dalva Veloso', 'Dalva V', new CPF('56559685895',new Date(29,6,1992)), 'Feminino')
cli1.addRg(new RG('58951348',new Date(25,11,2005)))
cli2.addRg(new RG('82122146',new Date(25,11,2005)))
cli3.addRg(new RG('77554727',new Date(25,11,2005)))
cli4.addRg(new RG('53985527',new Date(25,11,2005)))
cli5.addRg(new RG('71464584',new Date(25,11,2005)))
cli6.addRg(new RG('35245464',new Date(25,11,2005)))
cli7.addRg(new RG('87222654',new Date(25,11,2005)))
cli8.addRg(new RG('44854668',new Date(25,11,2005)))
cli9.addRg(new RG('52458576',new Date(25,11,2005)))
cli10.addRg(new RG('42655597',new Date(25,11,2005)))
cli11.addRg(new RG('89855597',new Date(25,11,2005)))

empresa.getClientes.push(cli1)
empresa.getClientes.push(cli2)
empresa.getClientes.push(cli3)
empresa.getClientes.push(cli4)
empresa.getClientes.push(cli5)
empresa.getClientes.push(cli6)
empresa.getClientes.push(cli7)
empresa.getClientes.push(cli8)
empresa.getClientes.push(cli9)
empresa.getClientes.push(cli10)
empresa.getClientes.push(cli11)

let servico1 = new Servico("Máscara ácido hialuronico", 32)
let servico2 = new Servico("Máscara de retinol", 45)
let servico3 = new Servico("Extração de cravos", 75)
let servico4 = new Servico("Design de sobrancelha", 45)
let servico5 = new Servico("Hidratação capilar com ácido hialuronico", 68)
let servico6 = new Servico("Pedicure e Manicure", 40)

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)

let produto1 = new Produto("Shampoo",12)
let produto2 = new Produto("Condicionador",20)
let produto3 = new Produto("Kit Shampoo e cONDICIONADOR", 30)
let produto4 = new Produto("Sabonete Esfoliante", 8)
let produto5 = new Produto("Óleo Corporal", 18)
let produto6 = new Produto("Máscara Facial", 25)

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)

cli1.addProduto(produto1)
cli2.addProduto(produto2)
cli3.addProduto(produto3)
cli4.addProduto(produto4)
cli5.addProduto(produto5)
cli6.addProduto(produto6)
cli7.addProduto(produto3)
cli8.addProduto(produto6)
cli9.addProduto(produto1)
cli9.addProduto(produto3)
cli11.addProduto(produto2)

cli1.addServico(servico1)
cli2.addServico(servico2)
cli3.addServico(servico6)
cli4.addServico(servico2)
cli5.addServico(servico5)
cli6.addServico(servico3)
cli7.addServico(servico4)
cli8.addServico(servico5)
cli9.addServico(servico1)
cli11.addServico(servico1)

let execucao = true

while (execucao) {
    console.log(chalk.blackBright(`Opções:`));
    console.log(chalk.blueBright(`1 - Cadastrar cliente`));
    console.log(chalk.blueBright(`2 - Listar todos os clientes`));
    console.log(chalk.blueBright(`3 - Atualizar clientes`));
    console.log(chalk.blueBright(`4 - Excluir clientes`));
    console.log(chalk.blueBright(`5 - Cadastrar Produto`));
    console.log(chalk.blueBright(`6 - Listar todos os produtos`));
    console.log(chalk.blueBright(`7 - Atualizar produtos`));
    console.log(chalk.blueBright(`8 - Excluir produtos`));
    console.log(chalk.blueBright(`9 - Cadastrar Serviços`));
    console.log(chalk.blueBright(`10 - Listar todos os Serviços`));
    console.log(chalk.blueBright(`11 - Atualizar serviços`));
    console.log(chalk.blueBright(`12 - Excluir serviços`));
    console.log(chalk.blueBright(`13 - Listagem por gênero`));
    console.log(chalk.blueBright(`14 - Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk.blueBright(`15 - Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk.blueBright(`16 - Listagem do consumo dos produtos ou serviços menos consumidos`));
    console.log(chalk.blueBright(`17 - Listagem do produto ou serviço mais consumido`));
    console.log(chalk.blueBright(`18 - Listagem do produto ou serviço mais consumido por gênero`));
    console.log(chalk.blueBright(`19 - Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk.red(`0 - Sair`));

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarSer = new CadastroServicos(empresa.getServicos)
            cadastrarSer.cadastrar()
            break
        case 10:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break
        case 11:
            let atualizaSer = new AtualizarServicos(empresa.getServicos)
            atualizaSer.atualiza()
            break
        case 12:
            let excluirSer = new ExcluirServico(empresa.getProdutos)
            excluirSer.Exclui()
            break
        case 13:
            let listagemGem = new ListagemGenero(empresa)
            listagemGem.listar()
            break
        case 14:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes,empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 15:
            let listagem10mais = new ListagemConsumoMais(empresa.getClientes)
            listagem10mais.listar()
            break
        case 16:
            let listagem10menos = new ListagemConsumoMenos(empresa.getClientes)
            listagem10menos.listar()
            break
        case 17:
            let listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais(empresa)
            listagemProdutosOuServicosMais.listar()
            break
        case 18:
            let listagemConsumoGem = new ListagemComusumoGen(empresa)
            listagemConsumoGem.listar()
            break
        case 19:
            let listagemConsumoValor = new ListagemComusumoValor(empresa)
            listagemConsumoValor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}