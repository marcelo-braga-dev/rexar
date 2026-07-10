import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { getProduto } from '../data/produtos';

const colorMap = {
    blue:   { hero: 'from-blue-900 to-dark-900',   accent: 'text-blue-400',  badge: 'blue',   iconBg: 'bg-blue-500' },
    green:  { hero: 'from-green-900 to-dark-900',  accent: 'text-green-400', badge: 'green',  iconBg: 'bg-green-500' },
    orange: { hero: 'from-orange-900 to-dark-900', accent: 'text-orange-400',badge: 'orange', iconBg: 'bg-orange-500' },
    yellow: { hero: 'from-yellow-900 to-dark-900', accent: 'text-yellow-400',badge: 'yellow', iconBg: 'bg-yellow-500' },
};

const produtoIcons = {
    'levelead-crm': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    ),
    'gd-solar-erp': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
    ),
    'solar-shop': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
    ),
    'crm-solar': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    ),
};

export default function Produto({ slug }) {
    const produto = getProduto(slug);

    if (!produto) {
        return (
            <AppLayout title="Produto não encontrado">
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl font-bold text-dark-900 mb-4">Produto não encontrado</h1>
                    <p className="text-dark-500 mb-8">O sistema que você procura não existe ou foi movido.</p>
                    <Link href="/produtos" className="px-6 py-3 bg-brand-500 text-white rounded-lg font-semibold hover:bg-brand-600 transition-colors">
                        Ver todos os produtos
                    </Link>
                </div>
            </AppLayout>
        );
    }

    const c = colorMap[produto.cor];

    return (
        <AppLayout
            title={produto.nome}
            description={produto.tagline}
        >
            {/* Hero */}
            <section className={`bg-gradient-to-br ${c.hero} text-white py-20`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <Link href="/produtos" className="inline-flex items-center gap-1 text-dark-300 hover:text-white text-sm mb-8 transition-colors">
                        ← Todos os produtos
                    </Link>
                    <div className="flex items-start gap-6">
                        <div className={`${c.iconBg} bg-opacity-20 border border-white/20 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                            {produtoIcons[produto.slug]}
                        </div>
                        <div>
                            <Badge color={produto.cor} className="mb-3">{produto.categoria}</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">{produto.nome}</h1>
                            <p className={`text-xl ${c.accent} font-medium`}>{produto.tagline}</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contato"
                            className="px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors text-center"
                        >
                            Solicitar demonstração
                        </Link>
                        <Link
                            href="/contato"
                            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors text-center"
                        >
                            Falar com vendas
                        </Link>
                    </div>
                </div>
            </section>

            {/* Descrição + Para quem é */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-dark-900 mb-4">Sobre o sistema</h2>
                        <p className="text-dark-600 text-lg leading-relaxed">{produto.descricao}</p>
                    </div>
                    <div className="bg-dark-50 rounded-2xl p-6 border border-dark-100">
                        <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wide mb-3">Para quem é</h3>
                        <p className="text-dark-700 leading-relaxed text-sm">{produto.paraQuem}</p>
                        <Link
                            href="/contato"
                            className="mt-6 block text-center px-4 py-2.5 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-colors"
                        >
                            Quero uma demonstração
                        </Link>
                    </div>
                </div>
            </section>

            {/* Funcionalidades */}
            <section className="py-16 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-dark-900 mb-10 text-center">Funcionalidades principais</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {produto.beneficios.map((b, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-dark-100">
                                <div className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-3 text-sm font-bold">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-dark-900 mb-2">{b.titulo}</h3>
                                <p className="text-dark-500 text-sm leading-relaxed">{b.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dark-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Pronto para usar o {produto.nome}?
                    </h2>
                    <p className="text-dark-300 mb-8">
                        Solicite uma demonstração gratuita e veja o sistema funcionando na prática.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors"
                    >
                        Solicitar demonstração gratuita
                    </Link>
                </div>
            </section>
        </AppLayout>
    );
}
