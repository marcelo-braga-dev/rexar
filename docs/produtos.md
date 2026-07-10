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
**Tagline:** Transforme contatos frios em clientes fechados.

**Descrição:**
CRM ideal para equipes que vendem ativamente por telefone, WhatsApp e visita. Organiza todo o funil comercial em Kanban visual, do primeiro contato até o fechamento. Histórico unificado por lead: ligações, mensagens, visitas e anotações.

**Para quem é:**
Empresas com equipe de vendas ativa (call center outbound), times B2B que prospectam grandes volumes de leads.

**Funcionalidades:**
- Funil Kanban visual com arrastar-e-soltar (8 etapas)
- Enriquecimento automático de dados via CNPJ/nome
- Distribuição automática de leads (round-robin, equipe ou região)
- Scoring de temperatura (quente/morno/frio)
- Alertas de SLA
- Reciclagem inteligente de leads perdidos
- Conformidade LGPD/ANATEL
- Importação em massa via CSV

---

## 2. GD Solar ERP

**Slug:** `gd-solar-erp`
**Categoria:** ERP · Geração Distribuída Solar
**Tagline:** Da proposta à cobrança: gestão completa para quem opera energia solar por assinatura.

**Descrição:**
ERP para empresas que atuam com geração compartilhada e assinatura de energia solar. Administra usinas, clientes e produtores em uma única plataforma. Cobre todo o ciclo: proposta → contrato → alocação de energia → importação de contas → faturamento → cobrança.

**Para quem é:**
Empresas com modelo de assinatura/geração compartilhada, administradoras de usinas, consultores de energia solar.

**Funcionalidades:**
- Painéis separados por perfil (admin, consultor, cliente, produtor)
- Importação automática de contas de luz por e-mail (IMAP)
- Faturamento automático
- Cobrança integrada (boleto e Pix) via Cora
- Lembretes de cobrança via WhatsApp
- Gestão de usinas e cotas de energia
- Relatórios financeiros e operacionais

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
**Tagline:** Do lead à homologação: o único CRM feito para quem vende energia solar.

> **Nota:** O nome interno do repositório é `vendedorsolar` (codinome: AMS CRM). Usar apenas "CRM Solar" em todo contexto público — copy, meta tags, e-mails, landing page.

**Resumo executivo:**
CRM Solar é um CRM verticalizado para empresas de energia solar fotovoltaica — não é um CRM genérico adaptado, foi desenhado do zero para o fluxo real do setor:

```
Captação do Lead → Qualificação/Atendimento → Orçamento (kit solar) → Pedido/Venda
→ Faturamento → Instalação → Homologação junto à concessionária → Financiamento → Pós-venda (SAC)
```

Diferencial central: CRMs genéricos (RD Station, Pipedrive, HubSpot) não têm homologação de concessionária, kits solares, cálculo de potência/inversor, nem financiamento — o CRM Solar tem, nativamente.

**Para quem é:**
Integradoras solares, distribuidoras de kits fotovoltaicos e franquias de venda de energia solar.

---

### Dores do mercado que o produto resolve

| Perfil | Dor atual | Como o CRM Solar resolve |
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

#### 3.1 Gestão de Leads (funil comercial)
- Cadastro de leads PF/PJ
- Kanban de funil com etapas reais do setor: Início do Funil → Conexão Proativa → Contato Direto → Cotação Enviada → Oportunidade → Super Oportunidade → Ativo → Finalizado/Inativo
- Distribuição e encaminhamento entre consultores, com histórico
- Função dedicada de **SDR** (pré-atendimento/qualificação) com fila própria
- Histórico completo de atendimentos e tentativas de contato por lead
- Importação em massa via planilha (CSV/Excel), com histórico de importações
- Solicitação/edição controlada de dados de lead (auditoria de alterações)
- Relatórios de conversão por consultor, por setor, por período

#### 3.2 Orçamentos & Catálogo Solar
- Motor de orçamento que gera proposta vinculada a lead + kit + tensão
- Catálogo de **kits solares** com cálculo técnico: potência do kit, potência do inversor, potência do módulo, tipo de estrutura, sistema híbrido, fase (mono/trifásico)
- Categorias, marcas, unidades e fornecedores de produtos
- Controle de estoque com histórico de movimentações
- **Integração com Edeltec Solar API** — sincronização automática de preços e disponibilidade

#### 3.3 Pedidos (ordem de venda)
- Emissão de pedido com múltiplos produtos/kits
- Esteira de status: Lançado → Aguardando Pagamento → Aguardando Nota → Conferência → Conferido → Aguardando Faturamento → Faturado → Aguardando Rastreio → Acompanhamento → Entregue
- Estados de exceção automáticos: Vencido (auto-calculado), Cancelado, Reprovado, Encomenda
- Múltiplos modelos de formulário de pedido
- Controle de fretes e transportadoras
- Chamados/tickets vinculados a pedidos (pós-venda)
- Exportação em **Excel e PDF**

#### 3.4 Homologação (diferencial competitivo)
- Acompanhamento do processo junto à concessionária, etapa por etapa: documentação → conferência → vistoria → projeto enviado → projeto aprovado/reprovado → conclusão
- Cadastro de usinas fotovoltaicas com **coordenadas geográficas** (lat/lng)
- Anexos de documentos por cliente e por usina
- Cadastro de concessionárias
- Histórico completo — nada se perde entre a venda e a conexão à rede

#### 3.5 Financiamento
- Pipeline dedicado (Kanban) para propostas de financiamento
- Dados de cliente, sócios (PJ) e endereço para análise de crédito
- Anotações e histórico de status por proposta
- Papel de "Supervisor de Financiamento" na hierarquia de permissões

#### 3.6 Financeiro
- Fluxo de caixa com entradas e saídas
- Notas fiscais com múltiplos pagamentos/parcelas (baixa parcial)
- Cadastro de bancos, empresas do grupo, fornecedores
- Controle de salários
- Metas de vendas por consultor e empresa, com acompanhamento de "vendas faturadas vs meta"

#### 3.7 Dashboards & Indicadores
- Indicadores de vendas, financeiros e **econômicos** (visão macro do negócio)
- Indicadores de leads (funil, conversão, produtividade)
- Dashboards segmentados por perfil (Admin vê mais que Consultor)
- Gráficos interativos (Chart.js / react-chartjs-2)

#### 3.8 Comunicação integrada
- **Chat interno em tempo real** (WebSocket via Laravel Reverb, com fallback Pusher)
- **WhatsApp integrado** (via Whaticket) — atendimento ao cliente sem sair do CRM
- **Discador VoIP** integrado a central Asterisk (AMI/PAMI) — liga com um clique
- **E-mail** — leitura via IMAP integrada ao painel
- Notificações internas em tempo real (leads, pedidos, SAC)

#### 3.9 Ferramentas de produtividade
- Agenda/calendário de compromissos
- Gestão de tarefas com fluxo de aprovação (aberto → atendimento → aprovação → finalizado)
- Biblioteca de documentos/materiais compartilhados
- SAC (atendimento pós-venda) com anexos e mensagens

#### 3.10 Treinamento (LMS embutido)
- Módulo de **Cursos** internos: módulos, aulas, avaliações com questões e correção
- Onboarding de novos consultores/integradores dentro da própria plataforma

#### 3.11 Multi-empresa / Multi-filial
- Estrutura nativa de **Franquias** e **Setores** — pensado para redes, não para uma loja só
- Hierarquia de usuários e funções configurável

#### 3.12 Segurança e Governança
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

1. "CRM Solar: o único CRM feito para energia solar, do lead à homologação." — especialização vertical vs. genéricos
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

- **Nome comercial: "CRM Solar".** O identificador "AMS CRM" existe apenas internamente e não deve aparecer em nenhum lugar público — nem copy, nem meta tags, nem assets visuais.
- O sistema está em produção/uso real (migrações datadas de 2026), o que é argumento de maturidade: **não é MVP, é sistema rodando em empresas reais.**
- Pricing/planos de assinatura ainda não foram definidos — precisam ser configurados antes da seção de pricing da landing page.
