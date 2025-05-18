import Menu from "../interfaces/menu";

export default class MenuTipoAcomodacao implements Menu {
    mostrar(): void {
        console.log(`---------------------------`);
        console.log(`| Qual o tipo de acomodação?`);
        console.log(`| 1 - Solteiro Simples`);
        console.log(`| 2 - Solteiro Mais`);
        console.log(`| 3 - Casal Simples`);
        console.log(`| 4 - Família Simples`);
        console.log(`| 5 - Família Mais`);
        console.log(`| 6 - Família Super`);
        console.log(`---------------------------`);
    }
}
