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
**Tagline:** Sua loja virtual de energia solar, pronta para vender.

**Descrição:**
E-commerce completo para venda de equipamentos de energia solar (painéis, inversores, estruturas, kits) para consumidor final ou B2B. Inclui simulador de economia, montador de kits e painel de consultor.

**Para quem é:**
Distribuidoras e integradores que vendem equipamentos online, para consumidor final ou revenda.

**Funcionalidades:**
- Loja virtual completa (carrinho, checkout, busca, comparação)
- Montador de kits solares personalizados
- Simulador de economia de energia
- Área B2B para integradores
- Painel de consultor (propostas e orçamentos)
- Blog integrado para SEO
- Alertas de estoque e newsletter
- Login social e 2FA

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
