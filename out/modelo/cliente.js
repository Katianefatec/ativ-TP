"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.quantidadeConsumida = 0;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQuantidadeConsumida", {
        get: function () {
            return this.produtosConsumidos.length + this.servicosConsumidos.length;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.comprarProduto = function (produto) {
        this.produtosConsumidos.push(produto);
        this.quantidadeConsumida++;
    };
    Cliente.prototype.contratarServico = function (servico) {
        this.servicosConsumidos.push(servico);
        this.quantidadeConsumida++;
    };
    Cliente.prototype.atualizarCliente = function (nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
    };
    Cliente.prototype.deletarProdutoConsumido = function (produto) {
        var index = this.produtosConsumidos.indexOf(produto);
        if (index > -1) {
            this.produtosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    };
    Cliente.prototype.deletarServicoConsumido = function (servico) {
        var index = this.servicosConsumidos.indexOf(servico);
        if (index > -1) {
            this.servicosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    };
    return Cliente;
}());
exports.default = Cliente;
