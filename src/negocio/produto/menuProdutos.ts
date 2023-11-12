import Entrada from "../../io/entrada";
import CadastroCliente from "../cliente/cadastroCliente";
import { clientescadastrados as clientes } from '../cliente/clientesCadastrados';
import ListagemClientes from "../cliente/listagemClientes";
import compras from '../compra/compra';
import ListagemProdutos from "./listagemProdutos";
import produtoscadastrados from "./produtosCadastrados";

export default function menuProdutos() {
    let execucaoProdutos = true;
    let entrada = new Entrada();
    let listagemProdutos = new ListagemProdutos(produtoscadastrados);
    let listagemClientes = new ListagemClientes(clientes, compras);
    let cadastro = new CadastroCliente(listagemClientes);
    let produto;

    while (execucaoProdutos) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar produto`);
        console.log(`2 - Atualizar produto`);
        console.log(`3 - Deletar produto`);
        console.log(`4 - Listar produtos`);
        console.log(`5 - Listar serviços`);
        console.log(`6 - Listar produtos e serviços`);
        console.log(`0 - Voltar ao menu principal`);

        let opcaoProdutos = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (opcaoProdutos) {
            case 1:
                let nomeProduto = entrada.receberTexto(`Por favor, informe o nome do produto: `);
                let valorProduto = entrada.receberNumero(`Por favor, informe o valor do produto: `);
                console.log(`Nome do produto: ${produto.nome}`);
                console.log(`Valor do produto: ${produto.valor}`);
                listagemProdutos.adicionarProduto(produto);
                break;
            
            case 2:
                console.log("Produtos disponíveis:");
                listagemProdutos.getProdutos().forEach((produto, index) => {
                    console.log(`${index + 1}. ${produto.nome} - ${produto.valor}`);
                });
                let nomeProdutoAtualizar = entrada.receberTexto(`Por favor, informe o nome do produto que deseja atualizar: `);
                produto = listagemProdutos.getProdutos().find(p => p.nome === nomeProdutoAtualizar);
                if (produto) {
                    let novoNome = entrada.receberTexto(`Por favor informe o novo nome do produto: `)
                    let novoValor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                    produto.atualizarProduto(novoNome, novoValor);
                } else {
                    console.log(`Produto não encontrado.`);
                }
                break;
            case 3:
                console.log("Produtos disponíveis:");
                listagemProdutos.getProdutos().forEach((produto, index) => {
                    console.log(`${index + 1}. ${produto.nome} - ${produto.valor}`);
                });
                let nomeProdutoDeletar = entrada.receberTexto("Por favor, informe o nome do produto que deseja deletar: ");
                let produtoIndex = listagemProdutos.getProdutos().findIndex(function (p) { return p.nome === nomeProdutoDeletar; });
                if (produtoIndex !== -1) {
                    listagemProdutos.getProdutos().splice(produtoIndex, 1);
                    console.log("Produto deletado com sucesso.");
                } else {
                    console.log("Produto não encontrado.");
                }
                break;

            case 4:
                let produtosOrdenados = listagemProdutos.getProdutos().sort((a, b) => a.nome.localeCompare(b.nome));
                produtosOrdenados.forEach((produto, index) => {
                    console.log(`${index + 1}. ${produto.nome} - ${produto.valor}`);
                });
                break;

            case 5:
                listagemProdutos.listarServicos();

            case 6:
                listagemProdutos.listarProdutosEServicos();
                break;
            case 0:
                execucaoProdutos = false;
                break;
            default:
                console.log(`Opção inválida.`);
                break;
        }
    }
}