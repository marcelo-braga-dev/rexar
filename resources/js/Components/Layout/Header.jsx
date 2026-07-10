import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Logo from '../Logo';
import { produtos } from '../../data/produtos';

const navLinks = [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
];

const dotColor = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
};

export default function Header() {
    const [open, setOpen] = useState(false);
    const [produtosOpenMobile, setProdutosOpenMobile] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-dark-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo textClass="text-dark-900" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    <div className="relative group">
                        <Link
                            href="/produtos"
                            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-dark-600 hover:text-brand-500 hover:bg-brand-50 transition-all"
                        >
                            Produtos
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 mt-px">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </Link>

                        {/* Dropdown */}
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
                            <div className="w-72 bg-white border border-dark-100 rounded-xl shadow-lg py-2">
                                {produtos.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/produtos/${p.slug}`}
                                        className="flex items-start gap-3 px-4 py-3 hover:bg-brand-50 transition-colors"
                                    >
                                        <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${dotColor[p.cor]}`} />
                                        <span>
                                            <span className="block text-sm font-semibold text-dark-900">{p.nome}</span>
                                            <span className="block text-xs text-dark-500">{p.categoria}</span>
                                        </span>
                                    </Link>
                                ))}
                                <div className="border-t border-dark-100 mt-2 pt-2 px-4">
                                    <Link
                                        href="/produtos"
                                        className="block py-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
                                    >
                                        Ver todos os produtos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-dark-600 hover:text-brand-500 hover:bg-brand-50 transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA desktop */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/contato"
                        className="px-5 py-2 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-colors"
                    >
                        Falar com vendas
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span className="block w-5 h-0.5 bg-dark-700 mb-1" />
                    <span className="block w-5 h-0.5 bg-dark-700 mb-1" />
                    <span className="block w-5 h-0.5 bg-dark-700" />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-dark-100 px-4 pb-4">
                    <div className="border-b border-dark-100">
                        <button
                            className="w-full flex items-center justify-between py-3 text-sm font-medium text-dark-700"
                            onClick={() => setProdutosOpenMobile(!produtosOpenMobile)}
                        >
                            Produtos
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`w-4 h-4 transition-transform ${produtosOpenMobile ? 'rotate-180' : ''}`}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {produtosOpenMobile && (
                            <div className="pb-2">
                                {produtos.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/produtos/${p.slug}`}
                                        className="flex items-center gap-2 py-2.5 pl-2 text-sm text-dark-600"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor[p.cor]}`} />
                                        {p.nome}
                                    </Link>
                                ))}
                                <Link
                                    href="/produtos"
                                    className="block py-2.5 pl-2 text-sm font-semibold text-brand-500"
                                    onClick={() => setOpen(false)}
                                >
                                    Ver todos os produtos
                                </Link>
                            </div>
                        )}
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block py-3 text-sm font-medium text-dark-700 border-b border-dark-100 last:border-0"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contato"
                        className="mt-3 block text-center px-5 py-3 bg-brand-500 text-white text-sm font-semibold rounded-lg"
                        onClick={() => setOpen(false)}
                    >
                        Falar com vendas
                    </Link>
                </div>
            )}
        </header>
    );
}
