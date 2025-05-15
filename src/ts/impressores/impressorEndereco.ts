import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco?: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {

        if (!this.endereco) {
            return "| Endereço não cadastrado.\n";
        }
        
        let impressao = `| Endereco:\n`
            + `| rua: ${this.endereco.Rua}\n`
            + `| bairro: ${this.endereco.Bairro}\n`
            + `| cidade: ${this.endereco.Cidade}\n`
            + `| estado: ${this.endereco.Estado}\n`
            + `| país: ${this.endereco.Pais}\n`
            + `| código postal: ${this.endereco.CodigoPostal || "não informado"}\n`;
        return impressao;
    }
}