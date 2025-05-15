import ImpressorEndereco from './impressorEndereco';
import Cliente from '../modelos/cliente';

export default class ImpressorCliente {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    imprimir(): string {
        let resultado = "****************************\n";
        resultado += `| Nome: ${this.cliente.Nome}\n`;
        resultado += `| Nome social: ${this.cliente.NomeSocial}\n`;
        resultado += `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`;
        resultado += `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}\n`;

        if (this.cliente.Endereco) {
            const impressorEndereco = new ImpressorEndereco(this.cliente.Endereco);
            resultado += impressorEndereco.imprimir();
        } else {
            resultado += "Endereço não encontrado.\n"; // Mensagem amigável só se não tiver endereço
        }

        if (this.cliente.Documentos.length > 0) {
            resultado += "| Documento:\n";
            this.cliente.Documentos.forEach(doc => {
                resultado += `| Tipo: ${doc.Tipo}\n`;
                resultado += `| Data expedição: ${doc.DataExpedicao?.toLocaleDateString() || 'não cadastrada'}\n`;
                resultado += `| Número: ${doc.Numero}\n`;
            });
        } else {
            resultado += "| Nenhum documento cadastrado.\n";
        }

        resultado += "****************************\n";
        return resultado;
    }
}
