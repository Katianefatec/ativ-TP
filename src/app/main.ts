import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos"; 
import produtoscadastrados from "../negocio/produtosCadastrados";
import compras from '../negocio/compra';

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

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
    
      
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    let listagemProdutos = new ListagemProdutos(produtoscadastrados);
    let listagemClientes = new ListagemClientes(empresa.getClientes, compras);
    let opcaoGenero: number;
    let genero: string;
    
    

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            listagemClientes = new ListagemClientes(empresa.getClientes, compras);
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
            listagemClientes = new ListagemClientes(empresa.getClientes, compras);
            listagemClientes.listarTop10Clientes();
            break;   
        case 7:
            listagemClientes.listarMaisConsumidos();
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
                listagemClientes.listarProdutosMaisConsumidosPorGenero(genero);
            }
            break;
            
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}