# CLAUDE.md — Rexar Site Institucional

Instruções para o Claude Code trabalhar neste projeto.

## O que é este projeto

Site institucional da Rexar, empresa de software para energia solar fotovoltaica. Fase 1: landing pages (sem login/auth). Fase 2 futura: plataforma SaaS com dashboards, assinaturas e pagamentos.

## Stack

- Laravel 12 + PHP 8.4
- Inertia.js v3 + React 18
- Tailwind CSS v4 (sem tailwind.config.js — usa bloco `@theme` no CSS)
- Vite 8

## Comandos essenciais

```bash
# Desenvolvimento
npm run dev          # frontend com hot-reload
php artisan serve    # servidor Laravel (porta 8000)

# Produção
npm run build        # build dos assets

# Utilitários
php artisan route:list   # listar todas as rotas
php artisan config:clear # limpar cache de config
```

## Estrutura de arquivos importantes

| Arquivo | Função |
|---|---|
| `resources/css/app.css` | Design tokens — **editar aqui para mudar identidade visual** |
| `resources/js/data/produtos.js` | Dados dos produtos — **fonte única de verdade** |
| `resources/js/Pages/` | Páginas React (uma por rota) |
| `resources/js/Components/` | Componentes reutilizáveis |
| `app/Http/Controllers/PageController.php` | Controller de todas as páginas |
| `routes/web.php` | Definição de rotas |

## Convenções do projeto

- **Páginas** ficam em `resources/js/Pages/NomeDaPagina.jsx`
- **Componentes** ficam em `resources/js/Components/`
- **Dados de conteúdo** (textos, produtos) ficam em `resources/js/data/`
- Toda página usa o `AppLayout` como wrapper
- Cores e tipografia são definidas exclusivamente em `app.css` via `@theme`
- Slugs dos produtos: `levelead-crm`, `gd-solar-erp`, `solar-shop`, `crm-solar`
- O Header (`Components/Layout/Header.jsx`) tem submenu de "Produtos" (dropdown no desktop, accordion no mobile) gerado a partir de `data/produtos.js` — não precisa editar o Header ao adicionar/remover produto

## Schema de `data/produtos.js`

Além de `slug`, `nome`, `categoria`, `tagline`, `descricao`, `cor`, `icone`, `paraQuem` e `beneficios` (funcionalidades), cada produto tem:

| Campo | Uso |
|---|---|
| `dores` / `resultados` | Arrays **pareados por índice** (mesmo tamanho) — alimentam a seção "Antes/Depois" da página de produto; `dores[i]` sempre corresponde a `resultados[i]` |
| `comoFunciona` | 3-5 passos do fluxo do produto |
| `diferenciais` | Bullets de "por que escolher" |
| `faq` | Perguntas frequentes (accordion) |
| `personas` *(opcional)* | `{ persona, entrega }` — só nos produtos com essa segmentação documentada (hoje: LeveLead CRM, GD Solar ERP) |
| `planos` *(opcional)* | `{ nome, publico, inclui }` — sugestão de tiers sem preço fixo, venda consultiva (hoje: GD Solar ERP, Solar Shop) |

`Pages/Produto.jsx` renderiza cada produto com uma combinação diferente de variantes visuais (config `PRODUTO_STYLE` no topo do arquivo) para que as 4 páginas não pareçam o mesmo template recolorido — ver `docs/design-system.md`.

Conteúdo detalhado (tabelas de dor por perfil, módulos completos, mensagens-chave) está em `docs/produtos.md`; `produtos.js` é a versão condensada usada no site.

## Produtos do site

| Nome público | Slug | Cor |
|---|---|---|
| LeveLead CRM | `levelead-crm` | blue |
| GD Solar ERP | `gd-solar-erp` | green |
| Solar Shop | `solar-shop` | orange |
| CRM Solar | `crm-solar` | yellow |

> Nomes internos dos repositórios (não usar publicamente): levelead-crm, casaverde, solmar-loja, vendedorsolar

## Como adicionar uma nova página

1. Criar `resources/js/Pages/NovaPagina.jsx` usando `AppLayout`
2. Adicionar rota em `routes/web.php`
3. Adicionar método no `PageController.php`

## Como alterar a identidade visual

Edite apenas o bloco `@theme` em `resources/css/app.css`:

```css
@theme {
    --color-brand-500: #f97316;  /* laranja solar — cor primária */
    --color-dark-900:  #0c1628;  /* azul-marinho — cor secundária */
    --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

## Fase 2 (futuro)

A fase 2 incluirá: sistema de login/cadastro, dashboards (admin e cliente), compra de assinaturas, pagamentos (boleto/Pix). Manter compatibilidade de rotas e componentes existentes ao evoluir.
