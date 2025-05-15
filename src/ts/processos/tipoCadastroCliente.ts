import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroClienteTitular from "./cadastroClienteTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                const armazem = Armazem.InstanciaUnica
                const clientes = armazem.Clientes

                if (clientes.length === 0) {
                    console.log('Nenhum titular cadastrado. Cadastre um titular primeiro.')
                    return
                }

                // Mostra a lista de titularesdisponíveis
                console.log('Titulares disponíveis:')
                clientes.forEach((cliente, indice) => {
                    console.log(`${indice + 1}. ${cliente.Nome}`)
                })

                const indice = this.entrada.receberNumero('Qual titular deseja cadastrar um dependente?')
                const titularSelecionado = clientes[indice - 1]

                if (!titularSelecionado) {
                    console.log('Titular não encontrado.')
                    return
                }
                
                this.processo = new CadastroClienteDependente(titularSelecionado)
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}