
Adicionar comentário para a turma...


Aviso: "Seja bem-vindo à emocionante jornada da…"
Sandro Matheus Ramos
Criado em: 29 de jul.29 de jul.
Seja bem-vindo à emocionante jornada da matéria de Projeto de Programação Web!

Nessa matéria, embarcaremos juntos em uma incrível viagem através dos fundamentos essenciais do front-end. Aqui, você descobrirá como dar vida a seus projetos, entendendo como desenvolver código com elegância e eficiência.

Lembrem-se sempre de que cada linha de código escrita é uma oportunidade para criar algo verdadeiramente excepcional. Nossos erros serão aprendizados valiosos, seu esforço será recompensado e juntos, alcançaremos novos patamares de excelência.

Este é o momento de explorar, experimentar e expandir seus horizontes. Não há limite para o que podemos alcançar quando nos dedicamos genuinamente e com perseverança.

Bem-vindos a bordo!

Link Notion do primeiro bimestre: https://maze-leaf-ed4.notion.site/Projeto-Web-Primeiro-BI-ce94e7716c1245f6ae91bdfe812c9041?pvs=4

Adicionar comentário para a turma...

## Qual gerenciador de pacotes?

**npm (Node Package Manager)** e **Yarn** são dois dos gerenciadores de pacotes mais populares no ecossistema JavaScript. Eles são usados para instalar, atualizar e gerenciar dependências em projetos que utilizam Node.js.

### 1. **npm (Node Package Manager)**
   Lançado em 2010, npm é o gerenciador de pacotes oficial do Node.js. Ele vem instalado automaticamente com o Node.js e se tornou a ferramenta padrão para gerenciar dependências JavaScript.
   - **Comandos Comuns**:
     - **`npm init`**: Inicializa um novo projeto Node.js e cria um arquivo `package.json`.
     - **`npm install` ou `npm i`**: Instala as dependências listadas no `package.json`. Quando usado com o nome de um pacote, instala aquele pacote específico.
     - **`npm install <package-name>`**: Instala um pacote específico e o adiciona ao `package.json`.
     - **`npm start`**: Executa o script `start` definido no `package.json`.
     - **`npm run <script-name>`**: Executa um script personalizado definido no `package.json`.
   - **Arquitetura**:
     - **`package.json`**: Contém as dependências do projeto e scripts de automação.
     - **`node_modules/`**: Diretório onde todas as dependências são instaladas.
     - **`package-lock.json`**: Arquivo que garante que as mesmas versões de pacotes sejam instaladas em cada máquina onde o projeto é clonado, mantendo a consistência do projeto.
   - **Vantagens**:
     - **Amplamente utilizado**: Como é o padrão, quase todos os desenvolvedores de Node.js têm experiência com npm.
     - **Grande ecossistema**: A maioria dos pacotes JavaScript é disponibilizada via npm.
     - **Support for Workspaces**: A partir do npm 7, introduziu suporte para workspaces, permitindo que você gerencie múltiplos pacotes em um único repositório.
   - **Desvantagens**:
     - **Desempenho**: Historicamente, npm tinha problemas de desempenho em comparação com alternativas como Yarn, mas melhorias significativas foram feitas nas versões mais recentes.
     - **Bloqueio de versão (pre-`package-lock.json`)**: Versões anteriores ao `package-lock.json` não garantiam a consistência das dependências instaladas.

### 2. **Yarn**
   Lançado em 2016 pelo Facebook, Yarn foi criado como uma alternativa ao npm, com o objetivo de resolver alguns de seus problemas, especialmente em relação ao desempenho e confiabilidade.
   - **Comandos Comuns**:
     - **`yarn init`**: Inicializa um novo projeto Yarn e cria um arquivo `package.json`.
     - **`yarn`**: Instala as dependências listadas no `package.json` (equivalente ao `npm install`).
     - **`yarn add <package-name>`**: Instala um pacote específico e o adiciona ao `package.json`.
     - **`yarn start`**: Executa o script `start` definido no `package.json`.
     - **`yarn run <script-name>`**: Executa um script personalizado definido no `package.json`.
   - **Arquitetura**:
     - **`package.json`**: Igual ao npm, contendo dependências e scripts de automação.
     - **`node_modules/`**: Diretório onde as dependências são instaladas.
     - **`yarn.lock`**: Similar ao `package-lock.json`, garante a consistência das versões de pacotes instalados.
   - **Vantagens**:
     - **Desempenho**: Yarn introduziu a instalação paralela de pacotes, o que o tornou significativamente mais rápido que o npm na época do lançamento.
     - **Determinismo**: Yarn foi um dos primeiros a garantir que as instalações fossem determinísticas, ou seja, a mesma versão de uma dependência seria instalada em todas as máquinas.
     - **Workspaces**: Suporte nativo para workspaces desde o início, permitindo a gestão eficiente de múltiplos pacotes em um monorepo.
     - **Plug'n'Play (PnP)**: Introduzido no Yarn 2, remove a necessidade de `node_modules`, melhorando a performance e reduzindo o uso de espaço em disco.
   - **Desvantagens**:
     - **Complexidade**: Algumas funcionalidades avançadas, como Plug'n'Play, podem ser complexas para iniciantes.
     - **Fragmentação**: O uso de duas ferramentas diferentes (npm e Yarn) pode criar fragmentação dentro de equipes.

**Comparação**:
- **Popularidade**: npm continua sendo o padrão de fato e é mais amplamente utilizado, enquanto Yarn é preferido em alguns ambientes que priorizam desempenho e confiabilidade.
- **Desempenho**: Historicamente, Yarn tinha uma vantagem de desempenho, mas npm tem se igualado com as versões mais recentes.
- **Determinismo**: Ambos oferecem garantias de determinismo com `yarn.lock` e `package-lock.json`.

### **Conclusão**:
Ambos npm e Yarn são ferramentas poderosas, e a escolha entre eles depende das necessidades específicas do projeto. Para desenvolvedores que buscam simplicidade e integração nativa com Node.js, npm é uma excelente escolha. Já aqueles que precisam de recursos avançados, como workspaces, ou que priorizam desempenho, podem preferir Yarn. Com as melhorias recentes em ambos, a diferença prática entre os dois diminuiu bastante, tornando a escolha mais uma questão de preferência pessoal ou de requisitos específicos do projeto.

---

## Criando projeto

Existem várias maneiras de iniciar um projeto React, dependendo das necessidades do projeto e da experiência do desenvolvedor. Aqui estão as principais abordagens:

Aqui estão as principais maneiras de iniciar um projeto React:

1. **Create React App (CRA)**: Fácil de usar, ideal para iniciantes. Configuração automática com suporte a ESLint, Webpack, e Babel.
   - Comando: `npx create-react-app nome-do-projeto`

2. **Vite**: Ferramenta rápida e otimizada para desenvolvimento moderno.
   - Comando: `npm create vite nome-do-projeto --template react-ts`

3. **Next.js**: Framework avançado com suporte a SSR e SSG, ideal para projetos que precisam de SEO.
   - Comando: `npx create-next-app nome-do-projeto`

4. **Manual Setup**: Configuração manual para controle total, usando Webpack, Babel, etc.
   - Comando: Instale e configure dependências manualmente.

5. **Parcel**: Ferramenta de build simples sem necessidade de configuração.
   - Comando: `npx parcel index.html`

> Vamos utilizar em nosso projeto a segunda maneira, utilizando [**vite**](https://vitejs.dev/).

---

## Arquivos gerados no build

Quando você cria um novo projeto React usando Vite, ele gera uma estrutura de diretórios e arquivos básicos. Abaixo está uma descrição dos principais arquivos e pastas que são gerados:

1. **`index.html`**
    - **Localização**: Raiz do projeto.
    - Arquivo HTML principal do projeto. Contém o ponto de entrada onde o React é montado (`<div id="root"></div>`). É aqui que o bundle gerado pelo Vite será injetado durante o build.

2. **`src/`**
   - Diretório principal para o código-fonte do projeto. Aqui você encontrará os arquivos React e CSS.

   - **Principais arquivos em `src/`:**
     - **`main.tsx`**: Ponto de entrada do aplicativo React. Aqui, o ReactDOM renderiza o componente raiz (`<App />`) dentro do elemento DOM com o ID `root` no `index.html`.
       - **Exemplo**:
         ```tsx
            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import App from './App.tsx'
            import './index.css'

            createRoot(document.getElementById('root')!).render(
            <StrictMode>
                <App />
            </StrictMode>,
            )
         ```

     - **`App.tsx`**: Componente principal do React, onde a estrutura inicial da aplicação é definida. Normalmente é o ponto de partida para criar a interface do usuário.
       - **Exemplo**:
         ```tsx
         function App() {
           return (
             <div className="App">
               <h1>Hello Vite + React!</h1>
             </div>
           );
         }

         export default App;
         ```

     - **`index.css`**: Arquivo CSS global onde você pode definir estilos para toda a aplicação. Ele é importado em `main.tsx`.

3. **`package.json`**
   - **Descrição**: Contém informações sobre o projeto e suas dependências. Aqui estão os scripts que você pode usar para iniciar o servidor de desenvolvimento, construir o projeto, etc.
   - **Principais scripts**:
     - **`dev`**: Inicia o servidor de desenvolvimento.
     - **`build`**: Compila o projeto para produção.
     - **`preview`**: Inicia um servidor para visualizar o build de produção.

4. **`vite.config.js`**
   - **Descrição**: Arquivo de configuração do Vite. Aqui você pode configurar ajustes como plugins, resoluções de caminho, proxies, entre outros.

5. **`node_modules/`**
   - **Descrição**: Diretório onde todas as dependências do projeto são instaladas via npm ou yarn. Ele é gerado automaticamente após a execução do comando `npm install` ou `yarn`.

6. **`public/`**
   - **Descrição**: Diretório para arquivos estáticos. Qualquer arquivo colocado aqui será copiado para o diretório de build como está, sem passar por processamento. Exemplos comuns incluem imagens, fontes e favicon.

7. **`.gitignore`**
   - **Descrição**: Lista de arquivos e diretórios que o Git deve ignorar. Geralmente inclui `node_modules/`, arquivos de build, e arquivos de configuração de IDEs.

8. **`README.md`**
   - **Descrição**: Arquivo de documentação básica do projeto, gerado automaticamente. Contém informações sobre como iniciar e usar o projeto.

Essa estrutura inicial com Vite é minimalista e flexível, permitindo que você rapidamente comece a desenvolver sua aplicação React.

---

## Criando arquivos e pastas iniciais

No projeto em `/src` vamos criar a pasta `/pages` e nesse diretório vamos criar pasta `/home`. Nesse diretório vamos criar o arquivo **index.tsx**. 

Arquivo **index.tsx** abaixo:

```tsx
export default function Home() {
    return (
        <main>
            <p>
                Teste
            </p>
        </main>
    )
}
```

Vamos então excluir o arquivo **App.css** e **App.tsx**. Também vamos adicionar no arquivo `main.tsx` o component `Home`.

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/home/Home"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
```

---

## Criando arquivo `index.css`

Vamos criar em `/src` a pasta styles, nela vamos mover o arquivo `index.css` e vamos remover todo o conteúdo existente.

Este arquivo CSS define uma série de estilos básicos e variáveis CSS para criar uma base consistente para o desenvolvimento de uma interface web. A seguir, vou descrever o que cada seção faz:

### 1. Reset estilos e ajustes globais:

**Selecionadores universais (`*`, `*::before`, `*::after`)**:
     
```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

- Acima configuramos o `box-sizing` para todos os elementos, bem como seus pseudo-elementos `::before` e `::after`, para `border-box`. Isso faz com que o padding e a borda de um elemento sejam incluídos em sua largura e altura totais, simplificando o layout.

**Estilos globais (`*`)**:
```css
* {
    margin: 0;
    padding: 0;
    font: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

- Remove a margem e o padding padrão de todos os elementos, herda as configurações de fonte do elemento pai, e aplica técnicas de suavização de fontes para melhorar a renderização do texto em diferentes navegadores.

### 2. Variáveis CSS:

**:root**:
```css
:root {
    --bg-color: #FFF;
    --text-color: #252B42;
    --second-text-color: #737373;
    --light-text-color: #FFF;
    --light-gray: #F8F8F8;
    --primary-color: #23A6F0;
    --secondary-color: #B2E3FF;

    --ff-sans: "Montserrat", system-ui, sans-serif;
    --fw-base: 400;
    --fw-md: 500;
    --fw-bold: 800;

    --fs-sm: 0.875rem;
    --fs-base: 1rem;
    --fs-lg: 1.25rem;
    --fs-xl: 1.75rem;
    --fs-2xl: 2.25rem;

    --py-sm: 0.875rem;
    --py-base: 1rem;
    --py-lg: 1.5rem;
    --py-xl: 3rem;
    --px-lg: 1.5rem;
}
```

- Define várias variáveis CSS, que podem ser reutilizadas em todo o documento. Isso inclui cores (para fundo, texto e elementos), famílias de fontes, pesos de fonte, tamanhos de fonte, e espaçamentos. As variáveis tornam mais fácil alterar o estilo da interface em um único lugar e aplicá-las de forma consistente em todo o projeto.

### 3. Estilos de HTML e Body:

**`html`**:
```css
html {
    font-family: var(--ff-sans);
    font-weight: var(--fw-base);
    font-size: var(--fs-base);
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
    scroll-behavior: smooth;
}
```

- Configura a fonte padrão, peso, tamanho, altura da linha e cor do texto para o documento. Especifica que o overflow horizontal deve ser escondido e que o comportamento de rolagem deve ser suave.

**`body`**:
```css
body {
    background-color: var(--bg-color);
    overflow-x: hidden;
}
```

- Define a cor de fundo do corpo da página e esconde o overflow horizontal.

### 4. Estilos para títulos (`h1`, `h2`, `h3`):
**Títulos**:
```css
h1, h2, h3 {
    line-height: 1.2;
    color: var(--text-color);
    font-weight: var(--fw-bold);
    letter-spacing: -0.04em;
}
```

- Define a altura da linha, cor do texto, peso da fonte e espaçamento entre letras para títulos, garantindo consistência e legibilidade.

**Específico para cada título**:
```css
h1 {
    font-size: var(--fs-2xl);
}

h2 {
    font-size: var(--fs-xl);
}

h3 {
    font-size: var(--fs-lg);
}
```

- Especifica os tamanhos de fonte para `h1`, `h2` e `h3`, usando as variáveis definidas anteriormente.

### 5. Estilos de links (`a`):

**Links**:
```css
a {
    text-decoration: none;
    color: var(--second-text-color);
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
}

a:hover {
    color: var(--primary-color);
}
```

- Remove a decoração padrão (sublinhado) dos links e herda a cor do texto. No estado de hover, o texto do link adquire a cor principal definida e aplica uma técnica de clipping de fundo para criar um efeito visual interessante.

### 6. Estilo de imagens (`img`):

**Imagens**:
```css
img {
    max-width: 100%;
    display: inline-block;
}
```

- Define que as imagens nunca excedam 100% de sua largura conteiner e que sejam exibidas como blocos inline.

### 7. Estilo para listas (`ul`):

**Listas não ordenadas**:
```css
ul {
    list-style: none;
}
```

- Remove o estilo de lista padrão (marcadores) de todas as listas não ordenadas (`ul`).

### 8. Definições responsividade (Media Queries):

**Definições para telas maiores**:

```css
@media (width >= 1280px) {
    :root {
        --fs-lg: 2rem;
        --fs-xl: 2.625rem;
        --fs-2xl: 4rem;

        --py-sm: 1rem;
        --py-base: 1.5rem;
        --py-lg: 2.5rem;
        --py-xl: 5rem;
        --pg-lg: 2rem;
    }
}
```

- Ajusta as variáveis de tamanho de fonte e padding para telas maiores (largura mínima de 1280px), aumentando as dimensões para melhorar a legibilidade e o espaçamento em dispositivos de grande porte.

---

## Adicionando font

Vamos utilizar o Google Fonts para adicionar a font personalizada definida no style guide ao projeto.

Vamos acessar o Google Fonts e selecionar a font desejada, vamos clicar em "Get font", depois em "Get embed code" e adicionamos o código no head do nosso html.

Exemplo do passo-a-passo:
![Fonte encontrada](https://github.com/user-attachments/assets/f255eed3-4039-44b7-b708-639e542d824e)
![Visualizar embed code](https://github.com/user-attachments/assets/c2abd9a6-3bbf-44c3-b725-6c203984dbc0)
![Copiando embed code](https://github.com/user-attachments/assets/d1e27ceb-df66-40cb-b487-5f484fbf8aeb)

Adicionando no head do `index.html`:

```html
<head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Landing</title>
</head>
```

---

## Criando estilo `utility.css`

Esse arquivo define várias classes utilitárias que podem ser usadas para aplicar rapidamente estilos comuns em um projeto web. Ele foca principalmente em espaçamento, layout e responsividade. Aqui está uma descrição das classes definidas:

### 1. Classes de padding (`.py-base`, `.py-lg`, `.py-xl`, `.px-lg`):
**`.py-base`, `.py-lg`, `.py-xl`**:
```css
.py-base {
    padding-block: var(--py-base);
}

.py-lg {
    padding-block: var(--py-lg);
}

.py-xl {
    padding-block: var(--py-xl);
}
```

- Define o padding vertical (acima e abaixo) para os elementos usando variáveis. 
- `padding-block`: Aplica padding tanto ao topo quanto à parte inferior do elemento.
- As variáveis `--py-base`, `--py-lg`, e `--py-xl` representam diferentes valores de padding, definidos previamente no arquivo `index.css`.

**`.px-lg`**:
```css
.px-lg {
    padding-inline: var(--px-lg);
}
```

- Define o padding horizontal (à esquerda e à direita) usando a variável `--px-lg`.
- `padding-inline`: Aplica padding tanto à esquerda quanto à direita do elemento.

### 2. Classe para visibilidade somente desktop (`.desktop-only`):

**`.desktop-only`**:
```css
.desktop-only {
    display: none;
}
```
- Inicialmente oculta o elemento (usando `display: none;`). Essa classe é usada para elementos que devem ser visíveis apenas em telas maiores, como desktops.

### 3. Classes de layout (`.even-columns`, `.items-center`, `.flex`, `.grid`):

**`.even-columns`**:
```css
.even-columns {
    display: grid;
    gap: 1rem;
}
```
- Configura o elemento como um grid com espaçamento (`gap`) de 1rem entre os itens. É útil para criar layouts com colunas de tamanhos iguais.

**`.items-center`**:
```css
.items-center {
    align-items: center;
}
.justify-between {
    justify-content: space-between;
}
```
- Centraliza verticalmente os itens em um conteiner flex ou grid.
- Define como o navegador distribui espaço entre os itens de conteúdo ao longo do eixo principal de um conteiner flex.

**`.flex`**:
```css
.flex {
    display: flex;
}
```
- Define o elemento como um conteiner flex, permitindo o uso do modelo de layout Flexbox.

**`.grid`**:
```css
.grid {
    display: grid;
}
```
- Define o elemento como um conteiner de grid, permitindo o uso do modelo de layout CSS Grid.

### 4. Classes de espaçamento (`.gap-1`, `.gap-1.5`):

**`.gap-1`, `.gap-1.5`**:
```css
.gap-1 {
    gap: 1rem;
}

.gap-1\.5 {
    gap: 1.5rem;
}

.btn-wrapper {
    cursor: pointer;
    padding: 2px;
}
```

- Define o espaçamento (`gap`) entre os itens dentro de um conteiner flex ou grid. O valor de `gap` é definido em `rem` e varia entre 1rem e 1.5rem.
- Apenas uma classe para adicionarmos aspectos de botão a qualquer elemento, utilizado juntamente aos ícones.

### 5. Classe de container responsivo (`.container`):

**`.container`**:
```css
.container {
    --max-width: 680px;
    width: min(var(--max-width), 100% - var(--px-lg) * 2);
    margin-inline: auto;
}
```

- Define um conteiner centralizado e responsivo
- **`--max-width: 680px;`**: Define a largura máxima padrão do conteiner como 375px.
- **`width: min(...)`**: Define a largura do conteiner como a menor entre `--max-width` e 100% menos duas vezes o padding horizontal (`var(--px-lg) * 2`), garantindo que ele não ultrapasse a largura da tela.
- **`margin-inline: auto;`**: Centraliza o conteiner horizontalmente.

### 6. Responsividade (Media Queries):
**@media (width >= 1280px)**:
```css
@media (width >= 1280px) {
    .container {
        --max-width: 1050px;
    }

    .desktop-only {
        display: initial;
    }

    .even-columns {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }
}
```

- Aplica estilos específicos para telas grandes (largura mínima de 1280px)
- **`.container`**: Aumenta a largura máxima do conteiner para 1280px.
- **`.desktop-only`**: Torna visíveis elementos que estavam ocultos em telas menores (`display: initial;`).
- **`.even-columns`**: Modifica o comportamento do grid para dispor os itens em colunas de largura igual (`grid-auto-flow: column;` e `grid-auto-columns: 1fr;`).

---

### Criando nosso Header

Realizar a criação da logo - [brandmark.io](https://app.brandmark.io/v3/)

Editar SVG - [vecteezy](https://www.vecteezy.com)

Criar component SVG - [svg2jsx](https://svg2jsx.com)

## Criando header.css

Criar o arquivo na pasta styles, de inicio definimos o funcionamento da tag `a` no contexto do header:
```css
.reverse-color {
  color: var(--primary-color);
}

.reverse-color:hover {
  color: var(--second-text-color);
}
```

Definindo comportamento menu mobile:
```css
.ml-lg {
  margin-right: 2.875rem;
}

.mobile-menu {
  display: initial;
  z-index: 3;
}

.mobile-menu-content {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  padding-top: 2.25rem;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
}

.mobile-menu-content ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.mobile-menu-content a {
  font-size: var(--fs-lg);
}
```

Comportamento no desktop:
```css
@media (width >= 1280px) {
  header {
    position: relative;
    z-index: 1;
  }

  nav > img {
    display: initial;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu-content {
    display: none;
  }
}
```

## Iniciando o componente header

Criando o componente `header.tsx` na pasta pages:

```tsx
import Logo from "../../assets/logo.svg";
import "../../styles/header.css";
import "../../styles/utility.css";

export default function Home() {
    return (
        <>
            <header className="container py-sm">
                
            </header>
        </>
    )
}
```

Adicionando imagem da logo:
```tsx
<nav className="flex items-center justify-between">
    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
</nav>
```

Adicionando lista opções menu, logo abaixo da tag `img`:
```tsx
<div className="desktop-only">
    <ul className="flex gap-1">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#solution">Soluções</a>
        </li>
        <li>
            <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
            <a href="#pricing">Preços</a>
        </li>
        <li>
            <a href="#contact">Contato</a>
        </li>
    </ul>
</div>          
```

Logo abaixo, vamos adicionar o link de login e botão cadastre-se, note que já vamos criar o componente `Button` em seguida:
```tsx
<div className="desktop-only">
    <div className="flex items-center">
        <a className="reverse-color ml-lg" href="">Login</a>
        <Button text="Cadastre-se" />
    </div>
</div>
```

Logo abaixo vamos adicionar a parte responsável por nossa renderização no mobile. Para isso vamos utilizar o hook [useState](https://react.dev/reference/react/useState) para aplicar mudanças a nossa interface.
```tsx
<div className="mobile-menu">
    {showMobileMenu ?
        <div className="mobile-menu-content">
            <div className="container flex">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#solution">Soluções</a>
                    </li>
                    <li>
                        <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#pricing">Preços</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
            </div>
        </div>
        :
        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
            <img src={Menu} alt="ícone menu" width={24} height={24} />
        </span>
    }
</div>
```

Criamos nosso state como variavel em nosso componente:
```tsx
export default function Home() {
    //Só adicionar essa linha, esse cara é o hook useState
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
            ...resto do componente já criado
```


### Criando componente Button

Na pasta styles vamos criar o arquivo `buttons.css`:
```css
.btn-primary {
    width: 100%;
    background: var(--primary-color);
    color: var(--light-text-color);
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
    padding-block: 0.825rem;
    padding-inline: 1.5rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: solid transparent 0.15rem;
}

.btn-primary:hover {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-secondary {
    width: 100%;
    background: transparent;
    color: var(--primary-color);
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
    padding-block: 0.825rem;
    padding-inline: 1.5rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: solid var(--primary-color) 0.15rem;
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: var(--light-text-color);
    border-color: transparent;
}
```

Na pasta `src/components` vamos criar o componente `Button.tsx`:
```tsx
import "../../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}
```

### 🎉 Parabéns! Você finalizou a parte um do nosso projeto!
part-one.md
Exibindo part-one.md…