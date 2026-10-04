import { Link } from '@inertiajs/react';
import Badge from '../UI/Badge';
import { produtos } from '../../data/produtos';

export default function OutrosProdutos({ slugAtual }) {
    const outros = produtos.filter((p) => p.slug !== slugAtual);
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-dark-900 mb-2">Conheça também</h2>
                    <p className="text-dark-500">Outros sistemas do ecossistema Rexar que podem completar sua operação.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {outros.map((p) => (
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
    );
}
