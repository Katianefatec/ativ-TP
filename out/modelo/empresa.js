"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.adicionarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Empresa.prototype.removerCliente = function (cliente) {
        var index = this.clientes.indexOf(cliente);
        if (index > -1) {
            this.clientes.splice(index, 1);
        }
    };
    return Empresa;
}());
exports.default = Empresa;
