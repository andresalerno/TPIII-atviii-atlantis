import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Empresa from "../modelos/empresa";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class ResumoAcomodacoesEmpresa extends Processo {
    private empresas: Empresa[];

    constructor() {
        super();
        this.empresas = Armazem.InstanciaUnica.Empresas;
    }

    processar(): void {
        console.clear();
        console.log("Resumo das acomodações por empresa:\n");

        if (this.empresas.length === 0) {
            console.log("Nenhuma empresa cadastrada.");
            return;
        }

        this.empresas.forEach(empresa => {
            console.log(`🟦 Empresa: ${empresa.getNome()} (${empresa.getTipo()})`);
            console.log("----------------------------------------------------");

            const tipos = Object.values(NomeAcomadacao);
            tipos.forEach((tipo) => {
                const total = empresa.getDisponibilidade(tipo);
                const ocupados = empresa.getOcupados(tipo);
                const disponiveis = total - ocupados;

                if (total > 0) {
                    console.log(`Tipo: ${tipo}`);
                    console.log(`  Total:        ${total}`);
                    console.log(`  Ocupados:     ${ocupados}`);
                    console.log(`  Disponíveis:  ${disponiveis}`);
                    console.log("----------------------------------------------------");
                }
            });

            console.log("\n"); // separa uma empresa da outra
        });
    }
}
