"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientesCadastrados_1 = require("./clientesCadastrados");
var produtosCadastrados_1 = __importDefault(require("./produtosCadastrados"));
var servicosCadastrados_1 = __importDefault(require("./servicosCadastrados"));
var compras = [
    { cliente: clientesCadastrados_1.clientescadastrados[0], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.clientescadastrados[1], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[2], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.clientescadastrados[3], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.clientescadastrados[4], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.clientescadastrados[5], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.clientescadastrados[6], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.clientescadastrados[7], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.clientescadastrados[8], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[9], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.clientescadastrados[10], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.clientescadastrados[11], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.clientescadastrados[12], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.clientescadastrados[13], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.clientescadastrados[14], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.clientescadastrados[15], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[16], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.clientescadastrados[17], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.clientescadastrados[8], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.clientescadastrados[19], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.clientescadastrados[20], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.clientescadastrados[21], produto: produtosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.clientescadastrados[22], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[23], produto: produtosCadastrados_1.default[2] },
    { cliente: clientesCadastrados_1.clientescadastrados[25], produto: produtosCadastrados_1.default[3] },
    { cliente: clientesCadastrados_1.clientescadastrados[24], produto: produtosCadastrados_1.default[4] },
    { cliente: clientesCadastrados_1.clientescadastrados[26], produto: produtosCadastrados_1.default[5] },
    { cliente: clientesCadastrados_1.clientescadastrados[27], produto: produtosCadastrados_1.default[6] },
    { cliente: clientesCadastrados_1.clientescadastrados[28], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[29], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[30], produto: produtosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[6], produto: produtosCadastrados_1.default[7] },
    { cliente: clientesCadastrados_1.clientescadastrados[6], produto: produtosCadastrados_1.default[8] },
    { cliente: clientesCadastrados_1.clientescadastrados[6], produto: produtosCadastrados_1.default[9] },
    { cliente: clientesCadastrados_1.clientescadastrados[0], produto: produtosCadastrados_1.default[10] },
    { cliente: clientesCadastrados_1.clientescadastrados[0], produto: produtosCadastrados_1.default[10] },
    { cliente: clientesCadastrados_1.clientescadastrados[1], produto: produtosCadastrados_1.default[11] },
    { cliente: clientesCadastrados_1.clientescadastrados[1], produto: produtosCadastrados_1.default[12] },
    { cliente: clientesCadastrados_1.clientescadastrados[7], produto: produtosCadastrados_1.default[13] },
    { cliente: clientesCadastrados_1.clientescadastrados[8], servico: servicosCadastrados_1.default[0] },
    { cliente: clientesCadastrados_1.clientescadastrados[9], servico: servicosCadastrados_1.default[1] },
    { cliente: clientesCadastrados_1.clientescadastrados[10], servico: servicosCadastrados_1.default[2] },
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
