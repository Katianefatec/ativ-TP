import Cliente from "../modelo/cliente";
import clientescadastrados from "../modelo/clientescadastrados";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientescadastrados;
    }
    
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}