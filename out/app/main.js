"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var produtosCadastrados_1 = __importDefault(require("../negocio/produtosCadastrados"));
var compra_1 = __importDefault(require("../negocio/compra"));
var clientesCadastrados_1 = require("../negocio/clientesCadastrados"); // Importe os clientes
var cpf_1 = __importDefault(require("../modelo/cpf"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var execucao = true;
var listagemProdutos = new listagemProdutos_1.default(produtosCadastrados_1.default);
var listagemClientes = new listagemClientes_1.default(clientesCadastrados_1.clientescadastrados, compra_1.default);
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
        case 12:
            var nomeClienteAtualizar_1 = entrada.receberTexto("Por favor, informe o nome do cliente que deseja atualizar: ");
            var cliente = listagemClientes.getClientes().find(function (c) { return c.nome === nomeClienteAtualizar_1; });
            if (cliente) {
                var novoNome = entrada.receberTexto("Por favor informe o novo nome do cliente: ");
                var novoNomeSocial = entrada.receberTexto("Por favor informe o novo nome social do cliente: ");
                var novoValorCPF = entrada.receberTexto("Por favor informe o novo n\u00FAmero do cpf: ");
                var novaDataCPF = entrada.receberTexto("Por favor informe a nova data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
                var novoGenero = '';
                while (novoGenero !== '1' && novoGenero !== '2') {
                    novoGenero = entrada.receberTexto("Por favor informe o novo g\u00EAnero do cliente (1 - Masculino, 2 - Feminino): ");
                }
                var partesData = novaDataCPF.split('/');
                var ano = new Number(partesData[2].valueOf()).valueOf();
                var mes = new Number(partesData[1].valueOf()).valueOf();
                var dia = new Number(partesData[0].valueOf()).valueOf();
                var dataEmissao = new Date(ano, mes, dia);
                var novoCPF = new cpf_1.default(novoValorCPF, dataEmissao);
                cliente.atualizarCliente(novoNome, novoNomeSocial, novoCPF, novoGenero);
            }
            else {
                console.log("Cliente n\u00E3o encontrado.");
            }
            break;
        case 13:
            var nomeClienteDeletar_1 = entrada.receberTexto("Por favor, informe o nome do cliente que deseja deletar: ");
            var clienteIndex = listagemClientes.getClientes().findIndex(function (c) { return c.nome === nomeClienteDeletar_1; });
            if (clienteIndex !== -1) {
                listagemClientes.getClientes().splice(clienteIndex, 1);
                console.log("Cliente deletado com sucesso.");
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;
        case 0:
            execucao = false;
            break;
    }
};
while (execucao) {
    _loop_1();
}
