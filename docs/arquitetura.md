# Arquitetura — Rexar Site Institucional

## Visão geral

O site segue o padrão **Laravel + Inertia.js + React** (também conhecido como "VILT stack" sem Vue, usando React no lugar).

```
Navegador
   │
   ▼
Laravel (PHP) — roteamento, middleware, Inertia response
   │
   ▼
Inertia.js — ponte entre Laravel e React (sem API REST)
   │
   ▼
React (frontend) — renderiza as páginas no cliente
   │
   ▼
Tailwind CSS — estilização via classes utilitárias
```

## Fluxo de uma requisição

1. Usuário acessa `/produtos/crm-solar`
2. Laravel resolve a rota → `PageController::produto('crm-solar')`
3. Controller retorna `Inertia::render('Produto', ['slug' => 'crm-solar'])`
4. Inertia envia o componente e os props para o React
5. React renderiza `Pages/Produto.jsx` com o slug como prop
6. O componente busca os dados em `data/produtos.js` via `getProduto(slug)`
7. Página renderizada no navegador

## Decisões técnicas

### Por que Laravel + Inertia + React?

- Os 4 outros sistemas da Rexar já usam Laravel — consistência tecnológica
- Laravel tem auth, billing (Cashier), e permissions prontos para a Fase 2
- Inertia elimina a necessidade de uma API REST separada
- React é mais familiar para o mercado e tem mais componentes disponíveis

### Por que Tailwind CSS v4?

- Design tokens via `@theme` no CSS (sem arquivo de configuração separado)
- Todos os tokens de identidade visual centralizados em `app.css`
- Fácil de modificar cores/fontes sem conhecer a estrutura do projeto

### Por que dados no frontend (`data/produtos.js`)?

Na Fase 1, os produtos são conteúdo estático — não precisam de banco de dados. Mantê-los em um arquivo JS:
- Elimina queries desnecessárias
- Permite edição fácil por não-desenvolvedores
- Na Fase 2, pode ser migrado para banco de dados sem alterar os componentes

## Estrutura de componentes

```
AppLayout (wrapper de todas as páginas)
  ├── Header
  │     ├── Logo
  │     └── navegação (links)
  ├── <conteúdo da página>
  └── Footer

Componentes UI reutilizáveis:
  ├── Button (variantes: primary, secondary, outline, ghost, dark)
  └── Badge (cores: blue, green, orange, yellow, brand, dark)
```

## Rotas

```
GET /                       → Home
GET /sobre                  → Sobre
GET /produtos               → Hub de produtos
GET /produtos/{slug}        → Página individual de produto
GET /contato                → Contato
```

## Fase 2 — Expansão para plataforma SaaS

Quando a Fase 2 for iniciada, a arquitetura será expandida com:

- **Autenticação:** Laravel Breeze ou Jetstream (Inertia + React)
- **Permissões:** Spatie Laravel Permission (já usado nos outros sistemas)
- **Assinaturas:** Laravel Cashier (Stripe) ou integração com Cora (boleto/Pix)
- **Dashboards:** novas páginas em `Pages/Admin/` e `Pages/Cliente/`
- **API:** rotas em `routes/api.php` para integrações futuras

As páginas de landing existentes **não serão alteradas** — a Fase 2 adiciona novas rotas sem quebrar as existentes.
