import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string;
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>
    public quantidadeConsumida: number = 0;
    public clientes: Array<Cliente>;
    
    
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string, telefone: Telefone) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = [telefone]; 
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.clientes = []; 
        
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getQuantidadeConsumida(): number {
        return this.produtosConsumidos.length + this.servicosConsumidos.length;
    }

    public adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }

    public adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }
    

    public atualizarCliente(nome: string, nomeSocial: string, cpf: CPF, genero: string, telefone: Telefone): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.adicionarTelefone(telefone); 
    }
    public deletarCliente(cliente: Cliente): void {
        const index = this.clientes.indexOf(cliente);
        if (index > -1) {
            this.clientes.splice(index, 1);
        }
    }

    

       
}


