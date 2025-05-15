import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirCliente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado para excluir.");
            return;
        }

        console.log("Clientes disponíveis para exclusão:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const escolha = this.entrada.receberNumero("Digite o número do cliente que deseja excluir:");
        const clienteSelecionado = this.clientes[escolha - 1];

        if (!clienteSelecionado) {
            console.log("Cliente inválido.");
            return;
        }

        // Remove todos os dependentes associados do armazem principal (se estiverem)
        clienteSelecionado.Dependentes.forEach(dependente => {
            const indexDependente = this.clientes.indexOf(dependente);
            if (indexDependente !== -1) {
                this.clientes.splice(indexDependente, 1);
            }
        });

        // Remove o cliente selecionado
        const indexCliente = this.clientes.indexOf(clienteSelecionado);
        if (indexCliente !== -1) {
            this.clientes.splice(indexCliente, 1);
        }

        console.log(`Cliente ${clienteSelecionado.Nome} e seus dependentes foram excluídos com sucesso!`);
    }
}
