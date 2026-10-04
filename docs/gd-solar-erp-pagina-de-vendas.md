# GD Solar ERP — Página de vendas

Documentação da página `/produtos/gd-solar-erp`: objetivo, estrutura, estratégia de conversão, dados que a alimentam e regras de texto.

- **Componente:** `resources/js/Components/Produto/GdSolarErpLanding.jsx`
- **Dados:** entrada `gd-solar-erp` em `resources/js/data/produtos.js`
- **Conteúdo de referência do produto:** `docs/produtos.md`, seção 2
- **Fonte original:** `docs/apresentacao-comercial.html` do repositório interno `casaverde`

---

## 1. Objetivo e público

A página existe para gerar **pedidos de demonstração**. Venda consultiva, B2B, sem preço público.

Quem lê é o **dono ou gestor** de uma empresa de energia solar por assinatura ou compensação: comercializadoras, cooperativas, consórcios e gestoras de usinas. Normalmente não é técnico. A empresa já roda em planilha, e-mail e WhatsApp, e sente que isso não acompanha o crescimento.

A página responde, nesta ordem, às perguntas do empresário:

1. Isso é para mim? → hero + faixa "Feito para"
2. Que problema resolve? → Antes e depois
3. Como funciona na prática? → 4 passos do mês
4. O que eu ganho? → Resultados
5. Dá para confiar? → Automação, perfis de acesso, segurança, diferenciais
6. Como começo e quanto custa? → Como começar + FAQ
7. Próximo passo → CTA final

---

## 2. Estrutura da página

| # | Seção | Fundo | Campo em `produtos.js` | Papel na venda |
|---|---|---|---|---|
| 1 | **Hero**: `<h1>` com "Sistema de gestão para Geração Distribuída (GD)" + slogan "A geração é distribuída. A gestão, centralizada.", subtítulo e CTAs centralizados; abaixo, a tela real "Gestão de energia" em moldura de navegador com o celular do cliente sobreposto | gradiente verde-escuro | `telas.hero`, `telas.heroCelular`, `segmentos` | Promessa clara e identificação do público |
| 2 | **Antes e depois**: tabela tarefa → sem sistema → com o sistema | branco | `temas`, `dores`, `resultados` (pareados por índice) | Empresário se reconhece no problema |
| 2b | **Faturas no automático**: texto + 4 destaques ("Sem baixar fatura"…) + fluxo e-mail → importação → leitura → aprovação + telas do histórico de importação e da fatura lida | gradiente verde-claro | `faturasAutomaticas`, `telas.importacao`, `telas.faturaLida` | Principal diferencial operacional: nada de upload manual |
| 3 | **Como funciona**: 4 passos do mês | cinza-claro | `comoFunciona` | Mostra o mecanismo, de forma simples |
| 4 | **Resultados**: 6 ganhos + CTA | branco | `beneficios` | Ganhos no negócio (tempo, caixa, crescimento) |
| 4b | **Veja por dentro**: abas por funcionalidade (alocação, geração, cobrança, alertas, relatórios, propostas, atendimento, sua marca, celular), cada uma com título, texto e a tela real | cinza-claro | `galeria` | Mostra o produto funcionando; reduz a dúvida "como é o sistema?" |
| 4c | **Explore a plataforma**: galeria com rolagem horizontal das 45 telas, filtros por perfil (Todas, Administrador, Consultor, Cliente, Produtor, Celular), barra de progresso, setas e tela ampliada (lightbox) com navegação por setas, teclado (← → Esc) e deslize no celular + CTA | branco | `data/gdSolarErpTelas.js` (`telas`, `AREAS`) — componente `GaleriaTelas` | Prova de que o sistema é completo, para quem quer ver tudo |
| 5 | **Automático**: situação → reação do sistema + alertas | escuro | `automacoes`, `alertas` | Valor percebido: o sistema trabalha sozinho |
| 6 | **Um acesso para cada pessoa**: abas por perfil | cinza-claro | `portais` | A empresa inteira usa, cada um vê o seu |
| 7 | **Tudo incluso**: grade de funcionalidades | branco | `modulos` (com `nota` opcional → rodapé com `*`) | Inventário para quem quer detalhe |
| 8 | **Por que o GD Solar ERP + Segurança** | cinza-claro | `paraQuem`, `diferenciais`, `seguranca` | Confiança e redução de risco |
| 9 | **Como começar**: 3 passos + CTAs | branco | `contratacao` | Deixa o próximo passo concreto e fácil |
| 10 | **Perguntas frequentes** + link de WhatsApp | cinza-claro | `faq` | Responde às objeções ("Quanto custa?" vem primeiro) |
| 11 | **CTA final** com garantias | gradiente verde | — | Fechamento |
| 12 | Conheça também | branco | — (`OutrosProdutos`) | Venda cruzada |

Os fundos alternam (branco / cinza-claro / escuro) para separar as seções visualmente. Ao adicionar ou remover uma seção, mantenha essa alternância.

---

## 3. Estratégia de conversão

- **CTA principal único:** "Agendar uma demonstração", sempre em laranja (`brand-500`), que é a cor de ação do site. O verde é a cor do produto e não é usado em botões de ação. O secundário é "Falar agora no WhatsApp".
- **CTA em 5 pontos:** hero, fim dos Resultados, Como começar, FAQ (link de WhatsApp) e CTA final.
- **Barra fixa no celular** (`CtaFixoMobile`): aparece depois de 700 px de rolagem, só abaixo do breakpoint `md`.
- **Formulário pré-preenchido:** os CTAs levam a `/contato?produto=gd-solar-erp`, e `Pages/Contato.jsx` já seleciona o produto.
- **Redutores de risco:** "Demonstração gratuita · Sem compromisso · Resposta em até 1 dia útil" no hero e no CTA final.
- **Prova visual:** 18 telas reais da plataforma (dados fictícios de demonstração) no hero, na seção de faturas, na galeria "Veja por dentro" e em cada aba de perfil. Componentes `BrowserFrame` (moldura de navegador) e `PhoneFrame` (celular).

### Telas da plataforma

- **Origem:** pasta `docs/prints/` do repositório do produto (o README de lá descreve cada tela), capturada em outubro de 2026 com dados fictícios de demonstração, que podem ser publicados. Para novas telas, copie o PNG de lá, gere as versões `.webp` e não versione os originais.
- **Publicadas em:** `public/images/produtos/gd-solar-erp/telas/*.webp` (45 telas) e miniaturas em `public/images/produtos/gd-solar-erp/miniaturas/` (720 px no desktop, 300 px no celular), usadas no trilho da galeria. Desktop recortado no topo (≈780 px de altura útil) e reduzido para 1600 px de largura; celular para 600 px. Total ≈3,4 MB somando versão grande e miniatura; as grandes só carregam ao ampliar.
- **Critérios de seleção:** nas seções da página, uma tela por funcionalidade que o empresário valoriza. A galeria "Explore a plataforma" mostra todas as telas publicáveis. Para adicionar uma tela: gerar o `.webp` grande e a miniatura em `miniaturas/` e incluir uma linha `tela(arquivo, título, área)` em `data/gdSolarErpTelas.js`.
- **Não publicar telas com:** "Casa Verde" (nome interno) ou o nome do provedor de pagamento. Hoje isso exclui o painel admin, o relatório executivo, o relatório de economia, os modelos de WhatsApp, a gestão financeira e as telas de pagamento. No cockpit, o trecho "da Casa Verde" do subtítulo foi apagado; na tela de pagamento do celular, o recorte para antes do código Pix.
- **Fatura em revisão:** recortada antes do campo "Origem: manual", que contradiz a mensagem de entrada automática.
- **Preço:** a pergunta "Quanto custa?" é respondida de forma consultiva (depende do tamanho da operação; proposta após a demonstração). Não publicar valores sem aprovação.

---

## 4. Regras de texto

**Tom:** falar com o empresário, não com o técnico. Resultado concreto (tempo poupado, erro evitado, dinheiro recebido) em frases curtas e voz ativa.

| Use | Evite |
|---|---|
| conta de luz, cobrança, pagamento, usina, cliente | IMAP, webhook, API, servidor, kWh alocado, "anti-oversell" |
| "o sistema lê sozinho", "baixa automática" | jargão de software, siglas internas |
| ganhos qualitativos (menos erro, caixa mais rápido) | percentual fixo de economia ou de ganho de produtividade |
| "feito para energia por assinatura" | "revolucionário", "único no mercado", "o melhor" |

**Promessas — limites atuais do produto** (detalhes em `docs/produtos.md` → "O que prometer"):

- **Entrada automática de faturas:** destacar que as faturas entram e são lidas sozinhas, todo mês, pela integração com o e-mail, sem baixar, subir ou digitar. **Não citar concessionárias pelo nome e não dizer "todas as concessionárias"**: hoje o leitor automático do produto é específico da Copel (`CopelBillParserService` no casaverde). A FAQ diz que as concessionárias da operação são confirmadas na demonstração. Decisão do responsável pelo produto em 04/10/2026.
- **Pagamentos:** boleto e Pix "integrados a bancos e plataformas de pagamento", com baixa automática. **Não citar provedor** (hoje o Mercado Pago, mas a arquitetura aceita outros), não dizer "qualquer banco" e não mencionar cartão de crédito.
- **WhatsApp:** mensagens prontas que o consultor envia com um clique. Nunca "disparo automático" ou "chatbot".
- **Aplicativo:** funciona no navegador do celular. Não há app nas lojas.
- **Portal do produtor:** painel e visão das usinas. Não prometer extrato de repasses.

**Nomes:** usar sempre "GD Solar ERP". Nunca "Casa Verde" ou `casaverde` (nome interno). Não citar a landing B2C de outra marca que existe no repositório do produto.

---

## 5. Nicho e SEO

**Nicho:** Geração Distribuída (GD) de energia solar. Termos-chave: *Geração Distribuída*, *GD*, *gestão de GD*, *geração compartilhada*, *usinas de GD*, *cooperativa/consórcio de GD*, *energia por assinatura*, *créditos de energia*, *Lei 14.300*.

Onde eles aparecem:

| Lugar | Conteúdo |
|---|---|
| `<title>` | "GD Solar ERP — Sistema de gestão para Geração Distribuída (GD) — Rexar" |
| `<meta description>` | `tagline` do produto |
| `<h1>` | "GD Solar ERP · Sistema de gestão para Geração Distribuída (GD)" + slogan, no mesmo elemento |
| Títulos de seção | "…sua operação de GD", "Toda a cadeia da GD…", "Gestão completa de Geração Distribuída", "Feito para Geração Distribuída" |
| FAQ | "O que é Geração Distribuída (GD) e para quem é o sistema?" e "Qual a diferença para um ERP ou CRM comum?" |
| Faixa "Feito para" | `segmentos` (cooperativas de GD, consórcios de geração compartilhada…) |

**SEO no servidor:** o site não tem SSR. Por isso, título, descrição, link canônico, Open Graph e dados estruturados (`SoftwareApplication`, em JSON-LD) vêm de `config/seo.php` e são renderizados em `resources/views/app.blade.php`. O `PageController::produto` passa os dados via `withViewData`. Quando a página monta, o Inertia substitui o título e a descrição (a `<meta description>` do servidor tem `data-inertia="description"` para não duplicar). **Ao mudar título ou `tagline` do GD Solar ERP, atualize também `config/seo.php`.**

## 6. Dados em `produtos.js`

Campos usados apenas por esta página (os demais seguem o schema comum descrito no `CLAUDE.md`):

| Campo | Formato | Observação |
|---|---|---|
| `temas` | `string[]` | Mesmo tamanho de `dores`/`resultados`; rótulo de cada linha do Antes e depois |
| `beneficios` | `{ titulo, descricao }[]` | Aqui são **ganhos do empresário**, não funcionalidades. Os ícones seguem a ordem (`GANHO_ICONS`, 6 itens) |
| `modulos` | `{ titulo, descricao, nota? }[]` | Funcionalidades em linguagem simples; `nota` vira rodapé com `*` |
| `automacoes` | `{ gatilho, resposta }[]` | Situação de negócio → o que o sistema faz (sem horários técnicos) |
| `alertas` | `string[]` | Situações em que a equipe é avisada |
| `portais` | `{ perfil, quem, itens[], ganho }[]` | Uma aba por perfil |
| `telas` | `{ hero, heroCelular, importacao, faturaLida }` — cada um `{ src, alt }` | Telas fixas do hero e da seção de faturas |
| `galeria` | `{ aba, titulo, descricao, imagem, alt }[]`; a aba de celular usa `celulares: { src, alt }[]` | Seção "Veja por dentro" |
| `portais[].imagem` / `portais[].celular` | `{ src, alt }` | Tela de cada perfil (o celular aparece sobreposto) |
| `seguranca` | `string[]` | Pontos de confiança em linguagem simples |
| `segmentos` | `string[]` | Faixa "Feito para" no hero |
| `faturasAutomaticas` | `{ etapas: { titulo, descricao }[], destaques: string[] }` | Seção "Faturas no automático"; os ícones das etapas seguem a ordem (`FATURA_ICONS`, 4 itens) |
| `contratacao` | `{ titulo, descricao }[]` | Passos de "Como começar" |

Ao adicionar um 7º ganho em `beneficios`, inclua também um ícone em `GANHO_ICONS`.

---

## 7. Como manter

**Mudou o produto no repositório `casaverde`:**

1. Releia `docs/apresentacao-comercial.html`, principalmente a seção "O que prometer".
2. Atualize `docs/produtos.md` (seção 2) com o conteúdo técnico completo.
3. Atualize `produtos.js` com a versão para o empresário, seguindo as regras da seção 4.
4. Se a leitura automática passar a cobrir outras concessionárias, revise a regra da seção 4 e a FAQ ("Preciso subir as faturas…"). O campo `nota` de `modulos` continua disponível para ressalvas.

**Conferência visual:** `npm run build` + `php artisan serve` e revisar `/produtos/gd-solar-erp` no desktop e no celular (largura de 390 px).

---

## 8. Pendências e próximos passos

| Item | Situação |
|---|---|
| Número de WhatsApp | Provisório (`5500000000000`), igual ao resto do site |
| "Deixamos tudo pronto" (Como começar, passo 2) | Confirmar se a Rexar faz a configuração inicial para o cliente |
| Prova social / case | O produto já opera numa empresa real de energia por assinatura. Falta autorização para divulgar (mesmo sem nome) e criar a seção de prova |
| Telas com nome interno | Para publicar o painel admin, o relatório de economia e os modelos de WhatsApp, é preciso regerar os prints sem "Casa Verde" nos textos |
| Meios de pagamento | Se houver cartão ou bancos específicos que possam ser citados, atualizar textos e FAQ |
| **Envio do formulário de contato** | **Crítico:** `Pages/Contato.jsx` envia para `POST /api/contato`, mas essa rota não existe (não há `routes/api.php`). Todos os CTAs de demonstração chegam a um formulário que não entrega o contato |
