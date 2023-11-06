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
while (execucao) {
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
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    var listagemProdutos = new listagemProdutos_1.default(produtosCadastrados_1.default);
    var listagemClientes = new listagemClientes_1.default(empresa.getClientes, compra_1.default);
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            listagemClientes = new listagemClientes_1.default(empresa.getClientes, compra_1.default);
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
            listagemClientes = new listagemClientes_1.default(empresa.getClientes, compra_1.default);
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
            var opcaoGenero = entrada.receberNumero("Por favor, escolha o g\u00EAnero que deseja listar: ");
            var genero = '';
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
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
