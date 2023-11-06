"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var servico_1 = __importDefault(require("../modelo/servico"));
var servicosCadastrados = [
    new servico_1.default("Corte de cabelo", 50),
    new servico_1.default("Coloração", 80),
    new servico_1.default("Hidratação", 60),
    new servico_1.default("Manicure", 30),
    new servico_1.default("Pedicure", 40),
    new servico_1.default("Maquiagem", 70),
    new servico_1.default("Depilação", 50),
    new servico_1.default("Limpeza de pele", 60),
    new servico_1.default("Massagem", 100),
    new servico_1.default("Penteado", 80),
    new servico_1.default("Sobrancelha", 40),
    new servico_1.default("Barba", 30),
];
exports.default = servicosCadastrados;
