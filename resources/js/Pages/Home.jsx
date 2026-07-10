import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos } from '../data/produtos';

const produtoIcons = {
    'levelead-crm': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    ),
    'gd-solar-erp': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    ),
    'solar-shop': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
    ),
    'crm-solar': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    ),
};

const colorCard = {
    blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100 text-blue-600',   badge: 'blue' },
    green:  { bg: 'bg-green-50',  icon: 'bg-green-100 text-green-600',  badge: 'green' },
    orange: { bg: 'bg-orange-50', icon: 'bg-orange-100 text-orange-600', badge: 'orange' },
    yellow: { bg: 'bg-yellow-50', icon: 'bg-yellow-100 text-yellow-600', badge: 'yellow' },
};

const diferenciais = [
    {
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
        ),
        titulo: 'Especialista em energia solar',
        descricao: 'Cada sistema foi construído para resolver problemas reais de empresas do setor fotovoltaico.',
    },
    {
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
            </svg>
        ),
        titulo: 'Ecossistema integrado',
        descricao: 'Quatro sistemas que cobrem todo o ciclo do negócio solar, do primeiro lead à gestão recorrente.',
    },
    {
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        ),
        titulo: 'Tecnologia moderna',
        descricao: 'Plataformas rápidas, seguras, responsivas e em conformidade com LGPD.',
    },
    {
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        ),
        titulo: 'Suporte próximo',
        descricao: 'Atendimento direto com quem desenvolveu — sem chamados perdidos em filas genéricas.',
    },
];

const etapas = [
    { num: '01', label: 'Prospecção', produto: 'LeveLead CRM', slug: 'levelead-crm', cor: 'text-blue-600' },
    { num: '02', label: 'Orçamento', produto: 'CRM Solar', slug: 'crm-solar', cor: 'text-yellow-600' },
    { num: '03', label: 'Venda online', produto: 'Solar Shop', slug: 'solar-shop', cor: 'text-orange-600' },
    { num: '04', label: 'Gestão recorrente', produto: 'GD Solar ERP', slug: 'gd-solar-erp', cor: 'text-green-600' },
];

export default function Home() {
    return (
        <AppLayout
            title="Rexar — Software para Energia Solar"
            description="Rexar oferece um ecossistema completo de software para empresas do setor de energia solar fotovoltaica."
        >
            {/* ── Hero ── */}
            <section className="relative bg-dark-900 text-white overflow-hidden">
                {/* Decoração de fundo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
                    <Badge color="brand" className="mb-6">Especialista em energia solar fotovoltaica</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
                        O software que o setor solar
                        <span className="text-brand-400"> precisava</span>
                    </h1>
                    <p className="text-dark-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        Da prospecção do primeiro lead até a gestão recorrente da energia gerada. A Rexar oferece um ecossistema completo de sistemas para empresas de energia solar fotovoltaica.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/produtos"
                            className="px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors text-center"
                        >
                            Conhecer os sistemas
                        </Link>
                        <Link
                            href="/contato"
                            className="px-8 py-4 border border-dark-500 text-white font-semibold rounded-lg hover:border-brand-400 hover:text-brand-400 transition-colors text-center"
                        >
                            Falar com vendas
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Os 4 produtos ── */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <Badge color="brand" className="mb-4">Nossos sistemas</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                            Quatro sistemas, um ecossistema
                        </h2>
                        <p className="text-dark-500 text-lg max-w-2xl mx-auto">
                            Cada produto foi desenvolvido para uma etapa específica do negócio solar, podendo ser usado de forma independente ou em conjunto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produtos.map((p) => {
                            const c = colorCard[p.cor];
                            return (
                                <Link
                                    key={p.slug}
                                    href={`/produtos/${p.slug}`}
                                    className={`${c.bg} rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group border border-transparent hover:border-dark-200`}
                                >
                                    <div className={`${c.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                                        {produtoIcons[p.slug]}
                                    </div>
                                    <Badge color={c.badge} className="mb-3 text-xs">{p.categoria.split(' · ')[0]}</Badge>
                                    <h3 className="text-dark-900 font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors">
                                        {p.nome}
                                    </h3>
                                    <p className="text-dark-500 text-sm leading-relaxed line-clamp-3">
                                        {p.tagline}
                                    </p>
                                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-500 group-hover:gap-2 transition-all">
                                        Saiba mais <span className="ml-1">→</span>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Como os produtos se conectam ── */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <Badge color="dark" className="mb-4">Visão do ecossistema</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                            Cobertura completa do ciclo solar
                        </h2>
                        <p className="text-dark-500 text-lg max-w-xl mx-auto">
                            Use um ou todos os sistemas. Cada um resolve uma etapa crítica do negócio de energia solar.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {etapas.map((e, i) => (
                            <Link
                                key={e.slug}
                                href={`/produtos/${e.slug}`}
                                className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group"
                            >
                                <span className={`text-4xl font-black ${e.cor} opacity-20 group-hover:opacity-40 transition-opacity`}>
                                    {e.num}
                                </span>
                                <div className="mt-2">
                                    <p className="text-xs text-dark-400 uppercase tracking-widest mb-1">{e.label}</p>
                                    <p className="font-bold text-dark-900 text-sm">{e.produto}</p>
                                </div>
                                {i < etapas.length - 1 && (
                                    <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-dark-300 text-xl z-10">→</span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Diferenciais ── */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <Badge color="brand" className="mb-4">Por que a Rexar</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
                            Feito para quem vive o setor solar
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {diferenciais.map((d, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    {d.icone}
                                </div>
                                <h3 className="font-bold text-dark-900 mb-2">{d.titulo}</h3>
                                <p className="text-dark-500 text-sm leading-relaxed">{d.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA final ── */}
            <section className="py-20 bg-brand-500">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pronto para transformar sua operação solar?
                    </h2>
                    <p className="text-brand-100 text-lg mb-8">
                        Solicite uma demonstração gratuita e veja como os sistemas da Rexar se encaixam no seu negócio.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors"
                    >
                        Solicitar demonstração gratuita
                    </Link>
                </div>
            </section>
        </AppLayout>
    );
}
