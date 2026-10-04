# Produtos — Conteúdo e Descrições

Documentação de referência do conteúdo de cada produto da Rexar.
A fonte de dados do site está em `resources/js/data/produtos.js`.

> **Nomes internos dos repositórios (não usar publicamente):**
> levelead-crm → LeveLead CRM
> casaverde → GD Solar ERP
> solmar-loja → Solar Shop
> vendedorsolar → CRM Solar

---

## 1. LeveLead CRM

**Slug:** `levelead-crm`
**Categoria:** CRM · Prospecção e Vendas
**Tagline:** Do lead à homologação: o único CRM feito para quem vende energia solar.

> **Nota:** Usar apenas "LeveLead CRM" em todo contexto público — copy, meta tags, e-mails, landing page.

**Resumo executivo:**
LeveLead CRM é um CRM verticalizado para empresas de energia solar fotovoltaica — não é um CRM genérico adaptado, foi desenhado do zero para o fluxo real do setor:

```
Captação do Lead → Qualificação/Atendimento → Orçamento (kit solar) → Pedido/Venda
→ Faturamento → Instalação → Homologação junto à concessionária → Financiamento → Pós-venda (SAC)
```

Diferencial central: CRMs genéricos (RD Station, Pipedrive, HubSpot) não têm homologação de concessionária, kits solares, cálculo de potência/inversor, nem financiamento — o LeveLead CRM tem, nativamente.

**Para quem é:**
Integradoras solares, distribuidoras de kits fotovoltaicos e franquias de venda de energia solar.

---

### Dores do mercado que o produto resolve

| Perfil | Dor atual | Como o LeveLead CRM resolve |
|---|---|---|
| Integradoras pequenas/médias | Leads perdidos entre WhatsApp, planilha e e-mail | Funil único: lead entra, nunca se perde, histórico completo |
| Empresas com múltiplos consultores | Falta de visibilidade de quem está atendendo o quê | Kanban por status, hierarquia de usuários, metas por consultor |
| Empresas com franquias/filiais | Gestão descentralizada, dados espalhados | Módulo de Franquias + Setores nativo, multi-filial desde o banco |
| Empresas que vendem financiado | Processo de crédito manual, fora do sistema | Módulo de Financiamento com Kanban dedicado e dados de análise |
| Dependentes de aprovação da concessionária | Homologação "no braço", e-mail/planilha | Módulo de Homologação com etapas rastreáveis |
| Equipes de instalação | Sem visibilidade do que instalar e quando | Perfil "Integrador" dedicado com pedidos e instalações próprias |
| Gestores que querem números em tempo real | Relatórios manuais, decisão "no feeling" | Dashboards de vendas, financeiro e indicadores prontos |
| Empresas que usam WhatsApp para vender | Atendimento fragmentado fora do CRM | Chat WhatsApp integrado (Whaticket) dentro do CRM |
| Empresas com discagem ativa (SDR) | Ligação fora do sistema, sem registro | Discador VoIP integrado (Asterisk/PAMI) — liga direto do CRM |

---

### Módulos do sistema

#### 1.1 Gestão de Leads (funil comercial)
- Cadastro de leads PF/PJ
- Kanban de funil com etapas reais do setor: Início do Funil → Conexão Proativa → Contato Direto → Cotação Enviada → Oportunidade → Super Oportunidade → Ativo → Finalizado/Inativo
- Distribuição e encaminhamento entre consultores, com histórico
- Função dedicada de **SDR** (pré-atendimento/qualificação) com fila própria
- Histórico completo de atendimentos e tentativas de contato por lead
- Importação em massa via planilha (CSV/Excel), com histórico de importações
- Solicitação/edição controlada de dados de lead (auditoria de alterações)
- Relatórios de conversão por consultor, por setor, por período

#### 1.2 Orçamentos & Catálogo Solar
- Motor de orçamento que gera proposta vinculada a lead + kit + tensão
- Catálogo de **kits solares** com cálculo técnico: potência do kit, potência do inversor, potência do módulo, tipo de estrutura, sistema híbrido, fase (mono/trifásico)
- Categorias, marcas, unidades e fornecedores de produtos
- Controle de estoque com histórico de movimentações
- **Integração com Edeltec Solar API** — sincronização automática de preços e disponibilidade

#### 1.3 Pedidos (ordem de venda)
- Emissão de pedido com múltiplos produtos/kits
- Esteira de status: Lançado → Aguardando Pagamento → Aguardando Nota → Conferência → Conferido → Aguardando Faturamento → Faturado → Aguardando Rastreio → Acompanhamento → Entregue
- Estados de exceção automáticos: Vencido (auto-calculado), Cancelado, Reprovado, Encomenda
- Múltiplos modelos de formulário de pedido
- Controle de fretes e transportadoras
- Chamados/tickets vinculados a pedidos (pós-venda)
- Exportação em **Excel e PDF**

#### 1.4 Homologação (diferencial competitivo)
- Acompanhamento do processo junto à concessionária, etapa por etapa: documentação → conferência → vistoria → projeto enviado → projeto aprovado/reprovado → conclusão
- Cadastro de usinas fotovoltaicas com **coordenadas geográficas** (lat/lng)
- Anexos de documentos por cliente e por usina
- Cadastro de concessionárias
- Histórico completo — nada se perde entre a venda e a conexão à rede

#### 1.5 Financiamento
- Pipeline dedicado (Kanban) para propostas de financiamento
- Dados de cliente, sócios (PJ) e endereço para análise de crédito
- Anotações e histórico de status por proposta
- Papel de "Supervisor de Financiamento" na hierarquia de permissões

#### 1.6 Financeiro
- Fluxo de caixa com entradas e saídas
- Notas fiscais com múltiplos pagamentos/parcelas (baixa parcial)
- Cadastro de bancos, empresas do grupo, fornecedores
- Controle de salários
- Metas de vendas por consultor e empresa, com acompanhamento de "vendas faturadas vs meta"

#### 1.7 Dashboards & Indicadores
- Indicadores de vendas, financeiros e **econômicos** (visão macro do negócio)
- Indicadores de leads (funil, conversão, produtividade)
- Dashboards segmentados por perfil (Admin vê mais que Consultor)
- Gráficos interativos (Chart.js / react-chartjs-2)

#### 1.8 Comunicação integrada
- **Chat interno em tempo real** (WebSocket via Laravel Reverb, com fallback Pusher)
- **WhatsApp integrado** (via Whaticket) — atendimento ao cliente sem sair do CRM
- **Discador VoIP** integrado a central Asterisk (AMI/PAMI) — liga com um clique
- **E-mail** — leitura via IMAP integrada ao painel
- Notificações internas em tempo real (leads, pedidos, SAC)

#### 1.9 Ferramentas de produtividade
- Agenda/calendário de compromissos
- Gestão de tarefas com fluxo de aprovação (aberto → atendimento → aprovação → finalizado)
- Biblioteca de documentos/materiais compartilhados
- SAC (atendimento pós-venda) com anexos e mensagens

#### 1.10 Treinamento (LMS embutido)
- Módulo de **Cursos** internos: módulos, aulas, avaliações com questões e correção
- Onboarding de novos consultores/integradores dentro da própria plataforma

#### 1.11 Multi-empresa / Multi-filial
- Estrutura nativa de **Franquias** e **Setores** — pensado para redes, não para uma loja só
- Hierarquia de usuários e funções configurável

#### 1.12 Segurança e Governança
- **92 permissões nomeadas**, organizadas em 13 categorias (Pedidos, Leads, Financeiro, Funil de Vendas, Financiamento, Produtos, Metas, Dashboards, Ferramentas, Comunicação, Usuários, Configurações)
- 4 perfis de acesso: Admin (total), Consultor (vendas), Integrador (instalação), Geral (homologação/financiamento/SAC)
- Cada ação é auditável — histórico de status, importação, edição de leads, login/online
- Cache de permissões otimizado (1 query por request)

---

### Personas / Jornada de valor por perfil

| Persona | O que o sistema entrega |
|---|---|
| **Dono/Gestor** | Visão 360° — vendas, financeiro, funil, metas — em dashboards, sem pedir relatório para ninguém |
| **Vendedor/Consultor** | Sabe quais leads são seus, histórico de cada um, monta orçamento com kit certo em minutos, acompanha comissão |
| **SDR** | Fila de pré-atendimento própria, não perde lead frio que precisa de qualificação |
| **Time de Homologação** | Processo junto à concessionária com etapas com dono e prazo — fora do e-mail solto |
| **Integrador (instalação)** | Acesso próprio e enxuto, só com o necessário para executar a instalação |
| **Financeiro** | Fluxo de caixa, faturamento e comissões num só lugar, sem planilha paralela |

---

### Diferenciais técnicos

- **Tempo real de verdade**: chat e notificações via WebSocket (Laravel Reverb), não polling
- **Interface moderna**: React 18 + MUI v6 — visual comparável a SaaS internacionais
- **Arquitetura multi-perfil desde a raiz**: cada tipo de usuário vê só o que precisa
- **Performance para escalar**: índices de banco otimizados para as consultas mais usadas
- **Integrações prontas**: Edeltec Solar (catálogo/preços), Whaticket (WhatsApp), Asterisk (VoIP)
- **Exportação sem lock-in**: Excel e PDF nativos — o cliente nunca fica preso sem tirar dados

---

### Mensagens-chave / Argumentos de conversão

1. "LeveLead CRM: o único CRM feito para energia solar, do lead à homologação." — especialização vertical vs. genéricos
2. "Pare de perder venda porque o lead esfriou numa planilha." — dor emocional imediata
3. "Do orçamento do kit solar à conexão na concessionária — tudo em um só sistema." — ciclo completo
4. "WhatsApp, ligação e chat interno sem sair do CRM." — produtividade / menos ferramentas separadas
5. "Cada consultor vê só o que precisa. Cada gestor vê tudo o que importa." — governança/segurança
6. "Pronto para franquia: múltiplas filiais, um só painel." — escala
7. "Homologação sem perder prazo com a concessionária." — dor específica e cara do setor
8. "Treine sua equipe dentro do próprio sistema." — LMS como diferencial

---

### FAQ (objeções prováveis)

**"Já uso planilha, por que mudar?"**
Planilha não avisa quando um lead esfria, não distribui leads automaticamente e não conecta WhatsApp, VoIP e homologação num só lugar. A troca elimina trabalho manual e evita perda de venda.

**"Meu time não é técnico."**
A interface foi projetada para vendedores, não para desenvolvedores. Onboarding guiado está embutido no módulo de Cursos — cada função aprende dentro do próprio sistema.

**"Preciso de VoIP e WhatsApp à parte?"**
Não. Discador VoIP (Asterisk) e WhatsApp (Whaticket) já estão integrados ao CRM — sem assinar serviço extra ou fazer configuração técnica.

**"Funciona para franquia com várias filiais?"**
Sim. A estrutura de Franquias e Setores foi desenhada nativamente para redes — cada filial tem seu espaço, o gestor da rede enxerga tudo consolidado.

**"Dá para migrar meus dados atuais?"**
Sim. Há importação em massa via CSV/Excel para leads e produtos, com histórico de importações para rastreabilidade.

---

### Estrutura sugerida para landing page dedicada

1. **Hero** — dor + promessa: "O CRM completo para quem vende energia solar" + CTA (Agendar demonstração / Começar agora)
2. **Prova de especialização** — fluxo Lead → Orçamento → Pedido → Instalação → Homologação, mostrando que é feito sob medida
3. **Bloco de dores → soluções** — 3-4 dores reais do setor, cada uma resolvida por um módulo
4. **Funcionalidades em grade/tabs** — Leads, Pedidos, Homologação, Financiamento, Financeiro, Dashboards, Comunicação, Cursos
5. **Para quem é** — cards por persona (Dono, Vendedor, SDR, Homologação, Integrador, Financeiro)
6. **Diferenciais técnicos/confiança** — tempo real, segurança/permissões, multi-filial, integrações prontas
7. **Planos/assinatura** — a definir (sugestão: por nº de usuários/filiais, com trial)
8. **Depoimentos/casos** — placeholder até haver clientes reais
9. **FAQ** — objeções listadas acima
10. **CTA final** — reforço de urgência + botão de conversão

---

### Observações importantes

- O sistema está em produção/uso real (migrações datadas de 2026), o que é argumento de maturidade: **não é MVP, é sistema rodando em empresas reais.**
- Pricing/planos de assinatura ainda não foram definidos — precisam ser configurados antes da seção de pricing da landing page.

---

## 2. GD Solar ERP

**Slug:** `gd-solar-erp`
**Categoria:** ERP · Energia Solar por Assinatura
**Tagline:** A energia é solar. A gestão, automática. O sistema que organiza sua empresa de energia por assinatura, da venda ao recebimento.

> **Nota:** O nome interno do repositório é `casaverde`. Usar apenas "GD Solar ERP" em todo contexto público.

> **Atenção:** O repositório contém um briefing de landing page B2C de outra marca (venda de assinatura de energia para consumidor final). Esse material é de um site diferente e **não deve ser citado nem referenciado** no site da Rexar. O GD Solar ERP é o **software** que gerencia esse tipo de negócio — vendido para outras empresas (B2B), não para o consumidor final.

> **Fonte:** `docs/apresentacao-comercial.html` do repositório `casaverde` (outubro/2026), preparado a partir do sistema em funcionamento. Ela substitui o antigo `GD_SOLAR_ERP_RELATORIO_VENDAS.md` onde houver conflito — em especial, os meios de pagamento.

> **Pagamentos:** a plataforma tem arquitetura de pagamento plugável e suporta diversos meios de pagamento integrados (hoje em operação com Mercado Pago). **No site, não citar provedor específico** — falar em boleto e Pix integrados a bancos e plataformas de pagamento, com emissão e baixa automáticas.

> **Página de vendas:** estrutura, estratégia de conversão, campos de dados e regras de texto em `docs/gd-solar-erp-pagina-de-vendas.md`.

### Público e tom

A página fala com o **dono/gestor** da empresa de energia por assinatura (comercializadoras, cooperativas, consórcios, gestoras de usinas). Falar de resultado concreto — tempo poupado, erro evitado, dinheiro recebido — e evitar jargão de software (API, webhook, servidor, IMAP) e superlativos vazios ("revolucionário", "único no mercado"). Não prometer economia em percentual fixo.

### Resumo

O GD Solar ERP reúne CRM, gestão de usinas, leitura de faturas, cobrança e pagamento em um só sistema. Cobre o caminho inteiro, do primeiro contato com o cliente até o Pix confirmado, conectando quem gera energia (produtores donos de usinas), quem consome (clientes) e quem vende (consultores).

### O problema

Todo mês chega uma fatura da concessionária para cada unidade consumidora. Cada fatura precisa ser lida e conferida antes de virar cobrança, e cada cobrança precisa ser paga e baixada. Em planilhas, e-mails e WhatsApp, a operação não cresce sem contratar mais gente e sem errar mais.

| Sem o GD Solar ERP | Com o GD Solar ERP |
|---|---|
| Faturas baixadas uma a uma da caixa de e-mail | Faturas importadas e lidas automaticamente |
| Valores digitados à mão em planilhas | Cobrança calculada a partir da fatura aprovada, com o desconto do contrato |
| Boletos emitidos fora do sistema e conferidos no extrato | Boleto e Pix em um clique, com baixa automática |
| Cliente sem saber quanto economizou | Portal do cliente com faturas, cobranças e relatório de economia |
| Ninguém percebe quando uma usina está sem saldo | Alertas avisam a equipe antes que o problema chegue ao cliente |

### Ciclo completo (8 etapas)

1. **Prospecção** — consultores cadastram clientes e produtores; cada um com a própria carteira.
2. **Proposta comercial** — a partir de consumo médio, conta média, UC, concessionária, desconto e prazo; PDF numerado (PC + número) pronto para WhatsApp.
3. **Contrato e ativação** — contrato registrado; cliente recebe convite por e-mail para o portal.
4. **Vínculo com a usina** — UC ligada a uma ou mais usinas, com energia alocada (kWh), % de desconto e % de consumo.
5. **Fatura da concessionária** — importada do e-mail (inclusive PDF com senha), leitura de consumo, injeção, valores e vencimento; revisão antes de seguir.
6. **Cobrança** — gerada da fatura aprovada com o desconto do contrato; ajustes, vencimento e histórico.
7. **Pagamento** — boleto ou Pix pelo meio de pagamento integrado; baixa automática; boleto vencido expira e pode ser reemitido.
8. **Acompanhamento** — lembretes, alertas, painéis por perfil, relatórios e economia mês a mês.

Exemplo ilustrativo (valores fictícios): energia compensada R$ 480,00 − desconto 15% (R$ 72,00) = cobrança R$ 408,00.

### Portais por perfil

- **Administração:** cockpit executivo; usinas, blocos e saldo em kWh; revisão de faturas; cobranças, pagamentos e conciliação; relatórios; usuários, concessionárias, contas de e-mail; identidade visual.
- **Consultor:** carteira própria; clientes, UCs, contatos e contratos; propostas em PDF; leads de produtores, usinas e blocos; faturas e cobranças dos seus clientes; alertas com mensagem de WhatsApp pronta.
- **Cliente:** faturas, cobranças e consumo; pagamento no portal (Pix copia e cola, linha digitável, boleto PDF); relatório de economia (Excel/PDF); contratos, usina vinculada e histórico de descontos; e-mail de cobrança e lembrete.
- **Produtor:** painel próprio; lista e detalhe das usinas vinculadas.

### Módulos

CRM comercial · Propostas · Contratos · Usinas e energia · Unidades consumidoras (sem duplicidade por concessionária) · Leitura de faturas · Cobranças · Pagamentos · Portal do cliente · WhatsApp (10 modelos editáveis, envio em 1 clique) · Alertas operacionais · Relatórios (executivo, financeiro, clientes, cobranças, faturas, pagamentos, usinas) · E-mails da operação (com webmail) · Suporte (chamados) · Marca própria (logo, favicon, logo do boleto).

### Automação

| Quando | O que acontece |
|---|---|
| a cada 5 min | Confere pagamentos em aberto no meio de pagamento integrado e baixa os pagos |
| a cada 10 min | Marca como vencidas as cobranças que passaram da data |
| a cada hora | Busca faturas novas no e-mail e lê os PDFs |
| a cada hora | Gera cobranças das faturas aprovadas |
| a cada hora | Verifica a saúde da operação e abre alertas |
| 06:00 | Expira boletos vencidos que o banco não aceita mais |
| 08:00 | Lembrete ao cliente 3 dias antes do vencimento; aviso ao consultor, a cada 5 dias, sobre atrasos |

**Alertas:** usina com saldo baixo · usina sem energia · energia alocada acima da disponível · consumo acima do alocado · usina sem registro de geração · cliente ativo sem fatura no mês · fatura aguardando revisão · cobranças vencidas · boleto vencido sem reemissão · falha em rotina automática.

No site, a automação é apresentada em linguagem de negócio ("O cliente pagou → a cobrança aparece como paga em poucos minutos"), sem a tabela de horários.

### Segurança

Quatro perfis com permissões próprias; consultor só vê a própria carteira e cliente só os próprios dados; senhas fortes e limite de tentativas; senhas de e-mail e chaves de pagamento criptografadas; notificações de pagamento com assinatura verificada; proteção contra boleto duplicado; links de documentos com validade; mais de 500 testes automatizados a cada atualização.

### O que prometer (e o que evitar)

| Tema | Pode dizer | Evite dizer |
|---|---|---|
| Leitura de faturas | Importação automática por e-mail e leitura de faturas da **Copel**; outras concessionárias por envio manual | "Lê faturas de qualquer concessionária" |
| Pagamentos | Boleto e Pix integrados a bancos e plataformas de pagamento, com emissão em um clique e baixa automática (sem citar provedor) | "Integra com qualquer banco", "cartão de crédito" |
| Emissão de boleto | Em um clique, a partir da cobrança | "Boletos emitidos sozinhos, sem ninguém" |
| WhatsApp | Mensagens prontas que o consultor envia com um clique | "Disparo automático de WhatsApp", "chatbot" |
| E-mails ao cliente | Convite de acesso, aviso de cobrança e lembrete antes do vencimento | "Régua de cobrança completa por e-mail e SMS" |
| Portal do produtor | Painel e visão das usinas do produtor | "Extrato de repasses do produtor" (em evolução) |
| Aplicativo | Funciona no navegador do computador e do celular | "Aplicativo nas lojas Apple e Google" |

### Mensagens-chave

- Da fatura ao Pix, sem planilha no meio.
- Sua operação de energia compartilhada cresce sem crescer a planilha. *(donos e gestores)*
- Fatura lida, cobrança calculada, Pix conferido. Todo mês, sem digitação. *(financeiro)*
- Sua carteira, suas propostas e seus clientes em uma tela só. *(comercial)*
- Seu cliente paga pelo celular e vê quanto economizou. *(cliente final)*
- Saiba qual usina está ficando sem energia antes do cliente reclamar. *(controle)*

CTA principal: **Agendar uma demonstração** (venda consultiva, sem preço público).

---

## 3. Solar Shop

**Slug:** `solar-shop`
**Categoria:** E-commerce · Equipamentos Solares
**Tagline:** A única plataforma de e-commerce feita para o setor solar — não uma loja genérica adaptada.

> **Nota:** O nome interno do repositório é `solmar-loja`. Usar apenas "Solar Shop" em todo contexto público.

**Resumo executivo:**
Solar Shop é uma plataforma de e-commerce completa e pronta para uso, especializada no setor fotovoltaico. Em vez de gastar 6–12 meses adaptando Shopify/VTEX/Nuvemshop genéricos, o cliente assina o Solar Shop e tem tudo pronto: loja B2C, portal B2B, programa de consultores/parceiros e motor de propostas comerciais — integrado, testado e em produção.

**Para quem é:**
Distribuidoras de equipamentos solares, integradoras, revendedores de equipamentos fotovoltaicos e EPCs que também revendem material.

---

### Dores do mercado que o produto resolve

| Perfil | Dor | Como o Solar Shop resolve |
|---|---|---|
| **Distribuidor de equipamentos** | Vende só por WhatsApp/telefone, perde vendas fora do horário comercial | Loja 24/7 com carrinho, checkout completo, estoque sincronizado |
| **Integrador/instalador solar** | Orçamentos manuais em planilha, cálculo manual de kWp | Simulador solar automático + Kit Builder + proposta em PDF em minutos |
| **Empresa com rede de revenda** | Sem preços diferenciados por tipo de parceiro | Tabelas de preço automáticas por perfil (Público/Consultor/Integrador/Distribuidor) |
| **Negócio com vendedores externos** | Comissionamento manual, sem visibilidade de metas | Painel do Consultor com KPIs, metas, comissão estimada e funil de propostas |
| **Empresa que compra de distribuidor (ex. Edeltec)** | Recadastro manual toda vez que o catálogo muda | Sincronização automática de catálogo (diária + de hora em hora) via API |
| **Varejistas preocupados com LGPD** | Medo de vazamento de dados, multas | 2FA obrigatório para admins, auditoria completa, criptografia, rate limiting |
| **Time comercial com problema de carrinho abandonado** | Sem follow-up automático | Recuperação de carrinho abandonado automatizada por e-mail (após 2h) |

---

### Funcionalidades por pilar

#### Vitrine e experiência de compra (consumidor final)

- **Simulador de economia solar** — calcula kWp necessário, número de painéis, economia mensal/anual, payback, CO₂ evitado. Usa tarifas reais da ANEEL por estado (27 estados) e irradiância solar regional. Gera proposta em PDF profissional — gerador de leads qualificados.
- **Kit Builder (Monte seu Kit)** — wizard em 4 passos (Painel → Inversor → Estrutura → Cabos) com total e simulação de parcelamento em tempo real.
- **Galeria de produto profissional** — zoom 3×, lightbox, thumbnails, sticky scroll.
- **Comparador de produtos** — até 4 produtos lado a lado com specs técnicas coloridas.
- **Busca inteligente (Meilisearch)** — autocomplete instantâneo, filtros por marca/preço/estoque/promoção, full-text tolerante a erro de digitação.
- **Reviews com fotos** — avaliações de clientes com upload de até 4 fotos.
- **Perguntas e Respostas por produto** — reduz abandono por incerteza técnica.
- **Frete grátis dinâmico** configurável pelo admin (sem deploy) com barra de progresso no carrinho.
- **Calculadora de frete por CEP** (integração ViaCEP) com PAC/SEDEX por faixa.
- **Cross-sell / Upsell automático** — baseado em co-ocorrência real de pedidos.
- **Cupons de desconto** (percentual, valor fixo, frete grátis) e **Flash Sales com contador regressivo**.
- **Prova social ao vivo** — "X pessoas vendo agora", vendidos no mês, avisos de estoque baixo.
- **Botão flutuante de WhatsApp**.
- **Checkout completo** — PIX (com desconto configurável), Boleto, Cartão parcelado em até 12x, validação de estoque anti-overselling.
- **Wishlist compartilhável** — cliente gera link público da lista de favoritos.
- **Programa de fidelidade** — pontos automáticos por compra (1% do valor), histórico e resgate.
- **Alertas "avisar quando chegar"** — captura o lead mesmo com produto sem estoque.
- **Recuperação de carrinho abandonado** — e-mail automático após 2h de inatividade.
- **Blog integrado** — conteúdo educativo sobre energia solar com SEO orgânico.
- **Newsletter com double opt-in** — captação de leads compatível com LGPD.

#### Motor de vendas multicanal B2B (principal diferencial)

- **Tabelas de preço automáticas por perfil** — Público (varejo), Consultor (−12%), Integrador (−18%), Distribuidor (−25%), configuráveis livremente. Mesmo catálogo, mesmo site, preços diferentes por quem está logado.
- **Portal B2B dedicado** — landing própria, cadastro por CNPJ, fluxo de aprovação (pendente → ativo/rejeitado/suspenso), atribuição automática de tabela de preço, limite de crédito e prazo configuráveis, gestão de projetos/obras da empresa parceira.
- **Painel do Consultor** — dashboard com receita do mês, comissão estimada, taxa de conversão, progresso de meta, funil de propostas (gráfico de pizza), listagem de propostas recentes.
- **Motor de Propostas Comerciais** — consultor monta proposta com itens e descontos, envia por e-mail com link público; cliente visualiza, aceita ou recusa sem login; geração de PDF profissional; timeline completa (enviada → visualizada → aceita/recusada); notificação automática da resposta.
- **Cotação para grandes volumes** — formulário com CNPJ para volumes fora do fluxo de carrinho, com notificação automática para o time comercial.

#### Operação e gestão (convence o dono/gestor)

- **Painel administrativo completo** com KPIs em tempo real: receita, pedidos, produtos, clientes — gráficos de 30 dias, top produtos, exportação em CSV.
- **Gestão de estoque com sincronização automática** — idempotente, auditável, resiliente a falhas, nunca apaga produto por engano (arquiva).
- **Integração nativa com AppSolar (Edeltec)** — sincronização de catálogo de kits (preço, ficha técnica, imagens) automática diária e de hora em hora.
- **Importação de produtos via CSV** — 3 modos (criar, atualizar, criar+atualizar), 15 colunas, pré-visualização antes de confirmar, histórico completo.
- **Ações em massa** — publicar/arquivar/destacar/excluir até 100 produtos de uma vez.
- **Módulo financeiro** — DRE, fluxo de caixa, conciliação, exportação de relatórios.
- **Gestão de devoluções/RMA** — fluxo completo com fotos e status.
- **Central de suporte/tickets** — thread cliente-admin com categorias, prioridades e status.
- **White-label total** — nome da loja e logo configuráveis pelo admin sem mexer em código.
- **Configurações centralizadas sem deploy** — frete grátis, identidade visual e regras de negócio mudam pelo painel.

#### Pagamentos e integrações

- **Gateway de pagamento (PIX, Boleto, Cartão parcelado)** — hoje via Asaas, arquitetura plugável para troca de gateway.
- **Webhooks idempotentes** — pagamento duplicado não gera pedido duplicado.
- **Login social com Google** — merge automático de conta por e-mail.
- **Busca full-text de alta performance (Meilisearch)**.
- **Filas e processamento assíncrono (Laravel Horizon)** — e-mails e sincronizações não travam a navegação.

#### Segurança e conformidade

- **2FA (TOTP) obrigatório para administradores**, opcional para clientes.
- **6 papéis e 26 permissões granulares** — cada colaborador só vê e faz o que deveria.
- **Auditoria completa** de ações sensíveis (quem, quando, IP, antes/depois).
- Proteções padrão: CSRF, XSS, SQL Injection (bindings), rate limiting, headers de segurança (HSTS, CSP, X-Frame-Options).
- **Cartão de crédito nunca armazenado no servidor** — tokenização no gateway (conformidade PCI-DSS).
- **Compatível com LGPD**: double opt-in, direitos do titular (acesso/exportação/exclusão/anonimização), banner de cookies.
- Dados sensíveis criptografados em repouso; TLS obrigatório em produção.

---

### Diferenciais competitivos vs. plataformas genéricas

| Recurso | E-commerce genérico | Solar Shop |
|---|---|---|
| Simulador de economia solar com dados ANEEL por estado | ❌ | ✅ nativo |
| Geração de proposta comercial em PDF a partir do simulador | ❌ | ✅ nativo |
| Kit Builder guiado (painel + inversor + estrutura + cabos) | ❌ | ✅ nativo |
| Tabelas de preço por tipo de cliente (varejo/consultor/integrador/distribuidor) | Customização cara | ✅ nativo |
| Portal B2B com aprovação de empresa por CNPJ | Customização cara | ✅ nativo |
| Painel de consultor/vendedor externo com metas e comissão | ❌ | ✅ nativo |
| Motor de propostas comerciais com aceite público | ❌ | ✅ nativo |
| Sincronização nativa com AppSolar/Edeltec | ❌ | ✅ nativo |
| Tempo até estar no ar | Meses (customizado) | Dias, com todos os recursos prontos |

---

### Sugestão de estrutura de planos

| Plano | Público | Inclui |
|---|---|---|
| **Essencial** | Loja solar iniciante, venda direta ao consumidor | Catálogo, carrinho/checkout, pagamentos (PIX/Boleto/Cartão), simulador solar, blog, reviews, cupons, busca, frete |
| **Profissional** | Integradores/revendedores que também vendem para outros integradores | Tudo do Essencial + Kit Builder + Tabelas de preço por segmento + Cotação por volume + Comparador + Fidelidade + Flash Sales |
| **Business / B2B** | Distribuidoras com rede de parceiros e força de vendas | Tudo do Profissional + Portal B2B completo (CNPJ, aprovação, crédito) + Painel de Consultores + Motor de Propostas + Sincronização ERP/AppSolar + Relatórios financeiros |
| **Enterprise** | Operações grandes, múltiplas marcas/franquias | Tudo do Business + White-label multi-loja + suporte dedicado + SLA + customizações |

> Preços e nomes finais a definir conforme estratégia comercial.

---

### Mensagens-chave / Argumentos de conversão

1. "A única plataforma de e-commerce feita para o setor solar — não uma loja genérica adaptada."
2. "De simulador de economia a proposta em PDF: seu cliente compra sem sair do site."
3. "Venda para o consumidor final, para integradores e para distribuidores — na mesma plataforma, com preços automáticos para cada um."
4. "Sua equipe comercial com painel próprio: metas, comissão e propostas em um só lugar."
5. "Estoque sempre atualizado — sincronização automática com seu ERP ou distribuidor, sem digitar produto por dia."
6. "No ar em dias, não em meses." (contraste com desenvolvimento sob medida)

---

### FAQ (objeções prováveis)

**"Preciso ter conhecimento técnico para usar?"**
Não. O painel administrativo é visual, sem código — configurações de frete, preços e identidade visual mudam pelo painel.

**"Consigo vender para consumidor final e para integradores ao mesmo tempo?"**
Sim — é o diferencial central: tabelas de preço automáticas por tipo de cliente na mesma loja, sem duplicar catálogo.

**"Meu catálogo já existe em um distribuidor. Preciso recadastrar tudo?"**
Não. Há sincronização automática com AppSolar/Edeltec e importação via CSV/ERP genérico.

**"É seguro? Atende LGPD?"**
Sim — 2FA, criptografia, auditoria completa e fluxos de consentimento/exclusão de dados do titular integrados.

**"Quanto tempo até a loja estar no ar?"**
Dias, não meses — a plataforma já vem com e-commerce, simulador e portal B2B prontos; falta apenas configurar catálogo, pagamento e identidade visual.

**"Posso ter minha própria equipe de vendedores/consultores?"**
Sim, há painel dedicado de consultor com metas, comissão e motor de propostas comerciais.

**"Dá para personalizar a marca (nome e logo)?"**
Sim, totalmente white-label pelo próprio admin.

---

## 4. CRM Solar

**Slug:** `crm-solar`
**Categoria:** CRM · Orçamento e Projetos Solares
**Tagline:** Do orçamento à instalação: o CRM feito para quem vende projetos solares.

> **Nota:** O nome interno do repositório é `vendedorsolar`. Usar apenas "CRM Solar" em todo contexto público.

**Descrição:**
CRM para equipes comerciais de integradoras de energia solar. Pipeline completo: lead → orçamento → contrato → visita técnica → instalação. Motor de dimensionamento automático gera propostas em PDF prontas para envio.

**Para quem é:**
Integradoras e equipes de vendas de projetos solares (residencial e comercial).

**Funcionalidades:**
- Pipeline completo (lead → instalação)
- Motor de dimensionamento automático (convencional, demanda, off-grid)
- Geração de propostas em PDF
- Integração com fornecedores (Aldo e Edeltec)
- Precificação com margens por estado e estrutura
- Painéis separados para admin e vendedor

> **Pendente:** documentação detalhada a ser expandida com relatório de produto.
