"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var servico_1 = __importDefault(require("../modelo/servico"));
var servicosCadastrados = [
    new servico_1.default("Corte de cabelo feminino", 80),
    new servico_1.default("Corte de cabelo masculino", 50),
    new servico_1.default("Tratamento para quedas de cabelo", 40),
    new servico_1.default("Coloração", 80),
    new servico_1.default("Hidratação", 60),
    new servico_1.default("Manicure", 30),
    new servico_1.default("Pedicure", 40),
    new servico_1.default("Maquiagem", 70),
    new servico_1.default("Depilação", 50),
    new servico_1.default("Limpeza de pele", 60),
    new servico_1.default("Massagem", 100),
    new servico_1.default("Penteado", 80),
    new servico_1.default("Design de sobrancelha", 40),
    new servico_1.default("Modelagem e corte de barba", 30),
    new servico_1.default("Aplicação de unhas de gel", 80),
    new servico_1.default("Remoção de rugas", 500),
    new servico_1.default("Remoção de manchas na pele", 300),
    new servico_1.default("Aplicação de botox", 200),
    new servico_1.default("Tratamento para emagrecimento e redução de medias", 150),
];
exports.default = servicosCadastrados;
