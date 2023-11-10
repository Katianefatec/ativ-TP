"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var produtosCadastrados_1 = __importDefault(require("../negocio/produtosCadastrados"));
var compra_1 = __importDefault(require("../negocio/compra"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
var listagemProdutos = new listagemProdutos_1.default(produtosCadastrados_1.default);
var listagemClientes = new listagemClientes_1.default(empresa.getClientes, compra_1.default);
var cadastro = new cadastroCliente_1.default(listagemClientes);
var _loop_1 = function () {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Listar todos os produtos");
    console.log("4 - Listar todos os servi\u00E7os");
    console.log("5 - Listar todos os produtos e servi\u00E7os");
    console.log("6 - Listar top 10 clientes que mais consumiram produtos ou servi\u00E7os");
    console.log("7 - Listar produtos e servi\u00E7os mais consumidos");
    console.log("8 - Listar 10 clientes que menos consumiram produtos ou servi\u00E7os");
    console.log("9 - Listar 5 clientes que mais consumiram em valor");
    console.log("10 - Listar clientes por g\u00EAnero");
    console.log("11 - Listar produtos mais consumidos por g\u00EAnero");
    console.log("12 - Atualizar cliente");
    console.log("13 - Deletar cliente");
    console.log("14 - Realizar compra");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    var opcaoGenero = void 0;
    var genero = void 0;
    switch (opcao) {
        case 1:
            cadastro.cadastrar();
            break;
        case 2:
            listagemClientes.listar();
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
            listagemClientes.listarMaisConsumidos();
            break;
        case 8:
            listagemClientes.listarMenosConsumidores();
            break;
        case 9:
            listagemClientes.listarTop5ClientesPorValor();
            break;
        case 10:
            console.log("1 - Masculino");
            console.log("2 - Feminino");
            opcaoGenero = entrada.receberNumero("Por favor, escolha o g\u00EAnero que deseja listar: ");
            genero = '';
            switch (opcaoGenero) {
                case 1:
                    genero = 'Masculino';
                    break;
                case 2:
                    genero = 'Feminino';
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida.");
                    break;
            }
            if (genero) {
                listagemClientes.listarClientesPorGenero(genero);
            }
            break;
        case 11:
            console.log("1 - Masculino");
            console.log("2 - Feminino");
            opcaoGenero = entrada.receberNumero("Por favor, escolha o g\u00EAnero que deseja listar: ");
            genero = '';
            switch (opcaoGenero) {
                case 1:
                    genero = 'Masculino';
                    break;
                case 2:
                    genero = 'Feminino';
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida.");
                    break;
            }
            if (genero) {
                listagemClientes.listarProdutosMaisConsumidosPorGenero(genero);
            }
            break;
        case 14:
            var nomeCliente_1 = entrada.receberTexto("Por favor informe o nome do cliente: ");
            var cliente = empresa.getClientes.find(function (c) { return c.nome === nomeCliente_1; });
            if (!cliente) {
                console.log("Cliente n\u00E3o encontrado.");
                break;
            }
            var nomeProduto_1 = entrada.receberTexto("Por favor informe o nome do produto: ");
            var produto = produtosCadastrados_1.default.find(function (p) { return p.nome === nomeProduto_1; });
            if (!produto) {
                console.log("Produto n\u00E3o encontrado.");
                break;
            }
            compra_1.default.push({ cliente: cliente, produto: produto });
            console.log("Compra realizada com sucesso.");
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
};
while (execucao) {
    _loop_1();
}
