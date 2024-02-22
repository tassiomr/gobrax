# Pesquisa de Animais

## Seções

- [Propósito](#propósito)
- [Objetivos](#objetivos)
- [Início do Projeto](#início-do-projeto)
- [Arquitetura](#arquitetura)
- [Testes Vitest](#test-vitest)
- [Formatação de Código e Linting](#formatação-de-código-e-linting)
- [Commits Convencionais](#commits-convencionais)
- [Acessar a Aplicação](#acessar-a-aplicação)
- [Licença](#licença)

## Propósito

O objetivo deste teste é criar um sistema simples para gerenciar motoristas e veículos, permitindo adicionar, listar, atualizar e excluir registros de ambos. Além disso, é necessário implementar a funcionalidade de vincular um motorista a um veículo. O teste avaliará suas habilidades de desenvolvimento na criação dessas funcionalidades, bem como na organização e qualidade do código produzido.

## Objetivos

Claro, aqui está uma lista simplificada de objetivos para o teste:

1. Criar um sistema para gerenciar motoristas e veículos.
2. Implementar operações básicas de CRUD (Create, Read, Update, Delete) para motoristas e veículos.
3. Desenvolver uma interface de usuário intuitiva e amigável para interação com o sistema.
4. Garantir uma boa organização e estruturação do código-fonte.
5. Vincular corretamente motoristas a veículos no sistema.

## Início do Projeto

Para instalar as dependências, execute o seguinte comando:

```bash
npm install
```

### Executando em Desenvolvimento

```bash
npm run dev
```

Executa a aplicação no modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-la no navegador.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### Executando em Produção Local

Para construir uma versão de produção local e executá-la, use os seguintes comandos:

```bash
npm run build && npm run preview
```

## Arquitetura

A arquitetura do projeto segue um modelo que visa manter responsabilidades separadas, promovendo uma boa organização e manutenibilidade do código. A estrutura é baseada no padrão de arquitetura MVVM (Model-View-ViewModel), onde cada parte desempenha um papel específico.

Aqui está uma explicação detalhada de cada camada do projeto:

### Camada de UI

A camada de Interface do Usuário (UI) é responsável por receber dados da camada de aplicação e exibi-los nas telas. Ela contém:

- **Pages**: Subpastas contendo as telas da aplicação.
- **Components**: Componentes reutilizáveis.
- **Theme**: Configuração do tema da aplicação.
- **Assets**: Arquivos estáticos como imagens e fontes.

### Camada de Aplicação (APP)

A camada de aplicação trata das informações que entram na aplicação e as disponibiliza para a camada de UI. Esta camada engloba:

- Configurações: Definições de serviços, rotas e outras configurações necessárias para o funcionamento da aplicação.
- Hooks e Contextos: Funcionalidades compartilhadas globalmente, como estados globais (stores), contextos e hooks personalizados, facilitando data e lógica entre componentes.
- Utilitários: Um conjunto de ferramentas e funções auxiliares que fornecem funcionalidades adicionais para a aplicação.
- Rotas: Definição de rotas e navegação dentro da aplicação, garantindo um roteamento adequado e interação do usuário.

### Camada de Dominio

A camada de dados é responsável por fornecer as informações necessárias para o funcionamento da aplicação. Pode envolver a obtenção de dados de APIs, bancos de dados ou qualquer outra fonte de dados. Inclui:

- **Services**: Interação com APIs para obter dados.
- **Models**: Modelos de dados para representar as informações da aplicação.

## Testes (Cypress) E2E Apenas

A pasta `cypress` contém testes de ponta a ponta para a aplicação. Os testes são escritos usando a ferramenta de teste Cypress para validar a funcionalidade da aplicação.

Essa arquitetura permite uma clara separação de responsabilidades, facilitando a manutenção do projeto e escalabilidade, e promovendo boas práticas de desenvolvimento como reutilização de código e testabilidade.

### Testes de Ponta a Ponta (E2E)

O Cypress se destaca nos testes de ponta a ponta (E2E), permitindo testar de forma abrangente a aplicação como um todo. Os testes E2E garantem que todos os componentes, módulos e integrações funcionem perfeitamente juntos, imitando as interações de um usuário real.

### Feedback Visual

Uma vantagem significativa do uso do Cypress é o feedback visual que ele fornece. Ele gera uma representação clara e visual de cada componente e seus comportamentos durante o processo de teste. Essa visão visual auxilia na identificação de quaisquer comportamentos inesperados, tornando a depuração e resolução de problemas mais eficientes.

Ao utilizar o Cypress para testes, a equipe de desenvolvimento pode garantir a robustez, funcionalidade e experiência do usuário da aplicação, levando a um produto mais confiável e de alta qualidade.

### Comandos de Teste Cypress

Para testar a aplicação via linha de comando, os seguintes comandos podem ser usados para diferentes tipos de testes:

#### Teste de Componente

Para executar testes de componentes:

```bash
npm run vitest:ui
```

Para executar testes de ponta a ponta (E2E):

```bash
npm run test-e2e
```

## Formatação de Código e Linting

Neste projeto, mantemos um estilo e formatação de código consistentes usando ferramentas de linting e formatação, nomeadamente ESLint e Prettier. Essas ferramentas ajudam a garantir um código limpo e uniforme em todo o código, promovendo a manutenibilidade e legibilidade do código.

### ESLint

O [ESLint](https://eslint.org/) é uma ferramenta de linting amplamente utilizada que ajuda a identificar e corrigir problemas no código JavaScript. Ele impõe padrões de codificação e melhores práticas, garantindo qualidade e consistência do código dentro do projeto.

### Prettier

O [Prettier](https://prettier.io/) é um formatador de código opinativo que impõe um estilo de código consistente em todo o projeto. Ele formata automaticamente o código para um estilo padronizado, eliminando debates sobre formatação de código e economizando tempo durante as revisões de código.

## Integração

Integramos ESLint e Prettier em nosso fluxo de trabalho de desenvolvimento para manter um alto padrão de qualidade e consistência de código. A integração é geralmente alcançada por meio de arquivos de configuração, como `.eslintrc` para regras do ESLint e `.prettierrc` para configuração do Prettier.

### Executando Linting e Formatação

Para lintar e formatar seu código, você pode usar os seguintes comandos:

```bash
# Executar ESLint (linting)
npm run lint

# Executar ESLint (correção)
npm run lint:fix
```

## Commits Convencionais

Este projeto segue o padrão de Commits Convencionais para mensagens de commit. Commits Convencionais é uma convenção leve sobre mensagens de commit, visando uma melhor legibilidade e possibilitando a geração automática de versões e changelogs.

### Estrutura da Mensagem de Commit

Uma mensagem de commit convencional segue esta estrutura:

- **Tipo**: Descreve o propósito do commit (por exemplo, feat, fix, chore, docs, style).
- **Escopo**: Indica a parte do projeto afetada pelo commit (opcional).
- **Mensagem**: Uma mensagem curta e descritiva das mudanças.

### Exemplos

- **feat: adicionar nova funcionalidade de pesquisa**
  Adiciona uma nova funcionalidade de pesquisa à aplicação.

- **fix: resolver problemas de estilo no cabeçalho**
  Resolve problemas de estilo no cabeçalho da aplicação.

- **chore: adicionar testes unitários para a camada de dados**
  Inclui novos testes unitários para a camada de dados.

### Benefícios

Seguir Commits Convencionais proporciona diversos benefícios:

- **Versionamento Automatizado**: Permite versionamento automático com base nos tipos de commit.
- **Geração de Changelog**: Facilita a geração de notas de lançamento e changelogs.
- **Histórico Legível**: Melhora a legibilidade e compreensão do histórico do projeto.

Ao aderir a esta convenção de mensagens de commit, o projeto mantém um histórico de commit consistente e informativo.

## Acessar a Aplicação

Para acessar a aplicação implantada, clique [aqui](link_para_sua_aplicação).

Esta abordagem de CI/CD garante um processo de desenvolvimento robusto, mantendo a qualidade do código e entregando uma aplicação confiável aos usuários por meio de implantações automatizadas e eficientes.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
