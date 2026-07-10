import { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos, getProduto } from '../data/produtos';

const colorMap = {
    blue:   { hero: 'from-blue-900 to-dark-900',   accent: 'text-blue-400',  badge: 'blue',   iconBg: 'bg-blue-500', solid: 'bg-blue-500',   text: 'text-blue-600',   tint: 'bg-blue-50',   soft: 'bg-blue-100 text-blue-700' },
    green:  { hero: 'from-green-900 to-dark-900',  accent: 'text-green-400', badge: 'green',  iconBg: 'bg-green-500', solid: 'bg-green-500',  text: 'text-green-600',  tint: 'bg-green-50',  soft: 'bg-green-100 text-green-700' },
    orange: { hero: 'from-orange-900 to-dark-900', accent: 'text-orange-400',badge: 'orange', iconBg: 'bg-orange-500', solid: 'bg-orange-500', text: 'text-orange-600', tint: 'bg-orange-50', soft: 'bg-orange-100 text-orange-700' },
    yellow: { hero: 'from-yellow-900 to-dark-900', accent: 'text-yellow-400',badge: 'yellow', iconBg: 'bg-yellow-500', solid: 'bg-yellow-500', text: 'text-yellow-600', tint: 'bg-yellow-50', soft: 'bg-yellow-100 text-yellow-700' },
};

/* Personalidade de cada produto: cada um usa uma composição diferente de seções e cards. */
const PRODUTO_STYLE = {
    'levelead-crm': {
        comparacao: 'linha',
        funcionalidades: 'grid',
        hero: 'stats',
        stats: ['92 permissões nomeadas', '4 perfis de acesso', '9 módulos integrados'],
    },
    'gd-solar-erp': {
        comparacao: 'timeline',
        funcionalidades: 'tiles',
        hero: 'stats',
        stats: ['9 automações diárias', '4 portais dedicados', 'Alerta anti-oversell de energia'],
    },
    'solar-shop': {
        comparacao: 'linha',
        funcionalidades: 'chips',
        hero: 'tags',
        tags: ['Simulador solar', 'Kit Builder', 'Portal B2B', 'White-label'],
    },
    'crm-solar': {
        comparacao: 'timeline',
        funcionalidades: 'checklist',
        hero: 'clean',
    },
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

const IconX = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const IconArrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);

function FaqItem({ pergunta, resposta }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-dark-100 rounded-xl overflow-hidden bg-white">
            <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold text-dark-900 text-sm sm:text-base">{pergunta}</span>
                <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`w-4 h-4 flex-shrink-0 text-dark-400 transition-transform ${open ? 'rotate-180' : ''}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {open && (
                <p className="px-5 pb-4 text-dark-500 text-sm leading-relaxed">{resposta}</p>
            )}
        </div>
    );
}

/* ── Variantes de "Antes / Depois" ── */

function ComparacaoLinha({ produto, c }) {
    return (
        <div className="space-y-3">
            {produto.dores.map((dor, i) => (
                <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-2xl border border-dark-100 bg-white overflow-hidden hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start gap-3 p-5 bg-dark-50">
                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center">
                            <IconX />
                        </span>
                        <p className="text-sm text-dark-500 leading-relaxed">{dor}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center px-2 bg-white">
                        <span className={c.text}><IconArrow /></span>
                    </div>
                    <div className={`flex items-start gap-3 p-5 ${c.tint}`}>
                        <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full ${c.solid} text-white flex items-center justify-center`}>
                            <IconCheck />
                        </span>
                        <p className="text-sm font-medium text-dark-800 leading-relaxed">{produto.resultados[i]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ComparacaoTimeline({ produto, c }) {
    return (
        <div className="max-w-2xl mx-auto space-y-0">
            {produto.dores.map((dor, i) => (
                <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                        <span className={`w-3.5 h-3.5 rounded-full ${c.solid} ring-4 ring-white shadow`} />
                        {i < produto.dores.length - 1 && <span className="flex-1 w-px bg-dark-200 my-1" />}
                    </div>
                    <div className="pb-8">
                        <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-1">Antes</p>
                        <p className="text-sm text-dark-500 line-through decoration-dark-300 mb-3">{dor}</p>
                        <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.text}`}>Com o {produto.nome}</p>
                        <p className="text-sm font-medium text-dark-800 leading-relaxed">{produto.resultados[i]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ── Variantes de "Funcionalidades" ── */

function FuncionalidadesGrid({ produto, c }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produto.beneficios.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-dark-100">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-sm font-bold ${c.soft}`}>
                        {i + 1}
                    </div>
                    <h3 className="font-bold text-dark-900 mb-2">{b.titulo}</h3>
                    <p className="text-dark-500 text-sm leading-relaxed">{b.descricao}</p>
                </div>
            ))}
        </div>
    );
}

function FuncionalidadesTiles({ produto, c }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {produto.beneficios.map((b, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-dark-100">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm ${c.soft}`}>
                        {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                        <h3 className="font-bold text-dark-900 mb-1.5">{b.titulo}</h3>
                        <p className="text-dark-500 text-sm leading-relaxed">{b.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function FuncionalidadesChips({ produto, c }) {
    return (
        <div>
            <p className="text-center text-xs text-dark-400 mb-4 sm:hidden">← arraste para ver mais →</p>
            <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
                {produto.beneficios.map((b, i) => (
                    <div key={i} className="snap-start flex-shrink-0 w-72 bg-white rounded-2xl p-6 border border-dark-100 shadow-sm">
                        <span className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 font-bold text-sm ${c.soft}`}>
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-bold text-dark-900 mb-2">{b.titulo}</h3>
                        <p className="text-dark-500 text-sm leading-relaxed">{b.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FuncionalidadesChecklist({ produto, c }) {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-dark-100 divide-y divide-dark-100 overflow-hidden">
            {produto.beneficios.map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5">
                    <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full ${c.solid} text-white flex items-center justify-center`}>
                        <IconCheck />
                    </span>
                    <div>
                        <h3 className="font-bold text-dark-900 mb-1">{b.titulo}</h3>
                        <p className="text-dark-500 text-sm leading-relaxed">{b.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const COMPARACAO_COMPONENTS = { linha: ComparacaoLinha, timeline: ComparacaoTimeline };
const FUNCIONALIDADES_COMPONENTS = { grid: FuncionalidadesGrid, tiles: FuncionalidadesTiles, chips: FuncionalidadesChips, checklist: FuncionalidadesChecklist };

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
    const style = PRODUTO_STYLE[produto.slug] ?? { comparacao: 'linha', funcionalidades: 'grid', hero: 'clean' };
    const Comparacao = COMPARACAO_COMPONENTS[style.comparacao];
    const Funcionalidades = FUNCIONALIDADES_COMPONENTS[style.funcionalidades];
    const outrosProdutos = produtos.filter((p) => p.slug !== produto.slug);
    const whatsappHref = `https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Quero saber mais sobre o ${produto.nome}.`)}`;

    return (
        <AppLayout
            title={`${produto.nome} — ${produto.categoria}`}
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
                            <p className={`text-xl ${c.accent} font-medium max-w-2xl`}>{produto.tagline}</p>
                        </div>
                    </div>

                    {style.hero === 'stats' && (
                        <div className="mt-8 flex flex-wrap gap-3">
                            {style.stats.map((s, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90 backdrop-blur-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    )}
                    {style.hero === 'tags' && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {style.tags.map((t, i) => (
                                <span key={i} className={`px-3 py-1.5 rounded-lg ${c.iconBg} bg-opacity-20 border border-white/20 text-xs font-semibold text-white/90`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contato"
                            className="px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors text-center"
                        >
                            Solicitar demonstração gratuita
                        </Link>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors text-center"
                        >
                            Falar agora no WhatsApp
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-dark-300">
                        Sem custo. Sem compromisso. Resposta em até 1 dia útil.
                    </p>
                </div>
            </section>

            {/* Antes / Depois */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <Badge color={produto.cor} className="mb-4">O que muda na prática</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
                            Do jeito antigo para o {produto.nome}
                        </h2>
                    </div>
                    <Comparacao produto={produto} c={c} />
                </div>
            </section>

            {/* Como funciona */}
            <section className="py-16 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <Badge color="dark" className="mb-4">Passo a passo</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark-900">Como funciona</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produto.comoFunciona.map((etapa, i) => (
                            <div key={i} className="relative bg-white rounded-2xl p-6 border border-dark-100">
                                <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${c.solid} text-white text-sm font-bold mb-4`}>
                                    {i + 1}
                                </span>
                                <h3 className="font-bold text-dark-900 mb-2">{etapa.titulo}</h3>
                                <p className="text-dark-500 text-sm leading-relaxed">{etapa.descricao}</p>
                                {i < produto.comoFunciona.length - 1 && (
                                    <span className="hidden lg:block absolute -right-4 top-9 text-dark-300 text-xl">→</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Descrição + Para quem é */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-dark-900 mb-4">Sobre o sistema</h2>
                        <p className="text-dark-600 text-lg leading-relaxed mb-8">{produto.descricao}</p>

                        <h3 className="text-sm font-semibold text-dark-400 uppercase tracking-wide mb-4">Por que escolher o {produto.nome}</h3>
                        <ul className="space-y-3">
                            {produto.diferenciais.map((d, i) => (
                                <li key={i} className="flex items-start gap-3 text-dark-700 text-sm leading-relaxed">
                                    <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${c.solid}`} />
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-dark-50 rounded-2xl p-6 border border-dark-100 h-fit">
                        <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wide mb-3">Para quem é</h3>
                        <p className="text-dark-700 leading-relaxed text-sm">{produto.paraQuem}</p>
                        <Link
                            href="/contato"
                            className="mt-6 block text-center px-4 py-2.5 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-colors"
                        >
                            Quero uma demonstração
                        </Link>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-center px-4 py-2.5 border border-dark-200 text-dark-700 text-sm font-semibold rounded-lg hover:border-brand-500 hover:text-brand-500 transition-colors"
                        >
                            Tirar dúvidas no WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Funcionalidades */}
            <section className="py-16 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-dark-900 mb-10 text-center">Funcionalidades principais</h2>
                    <Funcionalidades produto={produto} c={c} />
                </div>
            </section>

            {/* Personas */}
            {produto.personas && (
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge color={produto.cor} className="mb-4">Feito por papel</Badge>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">O que cada pessoa da sua equipe ganha</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {produto.personas.map((p, i) => (
                                <div key={i} className="bg-dark-50 border border-dark-100 rounded-xl p-6">
                                    <h3 className={`font-bold mb-2 ${c.text}`}>{p.persona}</h3>
                                    <p className="text-dark-600 text-sm leading-relaxed">{p.entrega}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Planos */}
            {produto.planos && (
                <section className="py-16 bg-dark-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <Badge color="dark" className="mb-4">Planos sugeridos</Badge>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">Um plano para cada estágio da sua operação</h2>
                            <p className="text-dark-500 mt-3 max-w-xl mx-auto">Fale com o time para uma proposta sob medida — sem tabela fechada, sem surpresa.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {produto.planos.map((plano, i) => (
                                <div key={i} className="bg-white border border-dark-100 rounded-2xl p-6 flex flex-col">
                                    <h3 className="text-lg font-bold text-dark-900 mb-1">{plano.nome}</h3>
                                    <p className="text-xs text-dark-400 uppercase tracking-wide mb-4">{plano.publico}</p>
                                    <p className="text-dark-600 text-sm leading-relaxed mb-6 flex-1">{plano.inclui}</p>
                                    <Link
                                        href="/contato"
                                        className={`text-center px-4 py-2.5 ${c.solid} text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity`}
                                    >
                                        Falar com o time
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-dark-900 mb-10 text-center">Perguntas frequentes</h2>
                    <div className="space-y-3">
                        {produto.faq.map((f, i) => (
                            <FaqItem key={i} {...f} />
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
                        Solicite uma demonstração gratuita e veja o sistema funcionando na prática, com a sua realidade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contato"
                            className="inline-block px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors"
                        >
                            Solicitar demonstração gratuita
                        </Link>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Cross-sell */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-dark-900 mb-2">Conheça também</h2>
                        <p className="text-dark-500">Outros sistemas do ecossistema Rexar que podem completar sua operação.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {outrosProdutos.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/produtos/${p.slug}`}
                                className="bg-dark-50 border border-dark-100 rounded-xl p-6 hover:border-brand-200 hover:bg-brand-50 transition-all group"
                            >
                                <Badge color={p.cor} className="mb-3 text-xs">{p.categoria.split(' · ')[0]}</Badge>
                                <h3 className="font-bold text-dark-900 mb-2 group-hover:text-brand-600 transition-colors">{p.nome}</h3>
                                <p className="text-dark-500 text-sm leading-relaxed">{p.tagline}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
