import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import Armazem from "../dominio/armazem";
import Empresa from "../modelos/empresa";
import Acomodacao from "../modelos/acomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[];
    private empresas: Empresa[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.empresas = Armazem.InstanciaUnica.Empresas;
    }

    processar(): void {
        console.clear();
        console.log("Cadastro de acomodações para uma empresa\n");

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

        // Escolha de tipo de acomodação
        const menu = new MenuTipoAcomodacao();
        menu.mostrar();

        const opcao = this.entrada.receberNumero("Escolha o tipo de acomodação:");
        const quantidade = this.entrada.receberNumero("Quantas acomodações deseja cadastrar desse tipo?");

        let diretor;
        let tipoAcomodacao: NomeAcomadacao;

        switch (opcao) {
            case 1:
                diretor = new DiretorSolteiroSimples();
                tipoAcomodacao = NomeAcomadacao.SolteiroSimples;
                break;
            case 2:
                diretor = new DiretorSolteiroMais();
                tipoAcomodacao = NomeAcomadacao.CasalSimples;
                break;
            case 3:
                diretor = new DiretorCasalSimples();
                tipoAcomodacao = NomeAcomadacao.SolteiroSimples;
                break;
            case 4:
                diretor = new DiretorFamiliaSimples();
                tipoAcomodacao = NomeAcomadacao.CasalSimples;
                break;
            case 5:
                diretor = new DiretorFamiliaMais();
                tipoAcomodacao = NomeAcomadacao.SolteiroSimples;
                break;
            case 6:
                diretor = new DiretorFamiliaSuper();
                tipoAcomodacao = NomeAcomadacao.SolteiroSimples;
                break;
            default:
                console.log("Tipo inválido.");
                return;
        }

        const acomodacao = diretor.construir();

        // Atualiza disponibilidade na empresa
        const atual = empresa.getDisponibilidade(tipoAcomodacao);
        empresa.setDisponibilidade(tipoAcomodacao, atual + quantidade);

        // Adiciona ao repositório global se necessário
        for (let i = 0; i < quantidade; i++) {
            this.acomodacoes.push(acomodacao); // opcional, dependendo da sua lógica
        }

        console.log(`\nForam cadastradas ${quantidade} acomodações do tipo "${tipoAcomodacao}" para a empresa "${empresa.getNome()}".`);
    }
}
