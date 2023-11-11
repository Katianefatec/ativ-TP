import Entrada from "../io/entrada";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import { clientescadastrados as clientes } from '../negocio/cliente/clientesCadastrados'; // Importe os clientes
import ListagemClientes from "../negocio/cliente/listagemClientes";
import compras from '../negocio/compra/compra';
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import produtoscadastrados from "../negocio/produto/produtosCadastrados";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

let execucao = true
let listagemProdutos = new ListagemProdutos(produtoscadastrados);
let listagemClientes = new ListagemClientes(clientes, compras);
let cadastro = new CadastroCliente(listagemClientes);

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Listar todos os produtos`);
    console.log(`4 - Listar todos os serviços`); 
    console.log(`5 - Listar todos os produtos e serviços`);
    console.log(`6 - Listar top 10 clientes que mais consumiram produtos ou serviços`);
    console.log(`7 - Listar produtos e serviços mais consumidos`); 
    console.log(`8 - Listar 10 clientes que menos consumiram produtos ou serviços`);
    console.log(`9 - Listar 5 clientes que mais consumiram em valor`);
    console.log(`10 - Listar clientes por gênero`);
    console.log(`11 - Listar produtos mais consumidos por gênero`);
    console.log(`12 - Atualizar cliente`);
    console.log(`13 - Deletar cliente`);
    console.log(`14 - Atualizar produto`);
    console.log(`15 - Deletar produto`);
    
    
      
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    let opcaoGenero: number;
    let genero: string;
    
    
    

    switch (opcao) {
        case 1:
            cadastro.cadastrar()
            break;
        case 2:
            listagemClientes.listar()
            break;
        case 3: 
            listagemProdutos.listar();
            break;
        case 4: 
            listagemProdutos.listarServicos();
            break;
        case 5: 
            listagemProdutos.listarProdutosEServicos();
            break;
            
        case 6:
            listagemClientes.listarTop10Clientes();
            break;   
        case 7:
            listagemProdutos.listarMaisConsumidos();
            break;    
        
            case 8:
            listagemClientes.listarMenosConsumidores();
            break;

        case 9:
            listagemClientes.listarTop5ClientesPorValor();
            break;
        
        case 10:
            console.log(`1 - Masculino`);
            console.log(`2 - Feminino`);
            opcaoGenero = entrada.receberNumero(`Por favor, escolha o gênero que deseja listar: `);
            genero = '';
            
            switch (opcaoGenero) {
                case 1:
                    genero = 'Masculino';
                    break;
                case 2:
                    genero = 'Feminino';
                    break;
                default:
                    console.log(`Opção inválida.`);
                    break;
            }
            if (genero) {
                listagemClientes.listarClientesPorGenero(genero);
            }
            break;
        case 11:
            console.log(`1 - Masculino`);
            console.log(`2 - Feminino`);
            opcaoGenero = entrada.receberNumero(`Por favor, escolha o gênero que deseja listar: `);
            genero = '';
            switch (opcaoGenero) {
                case 1:
                    genero = 'Masculino';
                    break;
                case 2:
                    genero = 'Feminino';
                    break;
                default:
                    console.log(`Opção inválida.`);
                    break;
            }
            if (genero) {
                listagemProdutos.listarProdutosMaisConsumidosPorGenero(genero);
            }
            break;
        
        case 12:
            let nomeClienteAtualizar= entrada.receberTexto(`Por favor, informe o nome do cliente que deseja atualizar: `);
            let cliente = listagemClientes.getClientes().find(c => c.nome === nomeClienteAtualizar);
            if (cliente) {
                let novoNome = entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
                let novoNomeSocial = entrada.receberTexto(`Por favor informe o novo nome social do cliente: `)
                let novoValorCPF = entrada.receberTexto(`Por favor informe o novo número do cpf: `);
                let novaDataCPF = entrada.receberTexto(`Por favor informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let novoGenero = '';
                while (novoGenero !== '1' && novoGenero !== '2') {
                    novoGenero = entrada.receberTexto(`Por favor informe o novo gênero do cliente (1 - Masculino, 2 - Feminino): `)}
                let partesData = novaDataCPF.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let novoCPF = new CPF(novoValorCPF, dataEmissao);
                let novoDDD = entrada.receberTexto(`Por favor informe o novo DDD do telefone do cliente: `);
                let novoNumero = entrada.receberTexto(`Por favor informe o novo número do telefone do cliente: `);
                let novoTelefone = new Telefone(novoDDD, novoNumero);
                cliente.atualizarCliente(novoNome, novoNomeSocial, novoCPF, novoGenero, novoTelefone);
            } else {
                console.log(`Cliente não encontrado.`);
            }
            break;
        case 13:
            let nomeClienteDeletar = entrada.receberTexto("Por favor, informe o nome do cliente que deseja deletar: ");
            let clienteIndex = listagemClientes.getClientes().findIndex(function (c) { return c.nome === nomeClienteDeletar; });
            if (clienteIndex !== -1) {
                listagemClientes.getClientes().splice(clienteIndex, 1);
                console.log("Cliente deletado com sucesso.");
            } else {
                console.log("Cliente não encontrado.");
            }
            break;
                   
        case 14:
            console.log("Produtos disponíveis:");
            listagemProdutos.getProdutos().forEach((produto, index) => {
                console.log(`${index + 1}. ${produto.nome} - ${produto.valor}`);
            });
            let nomeProdutoAtualizar = entrada.receberTexto(`Por favor, informe o nome do produto que deseja atualizar: `);
            let produto = listagemProdutos.getProdutos().find(p => p.nome === nomeProdutoAtualizar);
            if (produto) {
                let novoNome = entrada.receberTexto(`Por favor informe o novo nome do produto: `)
                let novoValor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                produto.atualizarProduto(novoNome, novoValor);
            } else {
                console.log(`Produto não encontrado.`);
            }
            break;
        case 15:
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
              
    
        case 0:
            execucao = false;
            break;
    }
}