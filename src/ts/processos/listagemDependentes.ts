import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Impressor from "../interfaces/impressor";
import ImpressorCliente from "../impressores/impressorCliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log("Listando titulares disponíveis...")

        // Lista os titulares disponíveis (clientes sem titular definido)
        const titulares = this.clientes.filter(cliente => cliente.Titular === undefined)

        if (titulares.length === 0) {
            console.log("Nenhum titular cadastrado.")
            return
        }

        // Mostra titulares
        titulares.forEach((titular, index) => {
            console.log(`${index + 1}. ${titular.Nome}`)
        })

        const indice = this.entrada.receberNumero("Escolha o número do titular para listar seus dependentes:")
        const titularSelecionado = titulares[indice - 1]

        if (!titularSelecionado) {
            console.log("Titular inválido.")
            return
        }

        const dependentes = titularSelecionado.Dependentes

        console.clear()
        console.log(`Dependentes do titular ${titularSelecionado.Nome}:\n`)

        if (dependentes.length === 0) {
            console.log("Este titular não possui dependentes.")
            return
        }

        // Imprimir os dependentes
        dependentes.forEach(dependente => {
            const impressor: Impressor = new ImpressorCliente(dependente)
            console.log(impressor.imprimir())
        })
    }
}
