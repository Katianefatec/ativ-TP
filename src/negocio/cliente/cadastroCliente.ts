import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import { clientescadastrados } from "./clientesCadastrados";
import ListagemClientes from './listagemClientes';
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private entrada: Entrada
    public listagemClientes : ListagemClientes

    constructor(listagemClientes: ListagemClientes) {
        super()
        this.entrada = new Entrada()
        this.listagemClientes = listagemClientes;
        
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = '';
            while (genero !== '1' && genero !== '2') {
        genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente (1 - Masculino, 2 - Feminino): `)}
        genero = genero === '1' ? 'Masculino' : 'Feminino';
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao); 
        let cpfExistente = clientescadastrados.find(cliente => cliente.getCpf.getValor === cpf.getValor);
        if (cpfExistente) {
            console.log(`\n Já existe um cliente cadastrado com o CPF ${cpf.getValor}.\n`);
            return;
        }
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone do cliente: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone do cliente: `);
        let telefone = new Telefone(ddd, numero);

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, telefone);
        clientescadastrados.push(cliente);        

        console.log(`\nCadastro concluído :)\n`);
    }
}