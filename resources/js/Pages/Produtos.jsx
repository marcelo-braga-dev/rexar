import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos } from '../data/produtos';

const colorCard = {
    blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   icon: 'bg-blue-100 text-blue-600',   badge: 'blue' },
    green:  { bg: 'bg-green-50',  border: 'border-green-200',  icon: 'bg-green-100 text-green-600',  badge: 'green' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-100 text-orange-600', badge: 'orange' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: 'bg-yellow-100 text-yellow-600', badge: 'yellow' },
};

const produtoIcons = {
    'levelead-crm': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    ),
    'gd-solar-erp': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    ),
    'solar-shop': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
    ),
    'crm-solar': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    ),
};

export default function Produtos() {
    return (
        <AppLayout
            title="Produtos"
            description="Conheça o ecossistema de software da Rexar para o setor de energia solar fotovoltaica."
        >
            {/* Hero */}
            <section className="bg-dark-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <Badge color="brand" className="mb-4">Ecossistema Rexar</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos sistemas</h1>
                    <p className="text-dark-300 text-lg max-w-2xl mx-auto">
                        Quatro sistemas especializados que cobrem todo o ciclo do negócio de energia solar fotovoltaica.
                    </p>
                </div>
            </section>

            {/* Grid de produtos */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {produtos.map((p) => {
                            const c = colorCard[p.cor];
                            return (
                                <div key={p.slug} className={`${c.bg} border ${c.border} rounded-2xl p-8`}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`${c.icon} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            {produtoIcons[p.slug]}
                                        </div>
                                        <div>
                                            <Badge color={c.badge} className="mb-2">{p.categoria}</Badge>
                                            <h2 className="text-xl font-bold text-dark-900">{p.nome}</h2>
                                        </div>
                                    </div>

                                    <p className="text-dark-600 mb-6 leading-relaxed">{p.descricao}</p>

                                    <ul className="space-y-2 mb-8">
                                        {p.beneficios.slice(0, 4).map((b, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-dark-700">
                                                <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                                                <span><strong>{b.titulo}</strong> — {b.descricao}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link
                                            href={`/produtos/${p.slug}`}
                                            className="px-5 py-2.5 bg-dark-900 text-white text-sm font-semibold rounded-lg hover:bg-dark-800 transition-colors text-center"
                                        >
                                            Ver detalhes completos
                                        </Link>
                                        <Link
                                            href="/contato"
                                            className="px-5 py-2.5 border border-dark-300 text-dark-700 text-sm font-semibold rounded-lg hover:border-brand-500 hover:text-brand-500 transition-colors text-center"
                                        >
                                            Solicitar demo
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dark-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Não sabe por onde começar?</h2>
                    <p className="text-dark-300 mb-8">
                        Fale com a nossa equipe e descubra qual sistema se encaixa melhor na sua operação.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors"
                    >
                        Falar com um especialista
                    </Link>
                </div>
            </section>
        </AppLayout>
    );
}
