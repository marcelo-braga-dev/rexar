# Design System — Rexar

## Como modificar a identidade visual

**Todas as variáveis estão em `resources/css/app.css`**, no bloco `@theme`. Altere apenas esse arquivo para mudar cores, fontes ou raios de borda em todo o site.

```css
@theme {
    /* Tipografia */
    --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;

    /* Cor primária (laranja solar) */
    --color-brand-500: #f97316;
    --color-brand-600: #ea580c;  /* hover */

    /* Cor secundária (azul-marinho) */
    --color-dark-900: #0c1628;

    /* Destaque (amarelo solar) */
    --color-accent-400: #fbbf24;
}
```

## Paleta completa

### Cor primária — Laranja Solar

| Token | Valor | Uso |
|---|---|---|
| `brand-50` | `#fff7ed` | Fundos suaves, hover de cards |
| `brand-100` | `#ffedd5` | Fundos de badges, ícones |
| `brand-400` | `#fb923c` | Textos em fundo escuro |
| `brand-500` | `#f97316` | **Cor principal** — botões, CTAs |
| `brand-600` | `#ea580c` | Hover de botões |

### Cor escura — Azul-Marinho

| Token | Valor | Uso |
|---|---|---|
| `dark-50` | `#f8fafc` | Fundo de seções claras |
| `dark-100` | `#f1f5f9` | Bordas suaves, fundos de inputs |
| `dark-200` | `#e2e8f0` | Bordas de cards |
| `dark-500` | `#64748b` | Textos secundários |
| `dark-700` | `#334155` | Textos de corpo |
| `dark-900` | `#0c1628` | **Header, Hero, Footer** |

### Cores por produto

| Produto | Cor | Classes usadas |
|---|---|---|
| LeveLead CRM | Azul | `bg-blue-50`, `text-blue-600` |
| GD Solar ERP | Verde | `bg-green-50`, `text-green-600` |
| Solar Shop | Laranja | `bg-orange-50`, `text-orange-600` |
| CRM Solar | Amarelo | `bg-yellow-50`, `text-yellow-600` |

## Tipografia

- **Fonte:** Inter (Google Fonts)
- **Pesos usados:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Escala:**
  - `text-xs` (12px) — labels, badges, legendas
  - `text-sm` (14px) — corpo secundário, listas
  - `text-base` (16px) — corpo principal
  - `text-lg` / `text-xl` — subtítulos, destaques
  - `text-2xl` → `text-6xl` — títulos e hero

## Componentes

### Button

```jsx
import Button from '@/Components/UI/Button';

<Button variant="primary">Solicitar demo</Button>
<Button variant="secondary">Ver mais</Button>
<Button variant="outline">Saiba mais</Button>
<Button variant="dark">Entrar em contato</Button>

// Tamanhos: sm | md (padrão) | lg
<Button size="lg">CTA grande</Button>
```

### Badge

```jsx
import Badge from '@/Components/UI/Badge';

<Badge color="brand">Energia Solar</Badge>
<Badge color="blue">CRM</Badge>
<Badge color="green">ERP</Badge>
<Badge color="orange">E-commerce</Badge>
<Badge color="yellow">CRM Solar</Badge>
```

### Logo

```jsx
import Logo from '@/Components/Logo';

<Logo />                              // padrão (texto escuro)
<Logo textClass="text-white" />       // texto branco (para fundo escuro)
<Logo className="gap-3" />            // customizar container
```

## Padrão de seções

Todas as seções seguem este padrão de espaçamento:

```jsx
<section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Badge + Título + Subtítulo */}
        <div className="text-center mb-14">
            <Badge color="brand" className="mb-4">Rótulo da seção</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Título</h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">Subtítulo</p>
        </div>
        {/* Conteúdo */}
    </div>
</section>
```

## Alternância de fundos entre seções

Para criar ritmo visual, as seções alternam entre:
- `bg-white` — fundo branco
- `bg-dark-50` — fundo cinza muito claro
- `bg-dark-900 text-white` — fundo escuro (hero, CTA final)
- `bg-brand-500` — fundo laranja (CTA de destaque)

## Variantes de página de produto (`Pages/Produto.jsx`)

Cada produto usa uma combinação diferente das variantes abaixo (definida em `PRODUTO_STYLE`, no topo de `Produto.jsx`), para que as 4 páginas de produto não sejam o mesmo template recolorido.

### Comparação "Antes/Depois"

Consome os arrays pareados `produto.dores` e `produto.resultados` (mesmo índice = mesmo tópico).

- **`linha`** — cards lado a lado (dor à esquerda em `bg-dark-50` com ✕, resultado à direita em `c.tint` com ✓), conectados por uma seta no meio. Usado em LeveLead CRM e Solar Shop.
- **`timeline`** — trilha vertical com pontos conectados por uma linha; a dor aparece riscada (`line-through`) acima do resultado em destaque. Usado em GD Solar ERP e CRM Solar.

### Grade de "Funcionalidades"

Consome `produto.beneficios` (`{ titulo, descricao }`).

- **`grid`** — cards 3 colunas com número em badge `c.soft`. Padrão, usado no LeveLead CRM (9 módulos).
- **`tiles`** — 2 colunas, cards maiores com ícone numerado à esquerda do texto (estilo tile de dashboard). Usado no GD Solar ERP.
- **`chips`** — carrossel horizontal com scroll-snap (`overflow-x-auto`), cards de largura fixa. Usado no Solar Shop (estilo vitrine/e-commerce).
- **`checklist`** — lista compacta de uma coluna só, com ✓ em vez de número. Usado no CRM Solar (poucos itens, evita grade "vazia").

### Hero

- **`stats`** — chips com números de credibilidade (`bg-white/10 border border-white/20`) abaixo do CTA. LeveLead CRM e GD Solar ERP.
- **`tags`** — chips de feature na cor do produto (`c.iconBg` com opacidade). Solar Shop.
- **`clean`** — sem chips extras. CRM Solar.

### Seções condicionais

`personas` (`{ persona, entrega }`) e `planos` (`{ nome, publico, inclui }`) só renderizam se existirem no produto em `data/produtos.js` — ver `CLAUDE.md` para o schema completo.
