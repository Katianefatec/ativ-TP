"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = __importDefault(require("./cliente"));
var cpf_1 = __importDefault(require("./cpf"));
var clientescadastrados = [
    new cliente_1.default("João", "Jonh", new cpf_1.default("22222222222", new Date())),
    new cliente_1.default("Maria", "Mary", new cpf_1.default("33333333333", new Date())),
    new cliente_1.default("Pedro", "Pedro", new cpf_1.default("44444444444", new Date())),
    new cliente_1.default("Ana", "Aninha", new cpf_1.default("55555555555", new Date())),
    new cliente_1.default("Paulo", "Paula", new cpf_1.default("66666666666", new Date())),
    new cliente_1.default("Carlos", "Carlos", new cpf_1.default("77777777777", new Date())),
    new cliente_1.default("Lucas", "Lucas", new cpf_1.default("88888888888", new Date())),
    new cliente_1.default("Joaquim", "Joaquim", new cpf_1.default("99999999999", new Date())),
    new cliente_1.default("Bruno", "Bruno", new cpf_1.default("10101010101", new Date())),
    new cliente_1.default("Gustavo", "Gustavo", new cpf_1.default("12121212121", new Date())),
    new cliente_1.default("Guilherme", "Guilherme", new cpf_1.default("13131313131", new Date())),
    new cliente_1.default("Rafael", "Rafael", new cpf_1.default("14141414141", new Date())),
    new cliente_1.default("Vitor", "Vitor", new cpf_1.default("15151515151", new Date())),
    new cliente_1.default("Felipe", "Felipe", new cpf_1.default("16161616161", new Date())),
    new cliente_1.default("Gabriel", "Gabriel", new cpf_1.default("17171717171", new Date())),
    new cliente_1.default("Thiago", "Thiago", new cpf_1.default("18181818181", new Date())),
    new cliente_1.default("Guilherme", "Guilherme", new cpf_1.default("19191919191", new Date())),
    new cliente_1.default("Felipe", "Felipe", new cpf_1.default("20202020220", new Date())),
    new cliente_1.default("Gabriel", "Gabriel", new cpf_1.default("21212121221", new Date())),
    new cliente_1.default("Thiago", "Thiago", new cpf_1.default("23232323232", new Date())),
    new cliente_1.default("Guilherme", "Guilherme", new cpf_1.default("24242424242", new Date())),
    new cliente_1.default("Felipe", "Felipe", new cpf_1.default("25252525252", new Date())),
    new cliente_1.default("Gabriel", "Gabriel", new cpf_1.default("26262626262", new Date())),
    new cliente_1.default("Thiago", "Thiago", new cpf_1.default("27272727272", new Date())),
    new cliente_1.default("Guilherme", "Guilherme", new cpf_1.default("28282828282", new Date())),
    new cliente_1.default("Felipe", "Felipe", new cpf_1.default("29292929292", new Date())),
    new cliente_1.default("Gabriela", "Gabi", new cpf_1.default("30303030330", new Date())),
    new cliente_1.default("Fernando", "Fer", new cpf_1.default("31313131313", new Date())),
    new cliente_1.default("Gustavo", "Gus", new cpf_1.default("32323232323", new Date())),
    new cliente_1.default("Henrique", "Hen", new cpf_1.default("33333333335", new Date())),
    new cliente_1.default("Fabio", "Fab", new cpf_1.default("34343434343", new Date())),
];
exports.default = clientescadastrados;
// import Cliente from "../modelo/cliente";
// import CPF from "../modelo/cpf";
// let clientes: Cliente[] = []; 
// for (let i = 1; i <= 30; i++) {
//     let cpf = new CPF(`CPF ${i}`, new Date());
//     clientes.push(new Cliente(`Cliente ${i}`, `Nome Social ${i}`, cpf));
// }
// export default clientes;
