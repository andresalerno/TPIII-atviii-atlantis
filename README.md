## Atividade III

Empresa criada: Ocean Solutions

Fundador, Dev e Engenheiro de Software: André Salerno

## Dores/ajustes

- falta forma de cadastro
- gerenciamento de hospedagem
- inclusão de uma classe chamada "Acomodações" (para representar qualquer tipo de acomodação em um hotel, pousada ou resort)
    - Possui ou não camas de solteiro
    - Possui suítes
    - Possui garagens
- Implementar todas as classe diretoras - responsáveis por criar cada tipo de acomodação
- Implementar as estruturas de dados e a lógica necessárias para controlar a hospedagem, ou seja, poder registrar hospedes e vincular estes hospedes a algum tipo de acomodação

## Definições de acomodações:

<img src="../img/image.png" alt="Diagrama" width="800"/>

Obs.: padrão de projeto esperado: BUILDER para implementar os construtores de acomodações

## Estrutura Básica Builder

source: padroes-criacionais.pptx e github

- fornece uma solução flexível para a criação de objetos
- objetivo: separa a construção de um objeto complexo de sua representação, sua definição em classe
- Separar/extrair o código de construção do obeto para fora de sua própria classe. A construção do objeto fica a cargo dos chamados "builders"

```ts
C:.
│   tsconfig.json
│
└───src
    │   app.ts
    │
    ├───construtor
    │       construtor.ts
    │       construtorVeiculo.ts
    │
    ├───diretor
    │       diretor.ts
    │       diretorAutomovel.ts
    │       diretorBarco.ts
    │       diretorMotocicleta.ts
    │
    └───modelo
            carroceria.ts
            categoria.ts
            combustivel.ts
            especie.ts
            fabricante.ts
            freio.ts
            refrigeracao.ts
            tipo.ts
            veiculo.ts

```

```ts
# objeto.ts
export default class Objeto {
    atributo1: any
    atributo2: any
    atributo3: any
}
```

```ts
#construtor.ts
import Objeto from "../modelo/objeto"

export default interface Construtor {
    reset(): void
    obterObjeto(): Objeto
}
```

```ts
3construtorObjeto.ts
import Objeto from "../modelo/objeto";
import Construtor from "./construtor";

export default class ConstrutorObjeto implements Construtor {
    private objeto!: Objeto
    constructor(){
        this.reset()
    }
    public setAtributo1(atributo1: any) {
        this.objeto.atributo1 = atributo1
    }
    public setAtributo2(atributo2: any) {
        this.objeto.atributo2 = atributo2
    }
    public setAtributo3(atributo3: any) {
        this.objeto.atributo3 = atributo3
    }
    reset(): void {
        this.objeto = new Objeto()
    }
    obterObjeto() {
        return this.objeto
    }
}
```






## Diagrama de classe Esperado

<img src="../img/image1.png" alt="Diagrama" width="800"/>


