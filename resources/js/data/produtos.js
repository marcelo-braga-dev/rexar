/*
 * Fonte única de dados dos produtos Rexar.
 * Altere aqui para refletir em todo o site.
 */
export const produtos = [
    {
        slug: 'levelead-crm',
        nome: 'LeveLead CRM',
        categoria: 'CRM · Prospecção e Vendas',
        tagline: 'Transforme contatos frios em clientes fechados.',
        descricao:
            'O LeveLead é o CRM ideal para equipes que vendem ativamente por telefone, WhatsApp e visita. Organiza todo o funil comercial em um Kanban visual, do primeiro contato até o fechamento do negócio. Cada ligação, mensagem, visita e anotação fica registrada em um histórico único — nenhuma negociação perde contexto.',
        cor: 'blue',
        icone: 'Users',
        beneficios: [
            { titulo: 'Funil Kanban visual', descricao: 'Arrastar-e-soltar intuitivo com 8 etapas do lead ao fechamento.' },
            { titulo: 'Enriquecimento automático', descricao: 'Dados da empresa preenchidos automaticamente via CNPJ/nome (nota, localização, avaliações).' },
            { titulo: 'Distribuição automática', descricao: 'Leads distribuídos entre vendedores por round-robin, equipe ou região — sem fila manual.' },
            { titulo: 'Scoring de temperatura', descricao: 'Classificação automática em quente, morno e frio para priorizar as melhores oportunidades.' },
            { titulo: 'Alertas de SLA', descricao: 'Avisos automáticos para não deixar nenhum lead esfriar sem contato.' },
            { titulo: 'Reciclagem de leads', descricao: 'Recuperação inteligente de leads perdidos com sugestão do melhor momento para reabrir a conversa.' },
            { titulo: 'Conformidade LGPD/ANATEL', descricao: 'Validação de janelas de ligação e opt-out por empresa, telefone ou e-mail.' },
            { titulo: 'Importação em massa', descricao: 'Upload de listas CSV com reconhecimento automático de colunas.' },
        ],
        paraQuem:
            'Empresas com equipe de vendas ativa (call center outbound), times comerciais B2B que prospectam grandes volumes de leads e precisam de organização, velocidade e rastreabilidade.',
    },
    {
        slug: 'gd-solar-erp',
        nome: 'GD Solar ERP',
        categoria: 'ERP · Geração Distribuída Solar',
        tagline: 'Da proposta à cobrança: gestão completa para quem opera energia solar por assinatura.',
        descricao:
            'O GD Solar ERP foi criado para empresas que atuam com geração compartilhada e assinatura de energia solar — administrando usinas, clientes e produtores em uma única plataforma. Cobre o ciclo inteiro: proposta, contrato, alocação de energia, importação das contas de luz, faturamento e cobrança com lembrete automático por WhatsApp.',
        cor: 'green',
        icone: 'Zap',
        beneficios: [
            { titulo: 'Painéis por perfil', descricao: 'Dashboards separados para admin, consultor, cliente e produtor de energia.' },
            { titulo: 'Importação automática de contas', descricao: 'Contas de luz importadas por e-mail (IMAP) sem digitação manual.' },
            { titulo: 'Faturamento automático', descricao: 'Faturas geradas automaticamente a partir das contas de energia aprovadas.' },
            { titulo: 'Cobrança integrada', descricao: 'Boleto e Pix com confirmação automática de pagamento.' },
            { titulo: 'Cobrança via WhatsApp', descricao: 'Lembretes automáticos de cobrança, reduzindo inadimplência sem trabalho manual.' },
            { titulo: 'Gestão de usinas', descricao: 'Cadastro e controle de usinas solares, blocos e cotas de energia por cliente.' },
            { titulo: 'Relatórios financeiros', descricao: 'Visão completa da saúde financeira e operacional do negócio.' },
        ],
        paraQuem:
            'Empresas de energia solar com modelo de assinatura ou geração compartilhada, administradoras de usinas e consultores que vendem esse tipo de contrato para clientes finais.',
    },
    {
        slug: 'solar-shop',
        nome: 'Solar Shop',
        categoria: 'E-commerce · Equipamentos Solares',
        tagline: 'Sua loja virtual de energia solar, pronta para vender.',
        descricao:
            'O Solar Shop é uma plataforma de e-commerce completa para quem vende equipamentos de energia solar — painéis, inversores, estruturas e kits — para o consumidor final ou em volume para integradores (B2B). Inclui ferramentas que ajudam o cliente a decidir a compra, como simulador de economia e montador de kits personalizados.',
        cor: 'orange',
        icone: 'ShoppingCart',
        beneficios: [
            { titulo: 'Loja virtual completa', descricao: 'Carrinho, checkout, busca avançada e comparação de produtos.' },
            { titulo: 'Montador de kits solares', descricao: 'O cliente monta o próprio sistema dentro do site, com os componentes certos.' },
            { titulo: 'Simulador de economia', descricao: 'Mostra o retorno do investimento solar antes de o cliente comprar.' },
            { titulo: 'Área B2B para integradores', descricao: 'Condições diferenciadas para revendas e integradores, com painel exclusivo.' },
            { titulo: 'Painel de consultor', descricao: 'Acompanhamento e envio de propostas e orçamentos personalizados.' },
            { titulo: 'Blog integrado', descricao: 'Conteúdo educativo para SEO e engajamento de clientes.' },
            { titulo: 'Alerta de estoque e newsletter', descricao: 'Reengaje clientes automaticamente com avisos de reposição e campanhas.' },
            { titulo: 'Login social e 2FA', descricao: 'Acesso simplificado e segurança reforçada para clientes e equipe.' },
        ],
        paraQuem:
            'Distribuidoras e integradores que vendem equipamentos de energia solar online, para consumidor final ou revenda.',
    },
    {
        slug: 'crm-solar',
        nome: 'CRM Solar',
        categoria: 'CRM · Orçamento e Projetos Solares',
        tagline: 'Do orçamento à instalação: o CRM feito para quem vende projetos solares.',
        descricao:
            'O CRM Solar é voltado para equipes comerciais de integradoras de energia solar. Acompanha o pipeline completo: do lead até a instalação concluída, passando por orçamento, contrato e visita técnica. O diferencial é o motor de dimensionamento automático de sistemas solares, que calcula a configuração ideal e gera a proposta em PDF pronta para envio.',
        cor: 'yellow',
        icone: 'Sun',
        beneficios: [
            { titulo: 'Pipeline completo', descricao: 'Lead → orçamento → contrato → visita técnica → instalação, tudo em um só lugar.' },
            { titulo: 'Dimensionamento automático', descricao: 'Motor que calcula o sistema solar ideal em 3 modalidades: convencional, demanda e off-grid.' },
            { titulo: 'Proposta em PDF', descricao: 'Gera propostas comerciais profissionais em PDF prontas para enviar ao cliente.' },
            { titulo: 'Integração com fornecedores', descricao: 'Consulta de equipamentos e preços diretamente dos fornecedores (Aldo e Edeltec).' },
            { titulo: 'Precificação por estado', descricao: 'Margens configuráveis por estado e tipo de estrutura para mais precisão no orçamento.' },
            { titulo: 'Perfis admin e vendedor', descricao: 'Dashboards separados com visibilidade e permissões adequadas para cada função.' },
        ],
        paraQuem:
            'Integradoras e equipes de vendas de projetos solares (residencial e comercial) que precisam padronizar e agilizar o processo de orçamento e fechamento.',
    },
];

export function getProduto(slug) {
    return produtos.find((p) => p.slug === slug) ?? null;
}
