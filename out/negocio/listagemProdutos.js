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
var produtosCadastrados_1 = __importDefault(require("./produtosCadastrados"));
var servicosCadastrados_1 = __importDefault(require("./servicosCadastrados"));
var listagem_1 = __importDefault(require("./listagem"));
var ListagemProdutos = /** @class */ (function (_super) {
    __extends(ListagemProdutos, _super);
    function ListagemProdutos(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produtosCadastrados_1.default;
        _this.servico = servicosCadastrados_1.default;
        return _this;
    }
    ListagemProdutos.prototype.adicionarProduto = function (produto) {
        this.produto.push(produto);
    };
    ListagemProdutos.prototype.listar = function () {
        console.log("\nLista de todos os produtos:");
        this.produto.forEach(function (produto) {
            console.log("Nome: ".concat(produto.nome));
            console.log("Valor: ".concat(produto.valor));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.listarServicos = function () {
        console.log("\nLista de todos os servi\u00E7os:");
        this.servico.forEach(function (servico) {
            console.log("Nome: ".concat(servico.nome));
            console.log("Valor: ".concat(servico.valor));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.listarProdutosEServicos = function () {
        this.listar();
        this.listarServicos();
    };
    return ListagemProdutos;
}(listagem_1.default));
exports.default = ListagemProdutos;
