import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '../globals.css';
import { Providers } from '@/components/providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://explora-angola-prime.vercel.app'),
    title: {
        default: 'Explora Angola Prime | Turismo em Angola',
        template: '%s | Explora Angola Prime'
    },
    description: 'A principal infraestrutura digital para o turismo em todas as 18 províncias de Angola. Encontre hotéis, restaurantes, e experiências únicas.',
    keywords: ['Angola', 'Turismo', 'Viagens', 'Luanda', 'Hotéis', 'Restaurantes', 'Guia Turístico', 'África'],
    authors: [{ name: 'Explora Angola Prime' }],
    creator: 'Explora Angola Prime',
    openGraph: {
        type: 'website',
        locale: 'pt_AO',
        url: 'https://explora-angola-prime.vercel.app',
        title: 'Explora Angola Prime',
        description: 'Planeie, descubra e reserve experiências únicas nas 18 províncias de Angola.',
        siteName: 'Explora Angola Prime',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Explora Angola Prime Preview',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Explora Angola Prime',
        description: 'Descubra a beleza de Angola. Planeie a sua viagem agora.',
        images: ['/og-image.jpg'],
    },
};

export const viewport = {
    themeColor: '#FFD700',
    width: 'device-width',
    initialScale: 1,
};

export async function generateStaticParams() {
    return [{ lang: 'pt' }, { lang: 'en' }, { lang: 'fr' }, { lang: 'es' }];
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang}>
            <body className={`${inter.variable} ${montserrat.variable} font-sans flex flex-col min-h-screen`}>
                <Providers lang={params.lang}>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
