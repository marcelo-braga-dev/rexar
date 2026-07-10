import { Head } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title || 'Rexar'}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
