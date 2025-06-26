import CPF from "./cpf"
import Produto from "./produto"
import Servico from "./servico"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private dataCadastro: Date
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.dataCadastro = new Date()
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public consumirProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto)
    }
    public consumirServico(servico: Servico): void {
        this.servicosConsumidos.push(servico)
    }
}