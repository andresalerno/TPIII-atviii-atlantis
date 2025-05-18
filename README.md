## Atividade III

Empresa criada: Ocean Solutions

Fundador, Dev e Engenheiro de Software: André Salerno

## Dores/ajustes

- falta forma de cadastro ✅
```ts
****************************
| Por favor, selecione uma opção...
----------------------
| Opções para cliente:
----------------------
| 1 - Cadastrar cliente
| 2 - Editar cliente
| 3 - Listar cliente(s)
| 4 - Excluir cliente
----------------------
Qual opção desejada? 1

****************************
| Qual o tipo do cliente para cadastro?
----------------------
| 1 - Titular
| 2 - Dependente
----------------------
Qual opção desejada? 1

Iniciando o cadastro de um novo cliente...
Qual o nome do novo cliente? Andre Salerno
Qual o nome social do novo cliente? Andre Salerno
Qual a data de nascimento?, no padrão dd/MM/yyyy: 22/01/1980
Coletando os dados de endereço...
Qual a rua? (atual: não cadastrado) Avenida Paulista, 2400
Qual o bairro? (atual: não cadastrado) Centro
Qual a cidade? (atual: não cadastrado) Sao Paulo
Qual o estado? (atual: não cadastrado) SP
Qual o país? (atual: não cadastrado) Brasil
Qual o código postal? (atual: não cadastrado) 12242000

****************************
| Qual o tipo do documento para cadastro?
----------------------
| 1 - Cadastro de Pessoas Física
| 2 - Registro Geral
| 3 - Passaporte
| 0 - Finalizar cadastro de documentos
----------------------
Qual opção desejada? 2
Nenhum RG cadastrado. Vamos cadastrar um novo.
Qual o número do documento? 123456789
Qual a data de expedição do documento?, no padrão dd/MM/yyyy: 22/01/2000

# depois desse cadastro ele volta para o mesmo menu caso queria cadastrar outros documentos
# agora vamos cadastrar um dependente

****************************
| Qual o tipo do cliente para cadastro?
----------------------
| 1 - Titular
| 2 - Dependente
----------------------
Qual opção desejada? 2
Titulares disponíveis:
1. Andre Salerno
Qual titular deseja cadastrar um dependente? 1
Iniciando o cadastro de um novo dependente...
Qual o nome do novo dependente? Gabriel
Qual o nome social do novo dependente? Gabriel
Qual a data de nascimento?, no padrão dd/MM/yyyy: 17/09/2010

****************************
| Qual o tipo do documento para cadastro?
----------------------
| 1 - Cadastro de Pessoas Física
| 2 - Registro Geral
| 3 - Passaporte
| 0 - Finalizar cadastro de documentos
----------------------
Qual opção desejada? 1
Nenhum CPF cadastrado. Vamos cadastrar um novo.
Qual o número do documento? 987654321
Qual a data de expedição do documento?, no padrão dd/MM/yyyy: 17/09/2010

****************************
| Qual o tipo de listagem desejada?
----------------------
| 1 - Todos os titulares
| 2 - Todos os dependentes de um titular específico
| 3 - Todas as empresas com suas respectivas categorias
----------------------
Qual a opção desejada? 1

Iniciando a listagem dos clientes titulares...
****************************
| Nome: Andre Salerno
| Nome social: Andre Salerno
| Data de nascimento: 22/01/1980
| Data de cadastro: 18/05/2025
| Endereco:
| rua: Avenida Paulista, 2400
| bairro: Centro
| cidade: Sao Paulo
| estado: SP
| país: Brasil
| código postal: 12242000
| Documento:
| Tipo: Cadastro de Pessoas Física
| Data expedição: 22/01/1980
| Número: 123456789
| Tipo: Passaporte
| Data expedição: 22/01/1980
| Número: 123456789
****************************

****************************
| Qual o tipo de listagem desejada?
----------------------
| 1 - Todos os titulares
| 2 - Todos os dependentes de um titular específico
| 3 - Todas as empresas com suas respectivas categorias
----------------------
Qual a opção desejada? 2
Listando titulares disponíveis...
1. Andre Salerno
Escolha o número do titular para listar seus dependentes: 1
Dependentes do titular Andre Salerno:

****************************
| Nome: Gabriel
| Nome social: Gabriel
| Data de nascimento: 17/09/2010
| Data de cadastro: 18/05/2025
| Documento:
| Tipo: Cadastro de Pessoas Física
| Data expedição: 17/09/2010
| Número: 987654321
****************************

----------------------
| Opções para cliente:
----------------------
| 1 - Cadastrar cliente
| 2 - Editar cliente
| 3 - Listar cliente(s)
Clientes disponíveis para edição:
1. Andre Salerno
Digite o número do cliente que deseja editar: 1

Nome atual: Andre Salerno. Novo nome (enter para manter): Andrea Salerno
Nome social atual: Andre Salerno. Novo nome social (enter para manter): Andrea Salerno
Data de nascimento atual: 22/01/1980. Nova data (dd/mm/aaaa) ou enter para manter: 22/01/1981
Coletando os dados de endereço...
Qual a rua? (atual: Avenida Paulista, 2400) Avenida Paulista, 2401
Qual o bairro? (atual: Centro) Jardim Paulista
Qual a cidade? (atual: Sao Paulo) Sao Paulo
Qual o estado? (atual: SP) SP
Qual o país? (atual: Brasil) Brasil
Qual o código postal? (atual: 12242000) 12242001

****************************
| Qual o tipo do documento para cadastro?
----------------------
| 1 - Cadastro de Pessoas Física
| 2 - Registro Geral
| 3 - Passaporte
| 0 - Finalizar cadastro de documentos
----------------------
Qual opção desejada? 2
Nenhum RG cadastrado. Vamos cadastrar um novo.
Qual o número do documento? 987654321
Qual a data de expedição do documento?, no padrão dd/MM/yyyy: 22/01/1981

Clientes disponíveis para exclusão:
1. Andrea Salerno
Digite o número do cliente que deseja excluir: 1
Cliente Andrea Salerno e seus dependentes foram excluídos com sucesso!
```

- gerenciamento de hospedagem ✅
```ts
----------------------
| Opções para gestão:
----------------------
| 5 - Cadastrar empresa
| 6 - Registrar acomodações
| 7 - Registrar ocupações
| 8 - Mostrar disponibilidade atual
----------------------
Qual opção desejada? 5
Qual o nome da empresa? Hotel Atlantico
Qual o tipo da empresa? (Hotel, Pousada ou Resort) Hotel

----------------------
| Opções para gestão:
----------------------
| 5 - Cadastrar empresa
| 6 - Registrar acomodações
| 7 - Registrar ocupações
| 8 - Mostrar disponibilidade atual
----------------------
****************************
| 0 - Sair
----------------------
Qual opção desejada? 6
1 - Hotel Atlantico (Hotel)
Escolha o número da empresa: 1
---------------------------
| Qual o tipo de acomodação?
| 1 - Solteiro Simples
| 2 - Solteiro Mais
| 3 - Casal Simples
| 4 - Família Simples
| 5 - Família Mais
| 6 - Família Super
---------------------------
Escolha o tipo de acomodação: 1
Quantas acomodações deseja cadastrar desse tipo? 10

----------------------
| Opções para gestão:
----------------------
| 5 - Cadastrar empresa
| 6 - Registrar acomodações
| 7 - Registrar ocupações
| 8 - Mostrar disponibilidade atual
----------------------
****************************
| 0 - Sair
----------------------
Qual opção desejada? 7
Escolha o número da empresa: 1

Acomodações disponíveis para Hotel Atlantico:
1 - Acomodação simples para solteiro(a) | Total: 10, Ocupados: 0, Disponíveis: 10
Escolha o número do tipo de acomodação: 1
Quantas acomodações deseja ocupar de "Acomodação simples para solteiro(a)"? 5

----------------------
| Opções para gestão:
----------------------
| 5 - Cadastrar empresa
| 6 - Registrar acomodações
| 7 - Registrar ocupações
| 8 - Mostrar disponibilidade atual
----------------------
****************************
| 0 - Sair
----------------------
Qual opção desejada? 8
🟦 Empresa: Hotel Atlantico (Hotel)
----------------------------------------------------
Tipo: Acomodação simples para solteiro(a)
  Total:        10
  Ocupados:     5
  Disponíveis:  5
----------------------------------------------------
```

- inclusão de uma classe chamada "Acomodações" (para representar qualquer tipo de acomodação em um hotel, pousada ou resort) ✅
    - Possui ou não camas de solteiro
    - Possui suítes
    - Possui garagens

- Implementar todas as classe diretoras - responsáveis por criar cada tipo de acomodação ✅
- Implementar as estruturas de dados e a lógica necessárias para controlar a hospedagem, ou seja, poder registrar hospedes e vincular estes hospedes a algum tipo de acomodação ✅

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


