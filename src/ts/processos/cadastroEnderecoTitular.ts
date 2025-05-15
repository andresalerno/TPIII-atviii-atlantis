import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Coletando os dados de endereço...');

        // Pega o endereço atual, se existir
        let enderecoAtual = this.cliente.Endereco;

        // Pergunta a rua, mostra valor atual se existir
        let rua = this.entrada.receberTexto(`Qual a rua? (atual: ${enderecoAtual?.Rua || 'não cadastrado'})`);
        if (!rua.trim() && enderecoAtual?.Rua) rua = enderecoAtual.Rua;

        let bairro = this.entrada.receberTexto(`Qual o bairro? (atual: ${enderecoAtual?.Bairro || 'não cadastrado'})`);
        if (!bairro.trim() && enderecoAtual?.Bairro) bairro = enderecoAtual.Bairro;

        let cidade = this.entrada.receberTexto(`Qual a cidade? (atual: ${enderecoAtual?.Cidade || 'não cadastrado'})`);
        if (!cidade.trim() && enderecoAtual?.Cidade) cidade = enderecoAtual.Cidade;

        let estado = this.entrada.receberTexto(`Qual o estado? (atual: ${enderecoAtual?.Estado || 'não cadastrado'})`);
        if (!estado.trim() && enderecoAtual?.Estado) estado = enderecoAtual.Estado;

        let pais = this.entrada.receberTexto(`Qual o país? (atual: ${enderecoAtual?.Pais || 'não cadastrado'})`);
        if (!pais.trim() && enderecoAtual?.Pais) pais = enderecoAtual.Pais;

        let codigoPostal = this.entrada.receberTexto(`Qual o código postal? (atual: ${enderecoAtual?.CodigoPostal || 'não cadastrado'})`);
        if (!codigoPostal.trim() && enderecoAtual?.CodigoPostal) codigoPostal = enderecoAtual.CodigoPostal;

        // Cria um novo objeto endereço com os valores preenchidos ou mantidos
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);

        this.cliente.Endereco = endereco;

        console.log('Endereço atualizado com sucesso!');
    }
}
