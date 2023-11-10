import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import { clientescadastrados } from './clientesCadastrados';
import Entrada from "../io/entrada";
import compras from '../negocio/compra';
import CPF from "../modelo/cpf";

export default class ListagemClientes extends Listagem {
    private compras: Array<any>; 
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, compras: Array<any>) { 
        super();
        this.clientes = clientescadastrados; 
        this.compras = compras; 
        this.entrada = new Entrada();
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

  
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        let clientesOrdenados = this.clientes.sort((a, b) => a.nome.localeCompare(b.nome));

        clientesOrdenados.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
}
    public listarTop10Clientes(): void {
        let consumoClientes = new Map<Cliente, number>();

        this.compras.forEach(compra => {
            let cliente = compra.cliente;
            let quantidade = consumoClientes.get(cliente) || 0;
            consumoClientes.set(cliente, quantidade + 1);
        });

        let clientesOrdenados = Array.from(consumoClientes).sort((a, b) => b[1] - a[1]);

        console.log(`\nTop 10 clientes que mais consumiram produtos ou serviços:`);
        clientesOrdenados.slice(0, 10).forEach((par, index) => {
            let cliente = par[0];
            let quantidade = par[1];
            console.log(`${index + 1}. Nome: ${cliente.nome}, Quantidade consumida: ${quantidade}`);
        });
        console.log(`\n`);
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

    public listarMenosConsumidores(): void {
        let consumoClientes = new Map<Cliente, number>();
    
        this.compras.forEach(compra => {
            let cliente = compra.cliente;
            let quantidade = consumoClientes.get(cliente) || 0;
            consumoClientes.set(cliente, quantidade + 1);
        });
    
        let clientesOrdenados = Array.from(consumoClientes).sort((a, b) => a[1] - b[1]);
    
        console.log(`\nClientes que menos consumiram produtos ou serviços:`);
        clientesOrdenados.slice(0, 10).forEach((par, index) => {
            let cliente = par[0];
            let quantidade = par[1];
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade consumida: ${quantidade}`);
        });
        console.log(`\n`);
    }

    public listarTop5ClientesPorValor(): void {
        let valorConsumidoClientes = new Map<Cliente, number>();
    
        this.compras.forEach(compra => {
            let cliente = compra.cliente;
            let valor = valorConsumidoClientes.get(cliente) || 0;
            if (compra.produto) {
                valorConsumidoClientes.set(cliente, valor + compra.produto.valor);
            } else if (compra.servico) {
                valorConsumidoClientes.set(cliente, valor + compra.servico.valor);
            }
        });
    
        let clientesOrdenados = Array.from(valorConsumidoClientes).sort((a, b) => b[1] - a[1]);
    
        console.log(`\nTop 5 clientes que mais consumiram em valor:`);
        clientesOrdenados.slice(0, 5).forEach((par, index) => {
            let cliente = par[0];
            let valor = par[1];
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor consumido: ${valor}`);
        });
        console.log(`\n`);
    }

    public listarClientesPorGenero(genero: string): void {
        let clientesOrdenados = this.clientes.sort((a, b) => a.nome.localeCompare(b.nome));
        let clientesDoGenero = clientesOrdenados.filter(cliente => cliente.genero === genero);
    
        console.log(`\nClientes do gênero ${genero}:`);
        clientesDoGenero.forEach((cliente, index) => {
            console.log(`${index + 1}. Cliente: ${cliente.nome}`);
        });
        console.log(`\n`);
    }
    public listarProdutosMaisConsumidosPorGenero(genero: string): void {
        let contadorProdutos: { [produto: string]: number } = {};
        let clientesDoGenero = this.clientes.filter(cliente => cliente.genero === genero);
    
        clientesDoGenero.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (contadorProdutos[produto.nome]) {
                    contadorProdutos[produto.nome]++;
                } else {
                    contadorProdutos[produto.nome] = 1;
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (contadorProdutos[servico.nome]) {
                    contadorProdutos[servico.nome]++;
                } else {
                    contadorProdutos[servico.nome] = 1;
                }
            });
        });
    
        let produtosOrdenados = Object.entries(contadorProdutos).sort((a, b) => b[1] - a[1]);
    
        console.log(`\nProdutos mais consumidos por clientes do gênero ${genero}:`);
        produtosOrdenados.forEach(([produto, contagem]) => {
            console.log(`Produto: ${produto}, Quantidade: ${contagem}`);
        });
    }
    

    
}

    



    