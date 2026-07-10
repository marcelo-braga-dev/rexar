const colorMap = {
    blue:   'bg-blue-100 text-blue-700',
    green:  'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    brand:  'bg-brand-100 text-brand-700',
    dark:   'bg-dark-100 text-dark-700',
};

export default function Badge({ children, color = 'brand', className = '' }) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${colorMap[color] ?? colorMap.brand} ${className}`}>
            {children}
        </span>
    );
}
