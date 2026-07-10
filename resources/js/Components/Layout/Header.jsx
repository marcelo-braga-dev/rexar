import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Logo from '../Logo';

const navLinks = [
    { label: 'Produtos', href: '/produtos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-dark-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo textClass="text-dark-900" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
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
