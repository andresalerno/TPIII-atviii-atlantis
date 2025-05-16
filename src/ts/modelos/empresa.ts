import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "./acomodacao";

export default class Empresa {
  private nome: string;
  private tipo: "Hotel" | "Pousada" | "Resort";

  // Armazena a quantidade total e ocupada de cada tipo de acomodação
  private acomodacoesDisponiveis: Map<NomeAcomadacao, number>;
  private acomodacoesOcupadas: Map<NomeAcomadacao, number>;

  constructor(nome: string, tipo: "Hotel" | "Pousada" | "Resort") {
    this.nome = nome;
    this.tipo = tipo;
    this.acomodacoesDisponiveis = new Map();
    this.acomodacoesOcupadas = new Map();
  }

  public setDisponibilidade(tipoAcomodacao: NomeAcomadacao, total: number) {
    this.acomodacoesDisponiveis.set(tipoAcomodacao, total);
    if (!this.acomodacoesOcupadas.has(tipoAcomodacao)) {
      this.acomodacoesOcupadas.set(tipoAcomodacao, 0);
    }
  }

  public getDisponibilidade(tipoAcomodacao: NomeAcomadacao): number {
    return this.acomodacoesDisponiveis.get(tipoAcomodacao) || 0;
  }

  public getOcupados(tipoAcomodacao: NomeAcomadacao): number {
    return this.acomodacoesOcupadas.get(tipoAcomodacao) || 0;
  }

  // Registrar nova ocupação — decrementa a disponibilidade e incrementa ocupados
  public ocupar(tipoAcomodacao: NomeAcomadacao, quantidade: number): boolean {
    const disponivel = this.getDisponibilidade(tipoAcomodacao);
    const ocupados = this.getOcupados(tipoAcomodacao);

    if (quantidade <= 0) {
      throw new Error("Quantidade deve ser maior que zero");
    }

    if (ocupados + quantidade > disponivel) {
      console.log(`Não há acomodações suficientes do tipo ${tipoAcomodacao}. Disponível: ${disponivel - ocupados}`);
      return false;
    }

    this.acomodacoesOcupadas.set(tipoAcomodacao, ocupados + quantidade);
    return true;
  }

  public liberar(tipoAcomodacao: NomeAcomadacao, quantidade: number): boolean {
    const ocupados = this.getOcupados(tipoAcomodacao);

    if (quantidade <= 0) {
      throw new Error("Quantidade deve ser maior que zero");
    }

    if (quantidade > ocupados) {
      console.log(`Não há acomodações ocupadas suficientes para liberar do tipo ${tipoAcomodacao}. Ocupados: ${ocupados}`);
      return false;
    }

    this.acomodacoesOcupadas.set(tipoAcomodacao, ocupados - quantidade);
    return true;
  }

  // Para debug / mostrar status
  public imprimirStatus() {
    console.log(`Empresa: ${this.nome} (${this.tipo})`);
    console.log("Status das acomodações:");

    this.acomodacoesDisponiveis.forEach((total, tipo) => {
      const ocupados = this.getOcupados(tipo);
      console.log(`- ${tipo}: Total = ${total}, Ocupados = ${ocupados}, Disponíveis = ${total - ocupados}`);
    });
  }
}
