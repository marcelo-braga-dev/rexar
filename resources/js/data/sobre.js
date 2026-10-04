/*
 * Conteúdo da página "Sobre" (Pages/Sobre.jsx).
 * Só afirmações que o projeto consegue sustentar: não incluir ano de fundação,
 * tamanho de equipe ou número de clientes sem confirmação.
 */

export const sobre = {
    // Termos que sistemas genéricos não entendem e os da Rexar já trazem prontos
    vocabulario: [
        'Kit fotovoltaico',
        'Dimensionamento',
        'Homologação',
        'Concessionária',
        'Unidade consumidora',
        'Usina de GD',
        'Créditos de energia',
        'Lei 14.300',
        'kWh e kWp',
        'Financiamento solar',
    ],

    fatos: [
        { valor: '4', rotulo: 'sistemas especializados no setor solar' },
        { valor: '360°', rotulo: 'da prospecção à gestão da energia gerada' },
        { valor: '100%', rotulo: 'web, no computador e no celular' },
        { valor: 'BR', rotulo: 'feito para o mercado brasileiro' },
    ],

    // Etapas do negócio solar e o sistema Rexar que cuida de cada uma
    jornada: [
        { etapa: 'Prospecção e vendas', slug: 'levelead-crm' },
        { etapa: 'Orçamento e projeto', slug: 'crm-solar' },
        { etapa: 'Venda de equipamentos', slug: 'solar-shop' },
        { etapa: 'Geração Distribuída', slug: 'gd-solar-erp' },
    ],

    principios: [
        {
            titulo: 'Especialização',
            descricao: 'Fazemos software só para energia solar. Cada tela parte de um processo real do setor, não de um modelo genérico adaptado.',
        },
        {
            titulo: 'Simplicidade',
            descricao: 'Sistema poderoso não precisa ser complicado. Desenhamos para quem vende e opera, não para técnicos, com cada pessoa vendo só o que precisa.',
        },
        {
            titulo: 'Resultado',
            descricao: 'Medimos sucesso pelo que muda no seu negócio: mais vendas, menos trabalho manual, cobrança em dia e decisões com dados.',
        },
        {
            titulo: 'Proximidade',
            descricao: 'Você fala direto com quem desenvolve o produto. Sem fila genérica de chamados e sem resposta de manual.',
        },
    ],

    compromissos: [
        { titulo: 'Sistemas em operação real', descricao: 'Nossas plataformas nascem e evoluem dentro de operações reais do setor solar, não em apresentações.' },
        { titulo: 'Segurança e LGPD', descricao: 'Perfis de acesso por função, dados sensíveis protegidos e conformidade com a LGPD.' },
        { titulo: 'Qualidade contínua', descricao: 'Testes automatizados a cada atualização, para que uma melhoria nova não quebre o que já funciona.' },
        { titulo: 'Sua marca na frente', descricao: 'Onde o seu cliente vê o sistema — portais, propostas e lojas —, quem aparece é a sua empresa, não a nossa.' },
    ],
};
