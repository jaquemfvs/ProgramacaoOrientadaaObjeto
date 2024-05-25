import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizar from "./atualizar";

export default class AtualizarProdutos extends Atualizar{
    private produtos:Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nInício da atualização do produto`);
        let busca = this.entrada.receberTexto(`Insira o nome do produto: `);
        this.produtos.forEach(produto =>{
            if (produto.nome == busca){
                console.log(`Produto encontrado!`);
                let nome = this.entrada.receberTexto(`Insira o novo nome do Produto: `)
                produto.nome = nome
               
                console.log(`\nCadastro atualizado :)\n`);
            }
            else if(cont == this.produtos.length){
                console.log(`\n Produto não encontrado! \n`); 
            }
            else{
                cont++
            }
                      
        })
        
        
    }
}