import { useState } from 'react';
import AppLayout from '../Components/Layout/AppLayout';
import Badge from '../Components/UI/Badge';
import { produtos } from '../data/produtos';

export default function Contato() {
    const [form, setForm] = useState({
        nome: '', empresa: '', email: '', telefone: '', produto: '', mensagem: '',
    });
    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
                body: JSON.stringify(form),
            });
            setStatus(res.ok ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    }

    const canais = [
        {
            icone: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            ),
            titulo: 'WhatsApp',
            valor: 'Fale diretamente com nossa equipe',
            href: 'https://wa.me/5500000000000',
            label: 'Abrir conversa',
        },
        {
            icone: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            ),
            titulo: 'E-mail',
            valor: 'contato@rexar.com.br',
            href: 'mailto:contato@rexar.com.br',
            label: 'Enviar e-mail',
        },
    ];

    return (
        <AppLayout
            title="Contato"
            description="Entre em contato com a Rexar para solicitar uma demonstração ou tirar dúvidas sobre nossos sistemas."
        >
            {/* Hero */}
            <section className="bg-dark-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <Badge color="brand" className="mb-4">Fale conosco</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em contato</h1>
                    <p className="text-dark-300 text-lg max-w-xl mx-auto">
                        Solicite uma demonstração, tire dúvidas ou descubra qual sistema é ideal para o seu negócio.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Formulário */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-dark-900 mb-8">Envie sua mensagem</h2>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-3">✅</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem enviada!</h3>
                                <p className="text-green-700">Nossa equipe entrará em contato em breve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-dark-700 mb-1.5">Nome *</label>
                                        <input
                                            type="text" name="nome" required value={form.nome} onChange={handleChange}
                                            placeholder="Seu nome completo"
                                            className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-dark-700 mb-1.5">Empresa</label>
                                        <input
                                            type="text" name="empresa" value={form.empresa} onChange={handleChange}
                                            placeholder="Nome da empresa"
                                            className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-dark-700 mb-1.5">E-mail *</label>
                                        <input
                                            type="email" name="email" required value={form.email} onChange={handleChange}
                                            placeholder="seu@email.com"
                                            className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-dark-700 mb-1.5">Telefone / WhatsApp</label>
                                        <input
                                            type="tel" name="telefone" value={form.telefone} onChange={handleChange}
                                            placeholder="(00) 00000-0000"
                                            className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark-700 mb-1.5">Sistema de interesse</label>
                                    <select
                                        name="produto" value={form.produto} onChange={handleChange}
                                        className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors bg-white"
                                    >
                                        <option value="">Selecione um sistema (opcional)</option>
                                        {produtos.map((p) => (
                                            <option key={p.slug} value={p.slug}>{p.nome}</option>
                                        ))}
                                        <option value="nao-sei">Não sei ainda, quero orientação</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark-700 mb-1.5">Mensagem *</label>
                                    <textarea
                                        name="mensagem" required rows={4} value={form.mensagem} onChange={handleChange}
                                        placeholder="Descreva sua necessidade, dúvida ou solicite uma demonstração..."
                                        className="w-full px-4 py-3 border border-dark-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                                    />
                                </div>
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">Erro ao enviar. Tente novamente ou use o WhatsApp.</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 disabled:opacity-60 transition-colors"
                                >
                                    {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Canais laterais */}
                    <div>
                        <h2 className="text-2xl font-bold text-dark-900 mb-8">Outros canais</h2>
                        <div className="space-y-4">
                            {canais.map((c, i) => (
                                <div key={i} className="bg-dark-50 border border-dark-100 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
                                            {c.icone}
                                        </div>
                                        <span className="font-semibold text-dark-900">{c.titulo}</span>
                                    </div>
                                    <p className="text-dark-500 text-sm mb-3">{c.valor}</p>
                                    <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-dark-900 text-white text-sm font-semibold rounded-lg hover:bg-dark-800 transition-colors"
                                    >
                                        {c.label}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-brand-50 border border-brand-200 rounded-xl p-5">
                            <p className="text-sm font-semibold text-brand-700 mb-1">⚡ Tempo de resposta</p>
                            <p className="text-sm text-brand-600">Nossa equipe responde em até 1 dia útil.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
