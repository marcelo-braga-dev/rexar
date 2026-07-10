export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer';

    const variants = {
        primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md',
        secondary: 'bg-white text-dark-900 border border-dark-200 hover:border-brand-500 hover:text-brand-500',
        outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white',
        ghost: 'text-dark-700 hover:text-brand-500 hover:bg-brand-50',
        dark: 'bg-dark-900 text-white hover:bg-dark-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}
