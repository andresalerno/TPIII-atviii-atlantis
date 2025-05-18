import Processo from "../abstracoes/processo";
import ConstrutorEmpresa from "../construtores/construtorEmpresa";
import Armazem from "../dominio/armazem";
import Empresa from "../modelos/empresa";

export default class CadastroEmpresa extends Processo {
    constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        let nome = this.entrada.receberTexto('Qual o nome da empresa?')
        let tipo = this.entrada.receberTexto('Qual o tipo da empresa? (Hotel, Pousada ou Resort)')
        let empresa = new ConstrutorEmpresa()
            .setNome(nome)
            .setTipo(tipo as "Hotel" | "Pousada" | "Resort")
            .construir()
        Armazem.InstanciaUnica.adicionarEmpresa(empresa);
        console.log(`Empresa ${empresa.getNome()} do tipo ${empresa.getTipo()} cadastrada com sucesso!`)
        this.execucao = false
    }
}