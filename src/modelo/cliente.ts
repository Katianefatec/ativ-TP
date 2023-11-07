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
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public quantidadeConsumida: number = 0;
    
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
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
    public comprarProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        this.quantidadeConsumida++;
    }
    public contratarServico(servico: Servico): void {
        this.servicosConsumidos.push(servico);
        this.quantidadeConsumida++;
    }

    public atualizarCliente(nome: string, nomeSocial: string, cpf: CPF, genero: string): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
    }

    public deletarProdutoConsumido(produto: Produto): void {
        const index = this.produtosConsumidos.indexOf(produto);
        if (index > -1) {
            this.produtosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    }

    public deletarServicoConsumido(servico: Servico): void {
        const index = this.servicosConsumidos.indexOf(servico);
        if (index > -1) {
            this.servicosConsumidos.splice(index, 1);
            this.quantidadeConsumida--;
        }
    }
    
}


