<?php

/*
 * Metadados de SEO renderizados no HTML do servidor (resources/views/app.blade.php).
 *
 * O site não tem SSR: sem isto, buscadores e redes sociais só veriam a descrição
 * genérica. Os títulos e descrições aqui devem acompanhar os do componente da
 * página (AppLayout title/description) e de resources/js/data/produtos.js.
 */

return [

    'default' => [
        'title' => 'Rexar — Software para Energia Solar',
        'description' => 'Rexar — Software especializado para o setor de energia solar fotovoltaica.',
    ],

    'paginas' => [
        'sobre' => [
            'title' => 'Sobre a Rexar — Rexar',
            'description' => 'A Rexar desenvolve software especializado para empresas de energia solar: CRM, orçamento e projetos, e-commerce e gestão de Geração Distribuída (GD).',
        ],
    ],

    'produtos' => [

        'gd-solar-erp' => [
            'title' => 'GD Solar ERP — Sistema de gestão para Geração Distribuída (GD) — Rexar',
            'description' => 'Sistema de gestão completa para Geração Distribuída (GD): faturas da concessionária lidas automaticamente, usinas, clientes, cobrança e pagamento em uma só plataforma.',
            'jsonld' => [
                '@context' => 'https://schema.org',
                '@type' => 'SoftwareApplication',
                'name' => 'GD Solar ERP',
                'applicationCategory' => 'BusinessApplication',
                'applicationSubCategory' => 'Gestão de Geração Distribuída (GD) de energia solar',
                'operatingSystem' => 'Web',
                'inLanguage' => 'pt-BR',
                'description' => 'Sistema de gestão completa para empresas de Geração Distribuída (GD) de energia solar — cooperativas, consórcios de geração compartilhada, comercializadoras de energia por assinatura e gestoras de usinas. Gestão de usinas e energia, clientes e unidades consumidoras, leitura de faturas da concessionária, cobrança com desconto, boleto e Pix com baixa automática e portal do cliente.',
                'featureList' => [
                    'Gestão de usinas de geração distribuída e da energia disponível',
                    'Vínculo de unidades consumidoras às usinas',
                    'Entrada e leitura automática das faturas da concessionária, sem upload manual',
                    'Cobrança calculada com o desconto de cada contrato',
                    'Boleto e Pix integrados com baixa automática',
                    'Portal do cliente com relatório de economia',
                    'Alertas operacionais e relatórios',
                ],
                'publisher' => [
                    '@type' => 'Organization',
                    'name' => 'Rexar',
                ],
            ],
        ],

    ],

];
