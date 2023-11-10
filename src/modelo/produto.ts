export default class Produto {
    public nome: string;
    public valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
    public atualizarProduto(novoNome: string, novoValor: number): void {
        this.nome = novoNome;
        this.valor = novoValor;
    }    
}