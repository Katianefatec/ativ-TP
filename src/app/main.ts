import Entrada from "../io/entrada";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import { clientescadastrados as clientes } from '../negocio/cliente/clientesCadastrados';
import ListagemClientes from "../negocio/cliente/listagemClientes";
import menuClientes from "../negocio/cliente/menuClientes";
import compras from '../negocio/compra/compra';
import menuRelatorios from "../negocio/menuRelatorios";
import ListagemProdutos from "../negocio/produtosEservicos/listagemProdutosEServicos";
import menuProdutos from "../negocio/produtosEservicos/menuProdutos";
import produtoscadastrados from "../negocio/produtosEservicos/produtosCadastrados";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

let execucao = true
let listagemProdutos = new ListagemProdutos(produtoscadastrados);
let listagemClientes = new ListagemClientes(clientes, compras);
let cadastro = new CadastroCliente(listagemClientes);

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Menu Clientes`);
    console.log(`2 - Menu Produtos e Serviços`);
    console.log(`3 - Menu Relatórios`); 
    // console.log(`4 - Menu Compras`);    
      
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    let opcaoGenero: number;
    let genero: string;
    
    
    

    switch (opcao) {
        case 1:
            menuClientes();
            break;
        case 2:
            menuProdutos();
            break;
        case 3: 
            menuRelatorios();
            break;
        case 0:
            console.log("Saindo...");
            execucao = false;
            break;
        default:
            console.log(`Opção inválida.`);
            break;
    }
}