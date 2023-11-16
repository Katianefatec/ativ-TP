export default class Servico {
    public nome: string;
    public valor: number;
    public servicosConsumidos: Array<Servico>
    public quantidadeConsumida: number = 0;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
        this.servicosConsumidos = [];
    }

    public contratarServico(): void {
        this.quantidadeConsumida++;
    }
}