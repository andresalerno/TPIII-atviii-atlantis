import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Empresa from "../modelos/empresa";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Cliente from "../modelos/cliente";

export default class RegistrarOcupacoesEmpresa extends Processo {
    private empresas: Empresa[];
    private clientes: Cliente[];

    constructor() {
        super();
        this.empresas = Armazem.InstanciaUnica.Empresas;
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log("Registrar ocupações em acomodações de uma empresa\n");

        if (this.empresas.length === 0) {
            console.log("Nenhuma empresa cadastrada.");
            return;
        }

        // Listar empresas
        this.empresas.forEach((empresa, index) => {
            console.log(`${index + 1} - ${empresa.getNome()} (${empresa.getTipo()})`);
        });

        const indice = this.entrada.receberNumero("Escolha o número da empresa:");
        const empresa = this.empresas[indice - 1];

        if (!empresa) {
            console.log("Empresa inválida.");
            return;
        }

        // Selecionar cliente para associar a ocupação
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado para associar.");
            return;
        }

        console.log("\nClientes disponíveis:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.Nome} (${cliente.NomeSocial})`);
        });

        const clienteIndex = this.entrada.receberNumero("Escolha o número do cliente:");
        const clienteSelecionado = this.clientes[clienteIndex - 1];

        if (!clienteSelecionado) {
            console.log("Cliente inválido.");
            return;
        }

        console.log(`\nAcomodações disponíveis para ${empresa.getNome()}:`);

        const tiposDisponiveis = Object.values(NomeAcomadacao).filter(tipo => empresa.getDisponibilidade(tipo) > 0);

        tiposDisponiveis.forEach((tipo, index) => {
            const total = empresa.getDisponibilidade(tipo);
            const ocupados = empresa.getOcupados(tipo);
            const disponiveis = total - ocupados;
            console.log(`${index + 1} - ${tipo} | Total: ${total}, Ocupados: ${ocupados}, Disponíveis: ${disponiveis}`);
        });

        const tipoIndex = this.entrada.receberNumero("Escolha o número do tipo de acomodação:");
        const tipoSelecionado = tiposDisponiveis[tipoIndex - 1];

        if (!tipoSelecionado) {
            console.log("Tipo inválido.");
            return;
        }

        const quantidade = this.entrada.receberNumero(`Quantas acomodações deseja ocupar de "${tipoSelecionado}"?`);

        const sucesso = empresa.ocupar(tipoSelecionado, quantidade);

        if (sucesso) {
            console.log(`✅ Ocupadas ${quantidade} acomodações do tipo "${tipoSelecionado}" com sucesso.`);
        } else {
            console.log(`❌ Não foi possível ocupar ${quantidade} acomodações do tipo "${tipoSelecionado}".`);
        }
    }
}
