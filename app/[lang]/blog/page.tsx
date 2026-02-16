'use client';

import { useLanguage } from '@/components/LanguageContext';

export default function BlogPage() {
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-black mb-4 italic uppercase">BLOG EXPLORA ANGOLA</h1>
            <p className="text-zinc-500">Estamos a preparar os melhores artigos para si. Volte em breve!</p>
        </div>
    );
}
