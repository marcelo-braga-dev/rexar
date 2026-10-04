import { useState } from 'react';

export default function FaqItem({ pergunta, resposta }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-dark-100 rounded-xl overflow-hidden bg-white">
            <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="font-semibold text-dark-900 text-sm sm:text-base">{pergunta}</span>
                <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`w-4 h-4 flex-shrink-0 text-dark-400 transition-transform ${open ? 'rotate-180' : ''}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {open && (
                <p className="px-5 pb-4 text-dark-500 text-sm leading-relaxed">{resposta}</p>
            )}
        </div>
    );
}
