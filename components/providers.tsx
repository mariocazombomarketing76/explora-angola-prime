'use client';

import { LanguageProvider } from './LanguageContext';

export function Providers({ children, lang }: { children: React.ReactNode, lang: string }) {
    return (
        <LanguageProvider initialLang={lang}>
            {children}
        </LanguageProvider>
    );
}
