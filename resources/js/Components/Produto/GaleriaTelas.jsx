import { useCallback, useEffect, useRef, useState } from 'react';

/*
 * Galeria de telas com rolagem horizontal (scroll-snap), filtros por área e
 * visualização ampliada (lightbox) com navegação por setas, teclado e toque.
 * Cada item: { src, thumb, titulo, area, celular }.
 */

const Seta = ({ direcao }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        {direcao === 'esquerda' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
);

const IconZoom = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" />
    </svg>
);

function Lightbox({ itens, indice, onFechar, onNavegar }) {
    const item = itens[indice];
    const toqueX = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onFechar();
            if (e.key === 'ArrowRight') onNavegar(1);
            if (e.key === 'ArrowLeft') onNavegar(-1);
        };
        window.addEventListener('keydown', onKey);
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = overflow;
        };
    }, [onFechar, onNavegar]);

    return (
        <div
            className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-sm flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={item.titulo}
            onClick={onFechar}
            onTouchStart={(e) => { toqueX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
                if (toqueX.current === null) return;
                const dx = e.changedTouches[0].clientX - toqueX.current;
                if (Math.abs(dx) > 50) onNavegar(dx < 0 ? 1 : -1);
                toqueX.current = null;
            }}
        >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-white" onClick={(e) => e.stopPropagation()}>
                <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-300">{item.area}</p>
                    <p className="font-bold truncate">{item.titulo}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-sm text-white/60 tabular-nums">{indice + 1} / {itens.length}</span>
                    <button
                        onClick={onFechar}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl leading-none"
                        aria-label="Fechar"
                    >
                        ×
                    </button>
                </div>
            </div>

            <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 pb-6">
                <img
                    key={item.src}
                    src={item.src}
                    alt={item.titulo}
                    onClick={(e) => e.stopPropagation()}
                    className={`max-h-full max-w-full object-contain rounded-xl shadow-2xl ${item.celular ? 'sm:max-h-[80vh]' : ''}`}
                />
                <button
                    onClick={(e) => { e.stopPropagation(); onNavegar(-1); }}
                    className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center"
                    aria-label="Tela anterior"
                >
                    <Seta direcao="esquerda" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onNavegar(1); }}
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center"
                    aria-label="Próxima tela"
                >
                    <Seta direcao="direita" />
                </button>
            </div>
            <p className="sm:hidden text-center text-xs text-white/50 pb-4">Deslize para ver as outras telas</p>
        </div>
    );
}

export default function GaleriaTelas({ telas, areas }) {
    const [filtro, setFiltro] = useState('Todas');
    const [aberta, setAberta] = useState(null);
    const [pos, setPos] = useState({ inicio: true, fim: false, progresso: 0 });
    const trilho = useRef(null);

    const itens = filtro === 'Todas' ? telas : telas.filter((t) => t.area === filtro);

    const atualizar = useCallback(() => {
        const el = trilho.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setPos({
            inicio: el.scrollLeft <= 4,
            fim: el.scrollLeft >= max - 4,
            progresso: max > 0 ? el.scrollLeft / max : 1,
        });
    }, []);

    useEffect(() => {
        const el = trilho.current;
        if (!el) return;
        el.scrollTo({ left: 0 });
        atualizar();
        el.addEventListener('scroll', atualizar, { passive: true });
        window.addEventListener('resize', atualizar);
        return () => {
            el.removeEventListener('scroll', atualizar);
            window.removeEventListener('resize', atualizar);
        };
    }, [filtro, atualizar]);

    const rolar = (dir) => {
        const el = trilho.current;
        el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
    };

    const navegar = useCallback(
        (dir) => setAberta((i) => (i + dir + itens.length) % itens.length),
        [itens.length],
    );
    const fechar = useCallback(() => setAberta(null), []);

    return (
        <div>
            {/* Filtros */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {['Todas', ...areas].map((a) => {
                    const total = a === 'Todas' ? telas.length : telas.filter((t) => t.area === a).length;
                    return (
                        <button
                            key={a}
                            onClick={() => setFiltro(a)}
                            className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                                filtro === a ? 'bg-green-600 text-white' : 'bg-white text-dark-600 border border-dark-200 hover:border-green-500'
                            }`}
                        >
                            {a}
                            <span className={`text-xs ${filtro === a ? 'text-green-100' : 'text-dark-400'}`}>{total}</span>
                        </button>
                    );
                })}
            </div>

            {/* Trilho com rolagem */}
            <div className="relative mt-8">
                <div
                    ref={trilho}
                    className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 sm:scroll-px-1 pb-4 -mx-4 px-4 sm:mx-0 sm:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {itens.map((t, i) => (
                        <button
                            key={t.src}
                            onClick={() => setAberta(i)}
                            className={`group snap-start flex-shrink-0 text-left ${t.celular ? 'w-32 sm:w-44' : 'w-72 sm:w-96'}`}
                            aria-label={`Ampliar: ${t.titulo}`}
                        >
                            {/* Altura fixa: telas de computador e de celular alinham no trilho (celular mostra o topo) */}
                            <div className="relative h-[156px] sm:h-[208px] overflow-hidden rounded-xl bg-white ring-1 ring-dark-200 shadow-sm group-hover:shadow-xl group-hover:ring-green-400 transition-all">
                                <img
                                    src={t.thumb}
                                    alt={t.titulo}
                                    loading="lazy"
                                    width={t.celular ? 300 : 720}
                                    height={t.celular ? 577 : 390}
                                    className="block w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                                />
                                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-900/80 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                    <IconZoom /> Ampliar
                                </span>
                            </div>
                            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-green-600">{t.area}</p>
                            <p className="font-semibold text-dark-900 leading-snug">{t.titulo}</p>
                        </button>
                    ))}
                </div>

                {/* Degradês nas bordas indicam que há mais conteúdo */}
                <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent transition-opacity hidden sm:block ${pos.inicio ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent transition-opacity hidden sm:block ${pos.fim ? 'opacity-0' : 'opacity-100'}`} />
            </div>

            {/* Controles */}
            <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 h-1 rounded-full bg-dark-100 overflow-hidden">
                    <div
                        className="h-full bg-green-500 rounded-full transition-[width] duration-200"
                        style={{ width: `${Math.max(8, pos.progresso * 100)}%` }}
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => rolar(-1)}
                        disabled={pos.inicio}
                        className="w-11 h-11 rounded-full border border-dark-200 bg-white text-dark-700 flex items-center justify-center hover:border-green-500 hover:text-green-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                        aria-label="Telas anteriores"
                    >
                        <Seta direcao="esquerda" />
                    </button>
                    <button
                        onClick={() => rolar(1)}
                        disabled={pos.fim}
                        className="w-11 h-11 rounded-full border border-dark-200 bg-white text-dark-700 flex items-center justify-center hover:border-green-500 hover:text-green-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                        aria-label="Próximas telas"
                    >
                        <Seta direcao="direita" />
                    </button>
                </div>
            </div>

            {aberta !== null && <Lightbox itens={itens} indice={aberta} onFechar={fechar} onNavegar={navegar} />}
        </div>
    );
}
