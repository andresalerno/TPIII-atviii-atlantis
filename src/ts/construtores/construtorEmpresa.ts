import Empresa from "../modelos/empresa";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class ConstrutorEmpresa {
  private nome: string = "";
  private tipo: "Hotel" | "Pousada" | "Resort" = "Hotel";
  private acomodaçõesConfig: Map<NomeAcomadacao, number> = new Map();

  public setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  public setTipo(tipo: "Hotel" | "Pousada" | "Resort"): this {
    this.tipo = tipo;
    return this;
  }

  public setQuantidadeAcomodacao(tipo: NomeAcomadacao, quantidade: number): this {
    this.acomodaçõesConfig.set(tipo, quantidade);
    return this;
  }

  public construir(): Empresa {
    const empresa = new Empresa(this.nome, this.tipo);
    this.acomodaçõesConfig.forEach((quantidade, tipo) => {
      empresa.setDisponibilidade(tipo, quantidade);
    });
    return empresa;
  }
}
