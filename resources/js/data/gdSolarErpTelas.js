/*
 * Galeria de telas do GD Solar ERP (seção "Explore a plataforma" da página de vendas).
 * Imagens em public/images/produtos/gd-solar-erp/telas/ (versão grande) e .../miniaturas/ (miniatura).
 * Dados fictícios de demonstração. Regras de seleção: docs/gd-solar-erp-pagina-de-vendas.md.
 */

export const AREAS = ['Administrador', 'Consultor', 'Cliente', 'Produtor', 'Celular'];

const tela = (arquivo, titulo, area) => ({
    src: `/images/produtos/gd-solar-erp/telas/${arquivo}.webp`,
    thumb: `/images/produtos/gd-solar-erp/miniaturas/${arquivo}.webp`,
    titulo,
    area,
    celular: area === 'Celular',
});

export const telas = [
    // Administrador
    tela('cockpit-executivo', 'Cockpit executivo', 'Administrador'),
    tela('gestao-de-energia', 'Gestão de energia das usinas', 'Administrador'),
    tela('vinculos-cliente-usina', 'Alocação de energia por cliente', 'Administrador'),
    tela('geracao-das-usinas', 'Geração mensal das usinas', 'Administrador'),
    tela('historico-de-importacao', 'Importação automática de faturas', 'Administrador'),
    tela('fatura-em-revisao', 'Fatura lida automaticamente', 'Administrador'),
    tela('relatorio-de-faturas', 'Faturas de concessionárias', 'Administrador'),
    tela('cobrancas', 'Cobranças e atrasos', 'Administrador'),
    tela('detalhe-da-cobranca', 'Cobrança com ações em um clique', 'Administrador'),
    tela('alertas-operacionais', 'Alertas operacionais', 'Administrador'),
    tela('relatorio-financeiro', 'Relatório financeiro', 'Administrador'),
    tela('relatorio-de-cobrancas', 'Relatório de cobranças', 'Administrador'),
    tela('relatorio-de-usinas', 'Relatório por usina', 'Administrador'),
    tela('chamados-de-suporte', 'Central de suporte', 'Administrador'),
    tela('detalhe-do-chamado', 'Conversa de um chamado', 'Administrador'),
    tela('concessionarias', 'Concessionárias cadastradas', 'Administrador'),
    tela('identidade-visual', 'Identidade visual da sua marca', 'Administrador'),

    // Consultor
    tela('painel-consultor', 'Painel da carteira', 'Consultor'),
    tela('consultor-clientes', 'Carteira de clientes', 'Consultor'),
    tela('consultor-perfil-do-cliente', 'Ficha do cliente', 'Consultor'),
    tela('consultor-unidades-consumidoras', 'Unidades consumidoras', 'Consultor'),
    tela('consultor-propostas', 'Propostas comerciais', 'Consultor'),
    tela('proposta-detalhe', 'Proposta pronta para enviar', 'Consultor'),
    tela('consultor-produtores', 'Produtores donos de usinas', 'Consultor'),
    tela('consultor-usinas', 'Usinas da carteira', 'Consultor'),
    tela('consultor-detalhe-da-usina', 'Detalhe da usina', 'Consultor'),
    tela('consultor-grupos-de-usinas', 'Grupos de usinas', 'Consultor'),
    tela('consultor-cobrancas', 'Cobranças da carteira', 'Consultor'),
    tela('consultor-alertas', 'Alertas da carteira', 'Consultor'),

    // Cliente (computador)
    tela('painel-cliente', 'Painel do cliente', 'Cliente'),
    tela('cliente-faturas', 'Faturas de energia', 'Cliente'),
    tela('cliente-detalhe-da-fatura', 'Detalhe da fatura', 'Cliente'),
    tela('cliente-cobrancas', 'Cobranças e descontos', 'Cliente'),
    tela('cliente-meu-perfil', 'Dados cadastrais', 'Cliente'),
    tela('cliente-suporte', 'Suporte do cliente', 'Cliente'),

    // Produtor
    tela('produtor-painel', 'Painel do produtor', 'Produtor'),
    tela('produtor-minhas-usinas', 'Minhas usinas', 'Produtor'),
    tela('detalhe-usina-produtor', 'Usina do produtor', 'Produtor'),

    // Cliente (celular)
    tela('celular-painel', 'Painel no celular', 'Celular'),
    tela('celular-faturas', 'Faturas no celular', 'Celular'),
    tela('celular-fatura', 'Detalhe da fatura', 'Celular'),
    tela('celular-cobrancas', 'Cobranças no celular', 'Celular'),
    tela('celular-pagar-cobranca', 'Cobrança a pagar', 'Celular'),
    tela('celular-meu-perfil', 'Perfil no celular', 'Celular'),
    tela('celular-suporte', 'Suporte no celular', 'Celular'),
];
