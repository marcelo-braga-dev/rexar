import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../Layout/AppLayout';
import Badge from '../UI/Badge';
import FaqItem from '../UI/FaqItem';
import OutrosProdutos from './OutrosProdutos';

/*
 * Página de vendas do GD Solar ERP.
 * Todo o conteúdo vem de data/produtos.js — aqui fica só a composição visual.
 * Fala com o empresário: resultado no negócio primeiro, funcionalidade depois.
 */

const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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

/* Cartão do hero: mostra, com números ilustrativos, a conta de luz virando cobrança paga. */
function CobrancaMock({ exemplo }) {
    const desconto = (exemplo.energiaCompensada * exemplo.descontoPercentual) / 100;
    const total = exemplo.energiaCompensada - desconto;
    return (
        <div className="relative">
            <div className="absolute -inset-4 bg-green-400/20 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative bg-white text-dark-900 rounded-2xl shadow-2xl p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide">Cobrança do cliente</p>
                        <p className="font-bold">Referência {exemplo.competencia}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                        <IconCheck className="w-3 h-3" /> Pago
                    </span>
                </div>

                <dl className="space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                        <dt className="text-dark-500">Energia da conta de luz</dt>
                        <dd className="font-medium">{brl(exemplo.energiaCompensada)}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                        <dt className="text-dark-500">Desconto do contrato ({exemplo.descontoPercentual}%)</dt>
                        <dd className="font-medium text-green-600">− {brl(desconto)}</dd>
                    </div>
                    <div className="flex justify-between gap-4 pt-3 border-t border-dark-100">
                        <dt className="font-semibold">Valor da cobrança</dt>
                        <dd className="text-2xl font-extrabold">{brl(total)}</dd>
                    </div>
                </dl>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-semibold">
                    <span className="text-center py-2 rounded-lg bg-dark-50 border border-dark-100">Pix copia e cola</span>
                    <span className="text-center py-2 rounded-lg bg-dark-50 border border-dark-100">Boleto com sua marca</span>
                </div>

                <ul className="mt-5 space-y-2 text-xs text-dark-500">
                    {['Conta de luz lida automaticamente', 'Desconto aplicado sem digitação', 'Pagamento reconhecido sozinho'].map((t) => (
                        <li key={t} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                                <IconCheck className="w-2.5 h-2.5" />
                            </span>
                            {t}
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-[11px] text-dark-400">Exemplo ilustrativo, valores fictícios.</p>
            </div>
        </div>
    );
}

function Portais({ portais }) {
    const [ativo, setAtivo] = useState(0);
    const p = portais[ativo];
    return (
        <div className="max-w-4xl mx-auto">
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
            <div className="mt-6 bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden grid md:grid-cols-[1fr_1.4fr]">
                <div className="bg-gradient-to-br from-green-700 to-green-900 text-white p-8 flex flex-col justify-between gap-6">
                    <div>
                        <p className="text-green-200 text-sm font-medium mb-1">{p.quem}</p>
                        <h3 className="text-2xl font-bold">{p.perfil}</h3>
                    </div>
                    <p className="text-lg leading-snug font-medium">“{p.ganho}”</p>
                </div>
                <ul className="p-8 space-y-4">
                    {p.itens.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-dark-700">
                            <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                <IconCheck />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
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
        <AppLayout title={`${produto.nome} — Sistema de gestão para energia solar por assinatura`} description={produto.tagline}>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-950 to-dark-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
                    <div>
                        <Link href="/produtos" className="inline-flex items-center gap-1 text-green-200/70 hover:text-white text-sm mb-6 transition-colors">
                            ← Todos os produtos
                        </Link>
                        <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-4">
                            {produto.nome} · para empresas de energia solar por assinatura
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] mb-6">
                            A energia é solar.<br /><span className="text-green-300">A gestão, automática.</span>
                        </h1>
                        <p className="text-lg text-green-50/80 leading-relaxed mb-8 max-w-xl">
                            Sua equipe para de digitar conta de luz, calcular desconto e conferir extrato.
                            O sistema faz isso sozinho, e você atende mais clientes com a mesma equipe.
                        </p>
                        <Ctas demoHref={demoHref} whatsappHref={whatsappHref} />
                        <p className="mt-5 text-sm text-green-100/60">Demonstração gratuita, sem compromisso. Resposta em até 1 dia útil.</p>
                    </div>
                    <CobrancaMock exemplo={produto.exemploCobranca} />
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
                        title="O que muda na rotina da sua empresa"
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

            {/* Como funciona */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Como funciona"
                        title="Como fica o mês da sua empresa"
                        subtitle="Quatro etapas que se repetem todo mês, com o sistema fazendo a parte repetitiva."
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
                        title="Todo mundo na mesma plataforma, cada um vendo só o que é seu"
                        subtitle="Você, seus consultores, seus clientes e os donos das usinas, com a sua marca."
                    />
                    <Portais portais={produto.portais} />
                </div>
            </section>

            {/* Tudo incluso */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionTitle
                        badge="Tudo incluso"
                        title="O que vem no sistema"
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
                        <h3 className="text-2xl font-bold text-dark-900 mb-3">Feito para o seu tipo de negócio</h3>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja sua operação rodando sem planilha</h2>
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
