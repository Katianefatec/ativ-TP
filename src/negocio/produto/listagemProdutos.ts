import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import { clientescadastrados } from "../cliente/clientesCadastrados";
import compras from '../compra/compra';
import Listagem from "../listagem";
import produtoscadastrados from "./produtosCadastrados";
import servicosCadastrados from "./servicosCadastrados";

export default class ListagemProdutos extends Listagem {
    private produto: Array<Produto>
    private servico: Array<Servico>
    private clientes: Array<Cliente>;
    private compras: Array<any>;
    
    
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produtoscadastrados;
        this.servico = servicosCadastrados;
        this.compras = compras; 
        this.clientes = clientescadastrados;
    }

    public getProdutos(): Produto[] {
        return this.produto;
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

    public listarMaisConsumidos(): void {
        let consumoProdutosServicos = new Map<Produto | Servico, number>();
    
        this.compras.forEach(compra => {
            let produtoServico = compra.produto || compra.servico;
            let quantidade = consumoProdutosServicos.get(produtoServico) || 0;
            consumoProdutosServicos.set(produtoServico, quantidade + 1);
        });
    
        let produtosServicosOrdenados = Array.from(consumoProdutosServicos).sort((a, b) => b[1] - a[1]);
    
        console.log(`\nProdutos e serviços mais consumidos:`);
        produtosServicosOrdenados.forEach((par, index) => {
            let produtoServico = par[0];
            let quantidade = par[1];
            console.log(`${index + 1}. Produto/Serviço: ${produtoServico.nome}, Quantidade consumida: ${quantidade}`);
        });
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidosPorGenero(genero: string): void {
        let contadorProdutos: { [produto: string]: number } = {};
        let comprasDoGenero = compras.filter(compra => compra.cliente.genero === genero);
    
        comprasDoGenero.forEach(compra => {
            let produto = compra.produto;
            if (produto) {
                if (contadorProdutos[produto.nome]) {
                    contadorProdutos[produto.nome]++;
                } else {
                    contadorProdutos[produto.nome] = 1;
                }
            }
        });
    
        let produtosOrdenados = Object.entries(contadorProdutos).sort((a, b) => b[1] - a[1]);
    
        console.log(`\nProdutos mais consumidos por clientes do gênero ${genero}:`);
        produtosOrdenados.forEach(([produto, contagem]) => {
            console.log(`Produto: ${produto}, Quantidade: ${contagem}`);
        });
    }
   
}