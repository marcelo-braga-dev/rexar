import { Link } from '@inertiajs/react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos } from '../data/produtos';

const valores = [
    { titulo: 'Especialização', descricao: 'Somos 100% focados no setor de energia solar. Nossos sistemas são pensados para os desafios reais de quem trabalha com fotovoltaico.' },
    { titulo: 'Simplicidade', descricao: 'Sistemas poderosos não precisam ser complexos. Cada produto foi desenhado para ser usado no dia a dia sem curva de aprendizado longa.' },
    { titulo: 'Resultado', descricao: 'Construímos software com foco em impacto de negócio — mais vendas, menos inadimplência, operações mais ágeis.' },
];

export default function Sobre() {
    return (
        <AppLayout
            title="Sobre a Rexar"
            description="Conheça a Rexar, empresa especializada em software para o setor de energia solar fotovoltaica."
        >
            {/* Hero */}
            <section className="bg-dark-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <Badge color="brand" className="mb-4">Sobre nós</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
                        Software criado por quem entende o setor solar
                    </h1>
                    <p className="text-dark-300 text-lg max-w-2xl leading-relaxed">
                        A Rexar nasceu da observação de um problema claro: empresas de energia solar usavam ferramentas genéricas que não atendiam as particularidades do setor. Criamos sistemas que resolvem problemas reais do dia a dia de integradoras, distribuidoras e gestores de geração distribuída.
                    </p>
                </div>
            </section>

            {/* Missão */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <div>
                        <Badge color="brand" className="mb-4">Nossa missão</Badge>
                        <h2 className="text-3xl font-bold text-dark-900 mb-6">
                            Digitalizar e escalar negócios de energia solar
                        </h2>
                        <p className="text-dark-600 leading-relaxed mb-4">
                            O setor fotovoltaico cresce em ritmo acelerado no Brasil. Mas a maioria das empresas ainda opera com planilhas, sistemas genéricos ou processos manuais que travam o crescimento.
                        </p>
                        <p className="text-dark-600 leading-relaxed">
                            Nossa missão é fornecer as ferramentas que esse setor precisa para crescer com organização, eficiência e controle — de ponta a ponta do negócio.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { num: '4', label: 'Sistemas especializados' },
                            { num: '100%', label: 'Foco em energia solar' },
                            { num: 'B2B', label: 'Voltado para empresas' },
                            { num: 'BR', label: 'Feito para o mercado brasileiro' },
                        ].map((item, i) => (
                            <div key={i} className="bg-dark-50 rounded-xl p-6 text-center">
                                <div className="text-3xl font-black text-brand-500 mb-1">{item.num}</div>
                                <div className="text-xs text-dark-500 leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 bg-dark-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <Badge color="dark" className="mb-4">Nossos valores</Badge>
                        <h2 className="text-3xl font-bold text-dark-900">O que nos guia</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {valores.map((v, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-dark-100">
                                <div className="text-4xl font-black text-brand-100 mb-4">{String(i + 1).padStart(2, '0')}</div>
                                <h3 className="text-xl font-bold text-dark-900 mb-3">{v.titulo}</h3>
                                <p className="text-dark-600 leading-relaxed text-sm">{v.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Produtos resumo */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-dark-900 mb-4">Nosso ecossistema</h2>
                        <p className="text-dark-500 max-w-xl mx-auto">
                            Quatro sistemas que cobrem cada etapa do negócio de energia solar.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {produtos.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/produtos/${p.slug}`}
                                className="bg-dark-50 rounded-xl p-5 hover:bg-brand-50 hover:border-brand-200 border border-dark-100 transition-all group"
                            >
                                <p className="text-xs text-dark-400 mb-1">{p.categoria.split(' · ')[0]}</p>
                                <p className="font-bold text-dark-900 group-hover:text-brand-600 transition-colors text-sm">{p.nome}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-brand-500 text-white text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Quer conhecer melhor a Rexar?</h2>
                    <p className="text-brand-100 mb-8">Fale com a nossa equipe e descubra como podemos ajudar sua empresa.</p>
                    <Link
                        href="/contato"
                        className="inline-block px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors"
                    >
                        Entrar em contato
                    </Link>
                </div>
            </section>
        </AppLayout>
    );
}
