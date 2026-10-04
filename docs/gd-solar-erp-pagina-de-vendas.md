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
| 1 | **Hero**: título "A energia é solar. A gestão, automática.", subtítulo, CTAs, cartão de cobrança ilustrativo | gradiente verde-escuro | `exemploCobranca`, `segmentos` | Promessa clara e identificação do público |
| 2 | **Antes e depois**: tabela tarefa → sem sistema → com o sistema | branco | `temas`, `dores`, `resultados` (pareados por índice) | Empresário se reconhece no problema |
| 3 | **Como funciona**: 4 passos do mês | cinza-claro | `comoFunciona` | Mostra o mecanismo, de forma simples |
| 4 | **Resultados**: 6 ganhos + CTA | branco | `beneficios` | Ganhos no negócio (tempo, caixa, crescimento) |
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
- **Prova visual:** o cartão do hero mostra a conta de luz virando cobrança paga (R$ 480 − 15% = R$ 408). Os valores são calculados a partir de `exemploCobranca` e ficam marcados como **ilustrativos**.
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

- **Leitura automática de faturas:** só **Copel**. As demais concessionárias entram por envio do PDF. O aviso aparece como nota `*` em "Tudo incluso" e na FAQ.
- **Pagamentos:** boleto e Pix "integrados a bancos e plataformas de pagamento", com baixa automática. **Não citar provedor** (hoje o Mercado Pago, mas a arquitetura aceita outros), não dizer "qualquer banco" e não mencionar cartão de crédito.
- **WhatsApp:** mensagens prontas que o consultor envia com um clique. Nunca "disparo automático" ou "chatbot".
- **Aplicativo:** funciona no navegador do celular. Não há app nas lojas.
- **Portal do produtor:** painel e visão das usinas. Não prometer extrato de repasses.

**Nomes:** usar sempre "GD Solar ERP". Nunca "Casa Verde" ou `casaverde` (nome interno). Não citar a landing B2C de outra marca que existe no repositório do produto.

---

## 5. Dados em `produtos.js`

Campos usados apenas por esta página (os demais seguem o schema comum descrito no `CLAUDE.md`):

| Campo | Formato | Observação |
|---|---|---|
| `temas` | `string[]` | Mesmo tamanho de `dores`/`resultados`; rótulo de cada linha do Antes e depois |
| `beneficios` | `{ titulo, descricao }[]` | Aqui são **ganhos do empresário**, não funcionalidades. Os ícones seguem a ordem (`GANHO_ICONS`, 6 itens) |
| `modulos` | `{ titulo, descricao, nota? }[]` | Funcionalidades em linguagem simples; `nota` vira rodapé com `*` |
| `automacoes` | `{ gatilho, resposta }[]` | Situação de negócio → o que o sistema faz (sem horários técnicos) |
| `alertas` | `string[]` | Situações em que a equipe é avisada |
| `portais` | `{ perfil, quem, itens[], ganho }[]` | Uma aba por perfil |
| `exemploCobranca` | `{ competencia, energiaCompensada, descontoPercentual }` | Números do cartão do hero |
| `seguranca` | `string[]` | Pontos de confiança em linguagem simples |
| `segmentos` | `string[]` | Faixa "Feito para" no hero |
| `contratacao` | `{ titulo, descricao }[]` | Passos de "Como começar" |

Ao adicionar um 7º ganho em `beneficios`, inclua também um ícone em `GANHO_ICONS`.

---

## 6. Como manter

**Mudou o produto no repositório `casaverde`:**

1. Releia `docs/apresentacao-comercial.html`, principalmente a seção "O que prometer".
2. Atualize `docs/produtos.md` (seção 2) com o conteúdo técnico completo.
3. Atualize `produtos.js` com a versão para o empresário, seguindo as regras da seção 4.
4. Se uma limitação deixar de existir (ex.: leitura de outras concessionárias), remova a `nota` correspondente e a ressalva na FAQ.

**Conferência visual:** `npm run build` + `php artisan serve` e revisar `/produtos/gd-solar-erp` no desktop e no celular (largura de 390 px).

---

## 7. Pendências e próximos passos

| Item | Situação |
|---|---|
| Número de WhatsApp | Provisório (`5500000000000`), igual ao resto do site |
| "Deixamos tudo pronto" (Como começar, passo 2) | Confirmar se a Rexar faz a configuração inicial para o cliente |
| Prova social / case | O produto já opera numa empresa real de energia por assinatura. Falta autorização para divulgar (mesmo sem nome) e criar a seção de prova |
| Screenshots reais | Imagens do painel e do portal do cliente deixariam a página mais concreta; hoje só existe o cartão ilustrativo do hero |
| Meios de pagamento | Se houver cartão ou bancos específicos que possam ser citados, atualizar textos e FAQ |
| **Envio do formulário de contato** | **Crítico:** `Pages/Contato.jsx` envia para `POST /api/contato`, mas essa rota não existe (não há `routes/api.php`). Todos os CTAs de demonstração chegam a um formulário que não entrega o contato |
