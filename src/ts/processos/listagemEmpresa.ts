import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorEmpresa from "../impressores/impressorEmpresa"
import Impressor from "../interfaces/impressor"
import Empresa from "../modelos/empresa"

export default class ListagemEmpresas extends Processo {
    private empresas: Empresa[]
    private impressor!: Impressor

    constructor() {
        super()
        this.empresas = Armazem.InstanciaUnica.Empresas
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das empresas cadastradas...\n')

        if (this.empresas.length === 0) {
            console.log('Nenhuma empresa cadastrada.')
            return
        }

        this.empresas.forEach(empresa => {
            this.impressor = new ImpressorEmpresa(empresa)
            console.log(this.impressor.imprimir())
        })
    }
}
