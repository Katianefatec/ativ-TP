"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientesCadastrados_1 = __importDefault(require("./clientesCadastrados"));
var produtosCadastrados_1 = __importDefault(require("./produtosCadastrados"));
var servicosCadastrados_1 = __importDefault(require("./servicosCadastrados"));
var compras = [
    { cliente: clientesCadastrados_1.default[0], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.default[1], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[2], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.default[3], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.default[4], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.default[5], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.default[6], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.default[7], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.default[8], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[9], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.default[10], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.default[11], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.default[12], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.default[13], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.default[14], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.default[15], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[16], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.default[17], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.default[8], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.default[19], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.default[20], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.default[21], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.default[22], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[23], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.default[25], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.default[24], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.default[26], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.default[27], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.default[28], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[29], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[30], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[6], produto: produtosCadastrados_1.default[7] },
    { cliente: clientesCadastrados_1.default[6], produto: produtosCadastrados_1.default[8] },
    { cliente: clientesCadastrados_1.default[6], produto: produtosCadastrados_1.default[9] },
    { cliente: clientesCadastrados_1.default[0], produto: produtosCadastrados_1.default[10] },
    { cliente: clientesCadastrados_1.default[0], produto: produtosCadastrados_1.default[10] },
    { cliente: clientesCadastrados_1.default[1], produto: produtosCadastrados_1.default[11] },
    { cliente: clientesCadastrados_1.default[1], produto: produtosCadastrados_1.default[12] },
    { cliente: clientesCadastrados_1.default[7], produto: produtosCadastrados_1.default[13] },
    { cliente: clientesCadastrados_1.default[8], servico: servicosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.default[9], servico: servicosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.default[10], servico: servicosCadastrados_1.default[2] },
];
compras.forEach(function (compra) {
    if (compra.produto) {
        compra.cliente.comprarProduto(compra.produto);
    }
    else if (compra.servico) {
        compra.cliente.contratarServico(compra.servico);
    }
});
exports.default = compras;
