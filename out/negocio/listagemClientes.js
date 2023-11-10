"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("./listagem"));
var clientesCadastrados_1 = require("./clientesCadastrados");
var entrada_1 = __importDefault(require("../io/entrada"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes, compras) {
        var _this = _super.call(this) || this;
        _this.clientes = clientesCadastrados_1.clientescadastrados;
        _this.compras = compras;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ListagemClientes.prototype.getClientes = function () {
        return this.clientes;
    };
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        var clientesOrdenados = this.clientes.sort(function (a, b) { return a.nome.localeCompare(b.nome); });
        clientesOrdenados.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
            console.log("Nome social: ".concat(cliente.nomeSocial));
            console.log("CPF: ".concat(cliente.getCpf.getValor));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarTop10Clientes = function () {
        var consumoClientes = new Map();
        this.compras.forEach(function (compra) {
            var cliente = compra.cliente;
            var quantidade = consumoClientes.get(cliente) || 0;
            consumoClientes.set(cliente, quantidade + 1);
        });
        var clientesOrdenados = Array.from(consumoClientes).sort(function (a, b) { return b[1] - a[1]; });
        console.log("\nTop 10 clientes que mais consumiram produtos ou servi\u00E7os:");
        clientesOrdenados.slice(0, 10).forEach(function (par, index) {
            var cliente = par[0];
            var quantidade = par[1];
            console.log("".concat(index + 1, ". Nome: ").concat(cliente.nome, ", Quantidade consumida: ").concat(quantidade));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarMaisConsumidos = function () {
        var consumoProdutosServicos = new Map();
        this.compras.forEach(function (compra) {
            var produtoServico = compra.produto || compra.servico;
            var quantidade = consumoProdutosServicos.get(produtoServico) || 0;
            consumoProdutosServicos.set(produtoServico, quantidade + 1);
        });
        var produtosServicosOrdenados = Array.from(consumoProdutosServicos).sort(function (a, b) { return b[1] - a[1]; });
        console.log("\nProdutos e servi\u00E7os mais consumidos:");
        produtosServicosOrdenados.forEach(function (par, index) {
            var produtoServico = par[0];
            var quantidade = par[1];
            console.log("".concat(index + 1, ". Produto/Servi\u00E7o: ").concat(produtoServico.nome, ", Quantidade consumida: ").concat(quantidade));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarMenosConsumidores = function () {
        var consumoClientes = new Map();
        this.clientes.forEach(function (cliente) {
            consumoClientes.set(cliente, 0);
        });
        this.compras.forEach(function (compra) {
            var cliente = compra.cliente;
            var quantidade = consumoClientes.get(cliente) || 0;
            consumoClientes.set(cliente, quantidade + 1);
        });
        var clientesOrdenados = Array.from(consumoClientes).sort(function (a, b) { return a[1] - b[1]; });
        console.log("\nClientes que menos consumiram produtos ou servi\u00E7os:");
        clientesOrdenados.slice(0, 10).forEach(function (par, index) {
            var cliente = par[0];
            var quantidade = par[1];
            console.log("".concat(index + 1, ". Cliente: ").concat(cliente.nome, ", Quantidade consumida: ").concat(quantidade));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarTop5ClientesPorValor = function () {
        var valorConsumidoClientes = new Map();
        this.compras.forEach(function (compra) {
            var cliente = compra.cliente;
            var valor = valorConsumidoClientes.get(cliente) || 0;
            if (compra.produto) {
                valorConsumidoClientes.set(cliente, valor + compra.produto.valor);
            }
            else if (compra.servico) {
                valorConsumidoClientes.set(cliente, valor + compra.servico.valor);
            }
        });
        var clientesOrdenados = Array.from(valorConsumidoClientes).sort(function (a, b) { return b[1] - a[1]; });
        console.log("\nTop 5 clientes que mais consumiram em valor:");
        clientesOrdenados.slice(0, 5).forEach(function (par, index) {
            var cliente = par[0];
            var valor = par[1];
            console.log("".concat(index + 1, ". Cliente: ").concat(cliente.nome, ", Valor consumido: ").concat(valor));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarClientesPorGenero = function (genero) {
        var clientesOrdenados = this.clientes.sort(function (a, b) { return a.nome.localeCompare(b.nome); });
        var clientesDoGenero = clientesOrdenados.filter(function (cliente) { return cliente.genero === genero; });
        console.log("\nClientes do g\u00EAnero ".concat(genero, ":"));
        clientesDoGenero.forEach(function (cliente, index) {
            console.log("".concat(index + 1, ". Cliente: ").concat(cliente.nome));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarProdutosMaisConsumidosPorGenero = function (genero) {
        var contadorProdutos = {};
        var clientesDoGenero = this.clientes.filter(function (cliente) { return cliente.genero === genero; });
        clientesDoGenero.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                if (contadorProdutos[produto.nome]) {
                    contadorProdutos[produto.nome]++;
                }
                else {
                    contadorProdutos[produto.nome] = 1;
                }
            });
            cliente.getServicosConsumidos.forEach(function (servico) {
                if (contadorProdutos[servico.nome]) {
                    contadorProdutos[servico.nome]++;
                }
                else {
                    contadorProdutos[servico.nome] = 1;
                }
            });
        });
        var produtosOrdenados = Object.entries(contadorProdutos).sort(function (a, b) { return b[1] - a[1]; });
        console.log("\nProdutos mais consumidos por clientes do g\u00EAnero ".concat(genero, ":"));
        produtosOrdenados.forEach(function (_a) {
            var produto = _a[0], contagem = _a[1];
            console.log("Produto: ".concat(produto, ", Quantidade: ").concat(contagem));
        });
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
