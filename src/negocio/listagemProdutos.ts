import Produto from "../modelo/produto";
import produtoscadastrados from "./produtosCadastrados";
import Servico from "../modelo/servico";
import servicosCadastrados from "./servicosCadastrados";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produto: Array<Produto>
    private servico: Array<Servico>
    
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produtoscadastrados;
        this.servico = servicosCadastrados;
    }
    
    public adicionarProduto(produto: Produto): void {
        this.produto.push(produto);
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produto.forEach((produto) => {
            console.log(`Nome: ${produto.nome}`);
            console.log(`Valor: ${produto.valor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarServicos(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servico.forEach((servico) => {
            console.log(`Nome: ${servico.nome}`);
            console.log(`Valor: ${servico.valor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarProdutosEServicos(): void {
        this.listar();
        this.listarServicos();
    }
}