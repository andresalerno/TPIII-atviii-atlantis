import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroRg extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private parseData(dataStr: string): Date | null {
        const partes = dataStr.split("/");
        if (partes.length !== 3) return null;
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const ano = parseInt(partes[2], 10);
        const data = new Date(ano, mes, dia);
        return isNaN(data.getTime()) ? null : data;
    }

    processar(): void {
        // Busca RG existente no cliente
        let rgExistente = this.cliente.Documentos.find(
            doc => doc.Tipo === TipoDocumento.RG
        );

        if (!rgExistente) {
            console.log('Nenhum RG cadastrado. Vamos cadastrar um novo.');

            // Recebe número do documento
            let numero = this.entrada.receberTexto('Qual o número do documento?');

            // Recebe data de expedição
            let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');

            // Cria novo Documento e adiciona
            rgExistente = new Documento(numero, TipoDocumento.RG, dataExpedicao);
            this.cliente.Documentos.push(rgExistente);

        } else {
            // Exibe dados atuais
            console.log(`Número do documento atual: ${rgExistente.Numero}`);
            console.log(`Data de expedição atual: ${rgExistente.DataExpedicao?.toLocaleDateString() || 'não cadastrada'}`);

            // Pergunta número do documento com opção "enter para manter"
            let novoNumero = this.entrada.receberTexto(`Novo número (enter para manter "${rgExistente.Numero}"):`);
            let numeroAtualizado = rgExistente.Numero;
            if (novoNumero.trim() !== '') {
                numeroAtualizado = novoNumero;
            }

            let novaDataExpedicaoStr = this.entrada.receberTexto(`Nova data de expedição (dd/mm/aaaa) (enter para manter):`);
            let dataExpedicaoAtualizada = rgExistente.DataExpedicao;
            if (novaDataExpedicaoStr.trim() !== '') {
                const novaData = this.parseData(novaDataExpedicaoStr);
                if (novaData) {
                    dataExpedicaoAtualizada = novaData;
                } else {
                    console.log('Data inválida. Mantendo a anterior.');
                }
            }

            // Substitui o documento antigo por um novo com os dados atualizados
            const novoDocumento = new Documento(numeroAtualizado, TipoDocumento.RG, dataExpedicaoAtualizada);
            const index = this.cliente.Documentos.indexOf(rgExistente);
            if (index !== -1) {
                this.cliente.Documentos[index] = novoDocumento;
            }
        }

        console.log('Cadastro/edição do RG finalizado!');
    }
}
