import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../Layout/AppLayout';
import Badge from '../UI/Badge';
import FaqItem from '../UI/FaqItem';
import OutrosProdutos from './OutrosProdutos';
import GaleriaTelas from './GaleriaTelas';
import { telas as telasGaleria, AREAS } from '../../data/gdSolarErpTelas';

/*
 * Página de vendas do GD Solar ERP.
 * Todo o conteúdo vem de data/produtos.js — aqui fica só a composição visual.
 * Fala com o empresário: resultado no negócio primeiro, funcionalidade depois.
 */


const Icon = ({ children, className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {children}
    </svg>
);

/* Um ícone por ganho, na mesma ordem de produto.beneficios */
const GANHO_ICONS = [
    <Icon key="0"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /><line x1="2" y1="2" x2="22" y2="22" /></Icon>,
    <Icon key="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>,
    <Icon key="2"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 12h.01M18 12h.01" /></Icon>,
    <Icon key="3"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon>,
    <Icon key="4"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z" /></Icon>,
    <Icon key="5"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></Icon>,
];

/* Um ícone por etapa, na mesma ordem de produto.faturasAutomaticas.etapas */
const FATURA_ICONS = [
    <Icon key="0" className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Icon>,
    <Icon key="1" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>,
    <Icon key="2" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></Icon>,
    <Icon key="3" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Icon>,
];

const IconCheck = ({ className = 'w-3.5 h-3.5' }) => (
    <Icon className={className}><polyline points="20 6 9 17 4 12" /></Icon>
);
const IconX = () => (
    <Icon className="w-3.5 h-3.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>
);
const IconBell = () => (
    <Icon className="w-5 h-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></Icon>
);

function SectionTitle({ badge, badgeColor = 'green', title, subtitle, light = false }) {
    return (
        <div className="text-center mb-12 max-w-2xl mx-auto">
            {badge && <Badge color={badgeColor} className="mb-4">{badge}</Badge>}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-900'}`}>{title}</h2>
            {subtitle && <p className={`text-lg ${light ? 'text-green-100/80' : 'text-dark-500'}`}>{subtitle}</p>}
        </div>
    );
}

function Ctas({ demoHref, whatsappHref, center = false, dark = true }) {
    return (
        <div className={`flex flex-col sm:flex-row gap-4 ${center ? 'justify-center' : ''}`}>
            <Link
                href={demoHref}
                className="px-7 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors text-center whitespace-nowrap shadow-lg shadow-brand-500/20"
            >
                Agendar uma demonstração
            </Link>
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-4 font-semibold rounded-lg transition-colors text-center whitespace-nowrap border ${
                    dark ? 'border-white/30 text-white hover:border-white/60' : 'border-dark-200 text-dark-700 hover:border-green-600 hover:text-green-700'
                }`}
            >
                Falar agora no WhatsApp
            </a>
        </div>
    );
}

/* Moldura de navegador para telas reais da plataforma (imagens 1600×~867). */
function BrowserFrame({ src, alt, eager = false, className = '' }) {
    return (
        <div className={`rounded-xl sm:rounded-2xl bg-white shadow-2xl shadow-dark-900/20 ring-1 ring-dark-900/10 overflow-hidden ${className}`}>
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-dark-100 border-b border-dark-200" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <img
                src={src}
                alt={alt}
                width="1600"
                height="867"
                loading={eager ? 'eager' : 'lazy'}
                fetchPriority={eager ? 'high' : 'auto'}
                className="block w-full h-auto"
            />
        </div>
    );
}

/* Moldura de celular (imagens 600×1154). */
function PhoneFrame({ src, alt, className = '' }) {
    return (
        <div className={`rounded-[1.75rem] bg-dark-900 p-1.5 shadow-2xl shadow-dark-900/30 ${className}`}>
            <img src={src} alt={alt} width="600" height="1154" loading="lazy" className="block w-full h-auto rounded-[1.4rem]" />
        </div>
    );
}

/* Seção "Veja por dentro": abas com a tela de cada funcionalidade. */
function Galeria({ itens }) {
    const [ativo, setAtivo] = useState(0);
    const item = itens[ativo];
    return (
        <div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center" role="tablist">
                {itens.map((it, i) => (
                    <button
                        key={it.aba}
                        role="tab"
                        aria-selected={i === ativo}
                        onClick={() => setAtivo(i)}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            i === ativo ? 'bg-dark-900 text-white' : 'bg-white text-dark-600 border border-dark-200 hover:border-green-500'
                        }`}
                    >
                        {it.aba}
                    </button>
                ))}
            </div>
            <div className="mt-8 grid lg:grid-cols-[1fr_2.2fr] gap-8 lg:gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{item.titulo}</h3>
                    <p className="text-dark-500 text-lg leading-relaxed">{item.descricao}</p>
                </div>
                {item.celulares ? (
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto w-full">
                        {item.celulares.map((c) => <PhoneFrame key={c.src} {...c} />)}
                    </div>
                ) : (
                    <BrowserFrame key={item.imagem} src={item.imagem} alt={item.alt} />
                )}
            </div>
        </div>
    );
}

function Portais({ portais }) {
    const [ativo, setAtivo] = useState(0);
    const p = portais[ativo];
    return (
        <div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center" role="tablist">
                {portais.map((item, i) => (
                    <button
                        key={item.perfil}
                        role="tab"
                        aria-selected={i === ativo}
                        onClick={() => setAtivo(i)}
                        className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                            i === ativo ? 'bg-green-600 text-white shadow' : 'bg-white text-dark-600 border border-dark-200 hover:border-green-500'
                        }`}
                    >
                        {item.perfil}
                    </button>
                ))}
            </div>
            <div className="mt-8 grid lg:grid-cols-[1fr_1.7fr] gap-8 items-center">
                <div className="bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-br from-green-700 to-green-900 text-white p-7">
                        <p className="text-green-200 text-sm font-medium mb-1">{p.quem}</p>
                        <h3 className="text-2xl font-bold mb-4">{p.perfil}</h3>
                        <p className="text-lg leading-snug font-medium">“{p.ganho}”</p>
                    </div>
                    <ul className="p-7 space-y-3.5">
                        {p.itens.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-dark-700 text-sm">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                    <IconCheck className="w-3 h-3" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <BrowserFrame key={p.imagem.src} {...p.imagem} />
                    {p.celular && (
                        <PhoneFrame {...p.celular} className="hidden sm:block absolute -bottom-8 -right-3 w-32 lg:w-36" />
                    )}
                </div>
            </div>
        </div>
    );
}

/* Barra de conversão no celular: aparece depois que o hero sai da tela. */
function CtaFixoMobile({ demoHref }) {
    const [visivel, setVisivel] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 700);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <>
            <div className="h-20 md:hidden" aria-hidden="true" />
            <div
                className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-dark-100 transition-transform duration-300 ${
                    visivel ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <Link href={demoHref} className="block w-full text-center px-6 py-3.5 bg-brand-500 text-white font-bold rounded-lg">
                    Agendar uma demonstração
                </Link>
            </div>
        </>
    );
}

export default function GdSolarErpLanding({ produto }) {
    const demoHref = `/contato?produto=${produto.slug}`;
    const whatsappHref = `https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Quero conhecer o ${produto.nome} para a minha empresa.`)}`;
    const notas = produto.modulos.filter((m) => m.nota);

    return (
        <AppLayout title={`${produto.nome} — Sistema de gestão para Geração Distribuída (GD)`} description={produto.tagline}>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-950 to-dark-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14">
                    <Link href="/produtos" className="inline-flex items-center gap-1 text-green-200/70 hover:text-white text-sm transition-colors">
                        ← Todos os produtos
                    </Link>
                    <div className="max-w-3xl mx-auto text-center mt-6 md:mt-8">
                        {/* O h1 leva a palavra-chave (Geração Distribuída) e o slogan juntos */}
                        <h1 className="mb-6">
                            <span className="block text-green-300 font-semibold text-sm uppercase tracking-wider mb-4">
                                {produto.nome} · Sistema de gestão para Geração Distribuída (GD)
                            </span>
                            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                                A geração é distribuída.<br /><span className="text-green-300">A gestão, centralizada.</span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-green-50/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                            As faturas da concessionária entram e são lidas sozinhas, todo mês. Usinas, clientes, cobrança
                            e pagamento da sua operação de GD em uma só plataforma — e sua equipe atende mais clientes.
                        </p>
                        <Ctas demoHref={demoHref} whatsappHref={whatsappHref} center />
                        <p className="mt-5 text-sm text-green-100/60">Demonstração gratuita, sem compromisso. Resposta em até 1 dia útil.</p>
                    </div>

                    {/* Tela real da plataforma + celular do cliente */}
                    <div className="relative mt-14 md:mt-16 mb-14 md:mb-16 max-w-5xl mx-auto">
                        <div className="absolute inset-x-10 -top-10 bottom-0 bg-green-400/20 blur-3xl rounded-full" aria-hidden="true" />
                        <BrowserFrame {...produto.telas.hero} eager className="relative" />
                        <PhoneFrame {...produto.telas.heroCelular} className="absolute -bottom-10 -right-2 sm:-right-6 w-24 sm:w-36 md:w-44" />
                    </div>
                </div>

                <div className="border-t border-white/10 bg-black/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">Feito para</span>
                        {produto.segmentos.map((seg) => (
                            <span key={seg} className="inline-flex items-center gap-2 text-sm text-white/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                {seg}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Antes / Depois */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Antes e depois"
                        title="O que muda na rotina da sua operação de GD"
                        subtitle="As mesmas tarefas de todo mês, sem planilha e sem trabalho manual."
                    />
                    <div className="rounded-2xl border border-dark-100 overflow-hidden">
                        <div className="hidden md:grid grid-cols-[200px_1fr_1fr] bg-dark-900 text-white text-sm font-semibold">
                            <span className="px-6 py-4">Tarefa</span>
                            <span className="px-6 py-4 text-dark-300">Sem sistema</span>
                            <span className="px-6 py-4 text-green-300">Com o {produto.nome}</span>
                        </div>
                        {produto.temas.map((tema, i) => (
                            <div key={tema} className="grid md:grid-cols-[200px_1fr_1fr] border-t border-dark-100 first:border-t-0 md:first:border-t">
                                <p className="px-6 pt-5 md:py-5 font-bold text-dark-900">{tema}</p>
                                <p className="flex items-start gap-3 px-6 py-3 md:py-5 text-dark-500 md:bg-dark-50">
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center flex-shrink-0"><IconX /></span>
                                    {produto.dores[i]}
                                </p>
                                <p className="flex items-start gap-3 px-6 pb-5 pt-1 md:py-5 font-medium text-dark-900 md:bg-green-50">
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0"><IconCheck /></span>
                                    {produto.resultados[i]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faturas no automático — principal diferencial operacional */}
            <section className="py-20 bg-gradient-to-b from-green-50 to-white border-y border-green-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge color="green" className="mb-4">Faturas no automático</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-5">
                            As faturas da concessionária entram sozinhas, todo mês
                        </h2>
                        <p className="text-lg text-dark-600 leading-relaxed mb-8">
                            A plataforma se integra ao e-mail que recebe as contas de luz e dá entrada nas faturas
                            da sua operação automaticamente, mês após mês. Ninguém precisa baixar, subir ou digitar nada: o sistema importa,
                            lê os dados e deixa tudo pronto para virar cobrança.
                        </p>
                        <ul className="grid grid-cols-2 gap-3 mb-8">
                            {produto.faturasAutomaticas.destaques.map((d) => (
                                <li key={d} className="flex items-center gap-2.5 bg-white rounded-xl border border-green-100 px-4 py-3 font-semibold text-dark-800 text-sm">
                                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0"><IconCheck className="w-3 h-3" /></span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                        <Link href={demoHref} className="inline-block px-7 py-3.5 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20">
                            Ver a entrada automática funcionando
                        </Link>
                    </div>
                    <ol className="relative bg-white rounded-2xl border border-dark-100 shadow-xl shadow-green-900/5 p-6 sm:p-8">
                        {produto.faturasAutomaticas.etapas.map((etapa, i) => (
                            <li key={etapa.titulo} className="relative flex gap-4 pb-7 last:pb-0">
                                {i < produto.faturasAutomaticas.etapas.length - 1 && (
                                    <span className="absolute left-5 top-11 bottom-1 w-px bg-green-200" aria-hidden="true" />
                                )}
                                <span className="relative w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                                    {FATURA_ICONS[i]}
                                </span>
                                <div>
                                    <h3 className="font-bold text-dark-900 mb-1">{etapa.titulo}</h3>
                                    <p className="text-dark-500 text-sm leading-relaxed">{etapa.descricao}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 grid md:grid-cols-2 gap-8">
                    <figure>
                        <BrowserFrame {...produto.telas.importacao} />
                        <figcaption className="mt-4 text-sm text-dark-500">
                            <strong className="text-dark-800">Importação automática:</strong> cada busca de faturas fica registrada, com o que foi importado.
                        </figcaption>
                    </figure>
                    <figure>
                        <BrowserFrame {...produto.telas.faturaLida} />
                        <figcaption className="mt-4 text-sm text-dark-500">
                            <strong className="text-dark-800">Fatura lida:</strong> os campos são extraídos do PDF e a equipe só confere e aprova.
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* Como funciona */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Como funciona"
                        title="Como fica o mês da sua empresa de GD"
                        subtitle="Da usina à conta de luz do cliente: quatro etapas que se repetem todo mês, com o sistema fazendo a parte repetitiva."
                    />
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produto.comoFunciona.map((etapa, i) => (
                            <li key={etapa.titulo} className="relative bg-white rounded-2xl border border-dark-100 p-6">
                                <span className="mb-4 w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                                {i < produto.comoFunciona.length - 1 && (
                                    <span className="hidden lg:flex absolute -right-5 top-8 z-10 w-7 h-7 rounded-full bg-white border border-dark-100 text-green-600 items-center justify-center text-sm" aria-hidden="true">→</span>
                                )}
                                <h3 className="text-lg font-bold text-dark-900 mb-2">{etapa.titulo}</h3>
                                <p className="text-dark-500 leading-relaxed">{etapa.descricao}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Ganhos */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Resultados"
                        title="Menos trabalho manual. Mais clientes. Caixa em dia."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {produto.beneficios.map((b, i) => (
                            <div key={b.titulo} className="bg-dark-50 rounded-2xl p-7 border border-dark-100 hover:border-green-300 hover:bg-white hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
                                    {GANHO_ICONS[i]}
                                </div>
                                <h3 className="text-lg font-bold text-dark-900 mb-2">{b.titulo}</h3>
                                <p className="text-dark-500 leading-relaxed">{b.descricao}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href={demoHref} className="inline-block px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20">
                            Quero ver isso na minha empresa
                        </Link>
                        <p className="mt-3 text-sm text-dark-400">Demonstração gratuita, com o cenário da sua empresa.</p>
                    </div>
                </div>
            </section>

            {/* Veja por dentro: telas reais por funcionalidade */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Veja por dentro"
                        title="A plataforma de GD que sua equipe vai usar"
                        subtitle="Telas reais do sistema, com dados de demonstração. Escolha uma funcionalidade."
                    />
                    <Galeria itens={produto.galeria} />
                </div>
            </section>

            {/* Galeria completa com rolagem */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Explore a plataforma"
                        title={`${telasGaleria.length} telas do GD Solar ERP`}
                        subtitle="Da gestão das usinas ao celular do cliente. Filtre por área, role para o lado e clique para ampliar."
                    />
                    <GaleriaTelas telas={telasGaleria} areas={AREAS} />
                    <div className="mt-12 text-center">
                        <Link href={demoHref} className="inline-block px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20">
                            Quero ver ao vivo, com a minha operação
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trabalha sozinho + alertas */}
            <section className="py-20 bg-gradient-to-br from-dark-900 to-green-950 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        light
                        badge="Automático"
                        title="O sistema trabalha enquanto sua equipe atende"
                        subtitle="Tarefas que hoje dependem de alguém lembrar acontecem sozinhas, todos os dias."
                    />
                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
                        <ul className="space-y-3">
                            {produto.automacoes.map((a) => (
                                <li key={a.gatilho} className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="font-bold text-green-300">{a.gatilho}</p>
                                    <p className="text-white/80">{a.resposta}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white text-dark-900 rounded-2xl p-7 h-fit">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><IconBell /></span>
                                <h3 className="text-lg font-bold">Você fica sabendo antes do cliente reclamar</h3>
                            </div>
                            <p className="text-dark-500 text-sm mb-5">O sistema confere a operação o tempo todo e avisa a pessoa certa quando:</p>
                            <ul className="space-y-3">
                                {produto.alertas.map((a) => (
                                    <li key={a} className="flex items-start gap-3 text-sm text-dark-700">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portais */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Um acesso para cada pessoa"
                        title="Toda a cadeia da GD na mesma plataforma"
                        subtitle="Quem gera, quem consome e quem vende: você, seus consultores, seus clientes e os donos das usinas, cada um vendo só o que é seu, com a sua marca."
                    />
                    <Portais portais={produto.portais} />
                </div>
            </section>

            {/* Tudo incluso */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Tudo incluso"
                        title="Gestão completa de Geração Distribuída"
                        subtitle="Da venda ao recebimento, sem precisar contratar outra ferramenta para cada etapa."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {produto.modulos.map((m) => (
                            <div key={m.titulo} className="rounded-xl border border-dark-100 p-5 bg-dark-50/50">
                                <h3 className="font-bold text-dark-900 mb-1.5 text-sm">
                                    {m.titulo}{m.nota && <span className="text-green-600">*</span>}
                                </h3>
                                <p className="text-dark-500 text-sm leading-relaxed">{m.descricao}</p>
                            </div>
                        ))}
                    </div>
                    {notas.map((m) => (
                        <p key={m.titulo} className="mt-4 text-xs text-dark-400">* {m.nota}</p>
                    ))}
                </div>
            </section>

            {/* Para quem + segurança */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl border border-dark-100 p-8">
                        <Badge color="green" className="mb-4">Por que o {produto.nome}</Badge>
                        <h3 className="text-2xl font-bold text-dark-900 mb-3">Feito para Geração Distribuída</h3>
                        <p className="text-dark-500 leading-relaxed mb-6">{produto.paraQuem}</p>
                        <ul className="space-y-4">
                            {produto.diferenciais.map((d) => (
                                <li key={d} className="flex items-start gap-3 text-dark-700">
                                    <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0"><IconCheck /></span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-100 p-8">
                        <Badge color="dark" className="mb-4">Segurança</Badge>
                        <h3 className="text-2xl font-bold text-dark-900 mb-6">Dados de clientes e dinheiro exigem cuidado</h3>
                        <ul className="space-y-4">
                            {produto.seguranca.map((s) => (
                                <li key={s} className="flex items-start gap-3 text-dark-700">
                                    <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0"><IconCheck /></span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Como começar */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <SectionTitle badge="Como começar" title="Três passos até sua equipe parar de digitar" />
                    <ol className="grid md:grid-cols-3 gap-6 mb-12">
                        {produto.contratacao.map((passo, i) => (
                            <li key={passo.titulo} className="rounded-2xl border border-dark-100 p-7 text-center">
                                <span className="inline-flex w-12 h-12 rounded-full bg-green-100 text-green-700 text-lg font-extrabold items-center justify-center mb-4">{i + 1}</span>
                                <h3 className="text-lg font-bold text-dark-900 mb-2">{passo.titulo}</h3>
                                <p className="text-dark-500 leading-relaxed">{passo.descricao}</p>
                            </li>
                        ))}
                    </ol>
                    <Ctas demoHref={demoHref} whatsappHref={whatsappHref} center dark={false} />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <SectionTitle badge="Dúvidas" badgeColor="dark" title="Perguntas frequentes" />
                    <div className="space-y-3">
                        {produto.faq.map((f) => (
                            <FaqItem key={f.pergunta} {...f} />
                        ))}
                    </div>
                    <p className="mt-8 text-center text-dark-500">
                        Ficou alguma dúvida?{' '}
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-green-700 hover:text-green-800 underline underline-offset-4">
                            Fale com a gente no WhatsApp
                        </a>
                    </p>
                </div>
            </section>

            {/* CTA final */}
            <section className="py-20 bg-gradient-to-br from-green-800 to-green-950 text-white text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja sua operação de GD rodando sem planilha</h2>
                    <p className="text-green-100/80 text-lg mb-8">
                        Em uma demonstração, mostramos o ciclo completo — da conta de luz ao Pix — com o desenho da sua empresa.
                    </p>
                    <Ctas demoHref={demoHref} whatsappHref={whatsappHref} center />
                    <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-green-100/80">
                        {['Demonstração gratuita', 'Sem compromisso', 'Resposta em até 1 dia útil'].map((t) => (
                            <li key={t} className="inline-flex items-center gap-2"><IconCheck className="w-4 h-4 text-green-300" />{t}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <OutrosProdutos slugAtual={produto.slug} />
            <CtaFixoMobile demoHref={demoHref} />
        </AppLayout>
    );
}
