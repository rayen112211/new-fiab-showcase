import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/translations';

export type Language = 'en' | 'it';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get saved language from localStorage or default to English
        const saved = localStorage.getItem('language');
        return (saved === 'it' || saved === 'en') ? saved : 'en';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    // Get translations for current language
    const t = translations[language];

    useEffect(() => {
        // Update HTML lang attribute
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
