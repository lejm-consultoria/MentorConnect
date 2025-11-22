
## Getting Started

1. Run `npm install`
2. Run `npm run dev`


## 🚀 README: MentorConnect

### 🌟 Visão Geral do Projeto

O **MentorConnect** é uma plataforma inovadora que combina a funcionalidade robusta de uma rede social profissional (similar ao **LinkedIn**) com o poder da **Inteligência Artificial (IA)**. O objetivo é criar um ecossistema onde profissionais menos experientes (Mentees) possam se conectar com Mentores e, crucialmente, ter um **assistente de IA para a resolução imediata de dúvidas e problemas técnicos**.

-----

### 👥 Integrantes do Time

| Nome | RM |
| **Lucca Fernandes dos Santos** | RM563961 |
| **Murilo Mendes Marques** | RM564193 |
| **Enzo Ramos Condomitti** | RM565832 |

-----

### 🛠️ Tecnologias Envolvidas

Analisando a estrutura do projeto (`.tsx`, `vite.config.ts`, `tsconfig.json`, `tailwindcss`, `postcss.config.js`), a solução Front-end é desenvolvida com um *stack* moderno.

#### 💻 Front-end

| Tecnologia | Propósito |
| **React** | Biblioteca JavaScript para construção da interface de usuário, identificada pelos arquivos `.tsx` e a estrutura de `components` e `pages`. |
| **TypeScript (TS)** | Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e facilidade na manutenção do código. |
| **Vite** | Ferramenta de *build* rápido para o ambiente de desenvolvimento, configurada pelo arquivo `vite.config.ts`. |
| **Tailwind CSS** | Framework de CSS *utility-first* para estilização rápida e responsiva, configurado pelos arquivos `tailwind.config.js` e `postcss.config.js`. |

#### 🧠 Back-end & IA (Previsto no Escopo)

  * **Back-end:** Requer uma API (provavelmente Node.js/Express ou Python/Django) para autenticação, gerenciamento de perfis e comunicação com o banco de dados.
  * **Inteligência Artificial (IA):** Integração de um **Modelo de Linguagem Grande (LLM)** para o **Assistente de Resolução de Dúvidas**, utilizando APIs para fornecer suporte técnico instantâneo aos usuários.
  * **Banco de Dados:** PostgreSQL ou MongoDB (a ser definido).

-----

### ✨ Estrutura do Projeto

A organização do código-fonte (`src`) segue uma convenção comum em projetos React/Vite/TS, facilitando a navegação e o desenvolvimento modular.

```
/MentorConnect
└── /src
    ├── /components    # Componentes React reutilizáveis (ex: Botão, Card, Navbar)
    ├── /contexts      # Contextos React para gerenciamento de estado global (ex: AuthContext, ThemeContext)
    ├── /pages         # Componentes React que representam as páginas/rotas da aplicação (ex: Home, Perfil, Chat)
    ├── App.tsx        # Componente raiz da aplicação
    ├── index.tsx      # Ponto de entrada do React
    └── ...            # Arquivos de configuração e estilos globais
```

-----

### 🛠️ Como Configurar o Ambiente Local

Para rodar o MentorConnect em sua máquina, siga os passos abaixo:

#### 1\. Pré-requisitos

  * **Node.js:** Versão LTS recomendada.
  * **npm** ou **yarn** (Gerenciador de pacotes).

#### 2\. Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd MentorConnect
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

#### 3\. Execução

1.  **Inicie o servidor de desenvolvimento com Vite:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
2.  O projeto estará acessível em `http://localhost:5173`, conforme configurado no Vite.

-----

-----

Gostaria de adicionar as **funcionalidades principais** (similar ao README anterior) ou definir as **tarefas iniciais (issues)** para cada membro da equipe?
