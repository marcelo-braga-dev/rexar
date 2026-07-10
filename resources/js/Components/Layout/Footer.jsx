import { Link } from '@inertiajs/react';
import Logo from '../Logo';

const produtos = [
    { label: 'LeveLead CRM', href: '/produtos/levelead-crm' },
    { label: 'GD Solar ERP', href: '/produtos/gd-solar-erp' },
    { label: 'Solar Shop', href: '/produtos/solar-shop' },
    { label: 'CRM Solar', href: '/produtos/crm-solar' },
];

const empresa = [
    { label: 'Sobre a Rexar', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
];

export default function Footer() {
    return (
        <footer className="bg-dark-900 text-dark-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {/* Marca */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <Logo textClass="text-white" className="mb-4" />
                        <p className="text-sm leading-relaxed">
                            Software especializado para o setor de energia solar fotovoltaica.
                        </p>
                        <p className="text-xs mt-4 text-dark-500">rexar.com.br</p>
                    </div>

                    {/* Produtos */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">Produtos</h3>
                        <ul className="space-y-2">
                            {produtos.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-brand-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">Empresa</h3>
                        <ul className="space-y-2">
                            {empresa.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-brand-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://wa.me/5500000000000" className="hover:text-brand-400 transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@rexar.com.br" className="hover:text-brand-400 transition-colors">
                                    contato@rexar.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-dark-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-500">
                    <span>© {new Date().getFullYear()} Rexar. Todos os direitos reservados.</span>
                    <span>Feito para o setor de energia solar fotovoltaica.</span>
                </div>
            </div>
        </footer>
    );
}
