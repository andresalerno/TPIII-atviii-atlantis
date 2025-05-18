import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`);
        console.log(`| Por favor, selecione uma opção...`);
        console.log(`----------------------`);
        console.log(`| Opções para cliente:`);
        console.log(`----------------------`);
        console.log(`| 1 - Cadastrar cliente`);
        console.log(`| 2 - Editar cliente`);
        console.log(`| 3 - Listar cliente(s)`);
        console.log(`| 4 - Excluir cliente`);
        console.log(`----------------------`);
        console.log(`| Opções para gestão:`);
        console.log(`----------------------`);
        console.log(`| 5 - Cadastrar empresa`);   // nova opção
        console.log(`| 6 - Registrar acomodações`);
        console.log(`| 7 - Registrar ocupações`);
        console.log(`| 8 - Mostrar disponibilidade atual`);
        console.log(`----------------------`);
        console.log(`****************************`);
        console.log(`| 0 - Sair`);
        console.log(`----------------------`);
    }
}
