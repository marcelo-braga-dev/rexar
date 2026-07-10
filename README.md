# Rexar — Site Institucional

Site institucional da **Rexar**, empresa especializada em software para o setor de energia solar fotovoltaica.

## Produtos

| Sistema | Descrição |
|---|---|
| **LeveLead CRM** | CRM de prospecção e vendas outbound |
| **GD Solar ERP** | ERP para geração compartilhada e assinatura de energia solar |
| **Solar Shop** | E-commerce de equipamentos solares |
| **CRM Solar** | CRM de orçamento e venda de projetos solares |

## Stack

- **Backend:** Laravel 12 + PHP 8.4
- **Frontend:** Inertia.js v3 + React 18
- **Estilo:** Tailwind CSS v4
- **Build:** Vite 8

## Requisitos

- PHP 8.2+
- Composer 2+
- Node.js 18+
- npm 9+

## Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/marcelo-braga-dev/rexar.git
cd rexar

# 2. Instalar dependências PHP
composer install

# 3. Instalar dependências JS
npm install

# 4. Configurar ambiente
cp .env.example .env
php artisan key:generate

# 5. Build do frontend
npm run build

# 6. Subir o servidor
php artisan serve
```

Acesse em **http://localhost:8000**

## Desenvolvimento

```bash
# Rodar frontend em modo watch (hot-reload)
npm run dev

# Em outro terminal, rodar o servidor Laravel
php artisan serve
```

## Estrutura do projeto

```
resources/
  css/
    app.css              # Design tokens (cores, fontes) — edite aqui para mudar a identidade visual
  js/
    data/
      produtos.js        # Dados dos 4 produtos — fonte única de verdade
    Components/
      Layout/
        AppLayout.jsx    # Layout base (Header + Footer)
        Header.jsx
        Footer.jsx
      Logo.jsx
      UI/
        Button.jsx
        Badge.jsx
    Pages/
      Home.jsx
      Produtos.jsx
      Produto.jsx        # Página dinâmica por slug
      Sobre.jsx
      Contato.jsx
app/
  Http/
    Controllers/
      PageController.php
    Middleware/
      HandleInertiaRequests.php
routes/
  web.php
docs/                    # Documentação técnica do projeto
```

## Páginas

| Rota | Página |
|---|---|
| `/` | Home (landing principal) |
| `/sobre` | Sobre a Rexar |
| `/produtos` | Hub com todos os produtos |
| `/produtos/{slug}` | Página individual de cada produto |
| `/contato` | Formulário de contato e canais |

## Identidade visual

Todas as variáveis de design estão centralizadas no bloco `@theme` do arquivo `resources/css/app.css`. Para alterar cores, fontes ou raios de borda, edite apenas esse arquivo.

```css
@theme {
    --color-brand-500: #f97316;  /* cor primária */
    --color-dark-900:  #0c1628;  /* cor secundária */
    --color-accent-400: #fbbf24; /* destaque */
}
```

## Adicionar ou editar um produto

Edite o arquivo `resources/js/data/produtos.js` — ele é a fonte única de dados dos produtos e alimenta automaticamente todas as páginas (Home, Hub, página individual).

## Deploy

Consulte a documentação de deploy em [`docs/deploy.md`](docs/deploy.md).

## Documentação completa

- [`docs/arquitetura.md`](docs/arquitetura.md) — arquitetura e decisões técnicas
- [`docs/design-system.md`](docs/design-system.md) — guia do design system
- [`docs/produtos.md`](docs/produtos.md) — conteúdo e descrição dos produtos
- [`docs/deploy.md`](docs/deploy.md) — instruções de deploy
