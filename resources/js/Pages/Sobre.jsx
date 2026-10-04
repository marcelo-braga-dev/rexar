import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos, getProduto } from '../data/produtos';
import { sobre } from '../data/sobre';

const cor = {
    blue:   { dot: 'bg-blue-500',   text: 'text-blue-600',   soft: 'bg-blue-50 border-blue-100',     ring: 'hover:border-blue-300' },
    green:  { dot: 'bg-green-500',  text: 'text-green-600',  soft: 'bg-green-50 border-green-100',   ring: 'hover:border-green-300' },
    orange: { dot: 'bg-orange-500', text: 'text-orange-600', soft: 'bg-orange-50 border-orange-100', ring: 'hover:border-orange-300' },
    yellow: { dot: 'bg-yellow-500', text: 'text-yellow-600', soft: 'bg-yellow-50 border-yellow-100', ring: 'hover:border-yellow-300' },
};

const Icon = ({ children, className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {children}
    </svg>
);

/* Um ícone por princípio, na mesma ordem de sobre.principios */
const PRINCIPIO_ICONS = [
    <Icon key="0"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></Icon>,
    <Icon key="1"><path d="M4 6h16M4 12h10M4 18h6" /></Icon>,
    <Icon key="2"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></Icon>,
    <Icon key="3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>,
];

/* Um ícone por compromisso, na mesma ordem de sobre.compromissos */
const COMPROMISSO_ICONS = [
    <Icon key="0" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></Icon>,
    <Icon key="1" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>,
    <Icon key="2" className="w-5 h-5"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon>,
    <Icon key="3" className="w-5 h-5"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></Icon>,
];

function SectionTitle({ badge, badgeColor = 'brand', title, subtitle, align = 'center' }) {
    return (
        <div className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            {badge && <Badge color={badgeColor} className="mb-4">{badge}</Badge>}
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-dark-500 leading-relaxed">{subtitle}</p>}
        </div>
    );
}

export default function Sobre() {
    return (
        <AppLayout
            title="Sobre a Rexar"
            description="A Rexar desenvolve software especializado para empresas de energia solar: CRM, orçamento e projetos, e-commerce e gestão de Geração Distribuída (GD)."
        >
            {/* Hero */}
            <section className="relative overflow-hidden bg-dark-900 text-white">
                <div className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-48 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
                    <div>
                        <Badge color="brand" className="mb-6">Sobre a Rexar</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] mb-6">
                            Tecnologia feita para o setor solar.{' '}
                            <span className="text-brand-400">Não adaptada para ele.</span>
                        </h1>
                        <p className="text-dark-300 text-lg leading-relaxed mb-8 max-w-xl">
                            A Rexar desenvolve sistemas de gestão para empresas de energia solar: da prospecção do cliente
                            à gestão da energia gerada. Software brasileiro, especializado e próximo de quem usa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/produtos" className="px-7 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors text-center shadow-lg shadow-brand-500/20">
                                Conheça os sistemas
                            </Link>
                            <Link href="/contato" className="px-7 py-4 border border-white/25 text-white font-semibold rounded-lg hover:border-white/60 transition-colors text-center">
                                Fale com a gente
                            </Link>
                        </div>
                    </div>

                    {/* Ecossistema em miniatura */}
                    <div className="grid grid-cols-2 gap-4">
                        {produtos.map((p, i) => (
                            <Link
                                key={p.slug}
                                href={`/produtos/${p.slug}`}
                                className={`group rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:bg-white/10 transition-colors ${i % 2 ? 'translate-y-6' : ''}`}
                            >
                                <span className={`block w-2.5 h-2.5 rounded-full ${cor[p.cor].dot} mb-4`} />
                                <p className="text-xs text-dark-400 mb-1">{p.categoria.split(' · ')[0]}</p>
                                <p className="font-bold text-white group-hover:text-brand-300 transition-colors">{p.nome}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fatos */}
            <section className="bg-white border-b border-dark-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sobre.fatos.map((f) => (
                        <div key={f.rotulo} className="text-center md:text-left">
                            <p className="text-3xl md:text-4xl font-black text-brand-500 mb-1">{f.valor}</p>
                            <p className="text-sm text-dark-500 leading-snug">{f.rotulo}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Por que existimos */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <Badge color="brand" className="mb-4">Por que existimos</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                            O setor solar cresceu. As ferramentas não acompanharam.
                        </h2>
                        <div className="space-y-4 text-dark-600 leading-relaxed text-lg">
                            <p>
                                Integradoras, distribuidoras e empresas de Geração Distribuída crescem em ritmo acelerado no Brasil.
                                Mesmo assim, a maioria ainda opera com planilhas, grupos de WhatsApp e sistemas genéricos
                                que não falam a língua do setor.
                            </p>
                            <p>
                                Um CRM comum não sabe montar um kit fotovoltaico. Um ERP genérico não sabe o que é uma unidade
                                consumidora ou um crédito de energia. A Rexar nasceu para preencher essa lacuna.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-dark-50 border border-dark-100 p-8">
                        <p className="text-sm font-semibold text-dark-400 uppercase tracking-wide mb-5">
                            O que nossos sistemas já entendem
                        </p>
                        <ul className="flex flex-wrap gap-2.5">
                            {sobre.vocabulario.map((termo) => (
                                <li key={termo} className="px-4 py-2 rounded-full bg-white border border-dark-200 text-dark-700 text-sm font-medium">
                                    {termo}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-dark-500 text-sm leading-relaxed">
                            Sem campos improvisados nem adaptações caras: o vocabulário do setor solar é a base de cada sistema.
                        </p>
                    </div>
                </div>
            </section>

            {/* Missão e visão */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white p-10">
                        <p className="text-brand-100 font-semibold text-sm uppercase tracking-wider mb-4">Missão</p>
                        <p className="text-2xl md:text-3xl font-bold leading-snug">
                            Dar às empresas de energia solar a tecnologia para crescer com organização, eficiência e controle.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-dark-900 text-white p-10">
                        <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-4">Visão</p>
                        <p className="text-2xl md:text-3xl font-bold leading-snug">
                            Ser o parceiro tecnológico das empresas do setor solar no Brasil.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ecossistema / jornada */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Nosso ecossistema"
                        title="Um sistema para cada etapa do negócio solar"
                        subtitle="Use o que a sua empresa precisa hoje. Cada sistema funciona sozinho e cobre uma parte da cadeia, da primeira venda à energia gerada."
                    />
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {sobre.jornada.map((j, i) => {
                            const p = getProduto(j.slug);
                            const c = cor[p.cor];
                            return (
                                <li key={j.slug} className="relative">
                                    <Link
                                        href={`/produtos/${p.slug}`}
                                        className={`group flex flex-col h-full rounded-2xl border p-6 transition-all hover:shadow-lg ${c.soft} ${c.ring}`}
                                    >
                                        <span className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-3`}>
                                            {String(i + 1).padStart(2, '0')} · {j.etapa}
                                        </span>
                                        <h3 className="text-xl font-bold text-dark-900 mb-2">{p.nome}</h3>
                                        <p className="text-dark-600 text-sm leading-relaxed flex-1">{p.tagline}</p>
                                        <span className={`mt-5 text-sm font-semibold ${c.text} group-hover:translate-x-1 transition-transform`}>
                                            Conhecer →
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* Princípios */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle badge="Como trabalhamos" badgeColor="dark" title="Os princípios que guiam cada sistema" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sobre.principios.map((pr, i) => (
                            <div key={pr.titulo} className="bg-white rounded-2xl p-7 border border-dark-100">
                                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5">
                                    {PRINCIPIO_ICONS[i]}
                                </div>
                                <h3 className="text-lg font-bold text-dark-900 mb-2">{pr.titulo}</h3>
                                <p className="text-dark-500 leading-relaxed text-sm">{pr.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compromissos */}
            <section className="py-20 bg-dark-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
                    <div>
                        <Badge color="brand" className="mb-4">Nosso compromisso</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5">Software que sustenta a sua operação</h2>
                        <p className="text-dark-300 text-lg leading-relaxed">
                            Sua empresa vai depender do sistema todos os dias: para vender, cobrar e atender. Por isso tratamos
                            confiabilidade e segurança como parte do produto, não como detalhe.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {sobre.compromissos.map((c, i) => (
                            <div key={c.titulo} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                                <span className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center mb-4">
                                    {COMPROMISSO_ICONS[i]}
                                </span>
                                <h3 className="font-bold mb-1.5">{c.titulo}</h3>
                                <p className="text-dark-300 text-sm leading-relaxed">{c.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar sobre a sua operação?</h2>
                    <p className="text-brand-100 text-lg mb-8">
                        Conte como sua empresa funciona hoje. Mostramos qual sistema faz sentido e como ele fica com a sua realidade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contato" className="px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors">
                            Falar com a equipe
                        </Link>
                        <Link href="/produtos" className="px-8 py-4 border border-white/40 text-white font-semibold rounded-lg hover:border-white transition-colors">
                            Ver todos os sistemas
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
