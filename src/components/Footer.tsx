import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold tracking-wider">
            NEW <span className="text-gradient-gold">FIAB</span>
          </div>
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary tracking-wider uppercase transition-colors duration-300">
              {t.footer.privacy}
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary tracking-wider uppercase transition-colors duration-300">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
