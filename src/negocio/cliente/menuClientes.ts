import Entrada from "../../io/entrada";
import CPF from "../../modelo/cpf";
import Telefone from "../../modelo/telefone";
import compras from '../compra/compra';
import CadastroCliente from "./cadastroCliente";
import { clientescadastrados as clientes } from './clientesCadastrados';
import ListagemClientes from "./listagemClientes";
   
    
    export default function menuClientes() {
        let execucaoClientes = true;
        let listagemClientes = new ListagemClientes(clientes, compras);
        let cadastro = new CadastroCliente(listagemClientes);

        while (execucaoClientes) {
            console.log(`Opções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Atualizar cliente`);
            console.log(`3 - Deletar cliente`);
            console.log(`4 - Listar clientes`);
            console.log(`5 - Listar clientes por gênero`);
            console.log(`0 - Voltar ao menu principal`);
    
            let entrada = new Entrada()
            let opcaoClientes = entrada.receberNumero(`Por favor, escolha uma opção: `)
            let listagemClientes = new ListagemClientes(clientes, compras);
            let opcaoGenero: number;
    let     genero: string;
    
            switch (opcaoClientes) {
                case 1:
                    cadastro.cadastrar()
                    break;
                case 2:
                    let nomeClienteAtualizar= entrada.receberTexto(`Por favor, informe o nome do cliente que deseja atualizar: `);
                    let cliente = listagemClientes.getClientes().find(c => c.nome === nomeClienteAtualizar);
                    if (cliente) {
                        let novoNome = entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
                        let novoNomeSocial = entrada.receberTexto(`Por favor informe o novo nome social do cliente: `)
                        let novoValorCPF = entrada.receberTexto(`Por favor informe o novo número do cpf: `);
                        let novaDataCPF = entrada.receberTexto(`Por favor informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: `);
                        let novoGenero = '';
                        while (novoGenero !== '1' && novoGenero !== '2') {
                            novoGenero = entrada.receberTexto(`Por favor informe o novo gênero do cliente (1 - Masculino, 2 - Feminino): `)}
                        let partesData = novaDataCPF.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        let novoCPF = new CPF(novoValorCPF, dataEmissao);
                        let novoDDD = entrada.receberTexto(`Por favor informe o novo DDD do telefone do cliente: `);
                        let novoNumero = entrada.receberTexto(`Por favor informe o novo número do telefone do cliente: `);
                        let novoTelefone = new Telefone(novoDDD, novoNumero);
                        cliente.atualizarCliente(novoNome, novoNomeSocial, novoCPF, novoGenero, novoTelefone);
                    } else {
                        console.log(`Cliente não encontrado.`);
                    }
                    break;
                case 3:
                    let nomeClienteDeletar = entrada.receberTexto("Por favor, informe o nome do cliente que deseja deletar: ");
                    let clienteIndex = listagemClientes.getClientes().findIndex(function (c) { return c.nome === nomeClienteDeletar; });
                    if (clienteIndex !== -1) {
                        listagemClientes.getClientes().splice(clienteIndex, 1);
                        console.log("Cliente deletado com sucesso.");
                    } else {
                        console.log("Cliente não encontrado.");
                    }
                    break;
                
                case 4:
                    listagemClientes.listar();
                    break;

                case 5:
                    console.log(`1 - Masculino`);
                    console.log(`2 - Feminino`);
                    opcaoGenero = entrada.receberNumero(`Por favor, escolha o gênero que deseja listar: `);
                    genero = '';
                    
                    switch (opcaoGenero) {
                        case 1:
                            genero = 'Masculino';
                            break;
                        case 2:
                            genero = 'Feminino';
                            break;
                        default:
                            console.log(`Opção inválida.`);
                            break;
                    }
                    if (genero) {
                        listagemClientes.listarClientesPorGenero(genero);
                    }
                    break;


                case 0:
                    execucaoClientes = false;
                    break;
                default:
                    console.log(`Opção inválida.`);
                    break;
            }
        }
    }

    