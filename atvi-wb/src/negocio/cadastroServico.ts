import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServicos extends Cadastro{
    private nomes : Array<Servico>
    private entrada: Entrada
    constructor(nome : Array<Servico>){
        super()
        this.nomes = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n Cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Insira o nome do serviço: `) 
        let preco = this.entrada.receberNumero(`Insira o preco do serviço: `)
        let servico = new Servico(nome, preco);
        //servico.nome = nome
        this.nomes.push(servico)
        console.log(`\n Cadastro concluído! \n`);
    }
}