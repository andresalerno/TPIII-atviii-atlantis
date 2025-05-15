import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public set Nome(nome: string) { this.nome = nome }

    public get NomeSocial() { return this.nomeSocial }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }

    public get DataNascimento() { return this.dataNascimento }
    public set DataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }

    public get DataCadastro() { return this.dataCadastro }
    public set DataCadastro(dataCadastro: Date) { this.dataCadastro = dataCadastro }

    public get Telefones() { return this.telefones }
    public set Telefones(telefones: Telefone[]) { this.telefones = telefones }

    public get Endereco() { return this.endereco }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    public get Documentos() { return this.documentos }
    public set Documentos(documentos: Documento[]) { this.documentos = documentos }

    public get Dependentes() { return this.dependentes }
    public set Dependentes(dependentes: Cliente[]) { this.dependentes = dependentes }

    public get Titular() { return this.titular }
    public set Titular(titular: Cliente) { this.titular = titular }
    
}