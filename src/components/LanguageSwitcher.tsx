import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'it' : 'en');
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded border border-primary/30 text-sm font-body tracking-wider uppercase hover:border-primary hover:bg-primary/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Switch language"
        >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{language.toUpperCase()}</span>
        </motion.button>
    );
};

export default LanguageSwitcher;
