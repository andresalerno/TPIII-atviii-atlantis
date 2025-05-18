import Processo from "../abstracoes/processo";
import Empresa from "../modelos/empresa";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class ListagemAcomodacoes extends Processo {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    processar(): void {
        console.clear();
        console.log(`Listando acomodações da empresa: ${this.empresa["nome"]}`); // Se 'nome' for privado, crie getter
        console.log("-------------------------------------------------");

        // Itera sobre as acomodações disponíveis na empresa
        this.empresa["acomodacoesDisponiveis"].forEach((total: number, tipo: NomeAcomadacao) => {
            const ocupados = this.empresa.getOcupados(tipo);
            const disponiveis = total - ocupados;

            console.log(`Tipo: ${tipo}`);
            console.log(`Total: ${total}`);
            console.log(`Ocupados: ${ocupados}`);
            console.log(`Disponíveis: ${disponiveis}`);
            console.log("-------------------------------------------------");
        });
    }
}
