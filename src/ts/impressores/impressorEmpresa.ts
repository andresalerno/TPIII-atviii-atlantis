import Impressor from "../interfaces/impressor"
import Empresa from "../modelos/empresa"

export default class ImpressorEmpresa implements Impressor {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        this.empresa = empresa
    }

    imprimir(): string {
        return `Empresa: ${this.empresa.getNome()}\nTipo: ${this.empresa.getTipo()}\n`
    }
}
