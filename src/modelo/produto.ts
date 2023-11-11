import Servico from "./servico";

export default class Produto {
    public nome: string;
    public valor: number;
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>
    public quantidadeConsumida: number = 0;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    public atualizarProduto(novoNome: string, novoValor: number): void {
        this.nome = novoNome;
        this.valor = novoValor;
        
    }    
    public comprarProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        this.quantidadeConsumida++;
    }
    
    public deletarProdutoConsumido(produto: Produto): void {
        const index = this.produtosConsumidos.indexOf(produto);
        if (index > -1) {
            this.produtosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    }

    public deletarServicoConsumido(servico: Servico): void {
        const index = this.servicosConsumidos.indexOf(servico);
        if (index > -1) {
            this.servicosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    }
}
