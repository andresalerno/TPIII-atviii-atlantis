import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Empresa from "../modelos/empresa";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private empresas: Empresa[] = [];
    
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get Empresas() {
        return this.empresas;
    }
    public adicionarEmpresa(empresa: Empresa) {
    this.empresas.push(empresa);
    }

}