import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";

export default class EditarCliente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado para editar.");
            return;
        }

        console.log("Clientes disponíveis para edição:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const escolha = this.entrada.receberNumero("Digite o número do cliente que deseja editar:");
        const clienteSelecionado = this.clientes[escolha - 1];

        if (!clienteSelecionado) {
            console.log("Cliente inválido.");
            return;
        }

        // Edita informações básicas
        const novoNome = this.entrada.receberTexto(`Nome atual: ${clienteSelecionado.Nome}. Novo nome (enter para manter):`);
        if (typeof novoNome === "string" && novoNome.trim().length > 0) {
            clienteSelecionado.Nome = novoNome;
        }

        const novoNomeSocial = this.entrada.receberTexto(`Nome social atual: ${clienteSelecionado.NomeSocial}. Novo nome social (enter para manter):`);
        if (typeof novoNomeSocial === "string" && novoNomeSocial.trim().length > 0) {
            clienteSelecionado.NomeSocial = novoNomeSocial;
        }

        const novaDataNascimentoStr = this.entrada.receberTexto(`Data de nascimento atual: ${clienteSelecionado.DataNascimento.toLocaleDateString()}. Nova data (dd/mm/aaaa) ou enter para manter:`);
        if (typeof novaDataNascimentoStr === "string" && novaDataNascimentoStr.trim().length > 0) {
            const novaData = this.parseData(novaDataNascimentoStr);
            if (novaData) clienteSelecionado.DataNascimento = novaData;
            else console.log("Data inválida. Mantendo a anterior.");
        }


        // Edita endereço
        this.processo = new CadastroEnderecoTitular(clienteSelecionado);
        this.processo.processar();

        // Edita documentos
        this.processo = new CadastrarDocumentosCliente(clienteSelecionado);
        this.processo.processar();

        console.log("Cliente editado com sucesso!");
    }

    // Função auxiliar para converter string dd/mm/aaaa para Date
    private parseData(dataStr: string): Date | null {
        const partes = dataStr.split("/");
        if (partes.length !== 3) return null;
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // meses 0-11
        const ano = parseInt(partes[2], 10);
        const data = new Date(ano, mes, dia);
        return isNaN(data.getTime()) ? null : data;
    }
}
