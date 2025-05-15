import Process from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";


export default class CadastroClienteDependente extends Process {
    private titular: Cliente

    constructor(titular: Cliente) {
        super()
        this.titular = titular
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...')

        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)

       // Define o titular do dependente (relacionamento reverso, se desejar)
        dependente['titular'] = this.titular

        // Cadastrar documentos
        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        // Associa o dependente ao titular
        this.titular.Dependentes.push(dependente)

        console.log('Cadastro do dependente finalizado com sucesso!')
    }
}