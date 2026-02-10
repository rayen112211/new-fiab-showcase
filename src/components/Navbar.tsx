import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.navbar.home, href: "#home" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.production, href: "#production" },
    { label: t.navbar.clients, href: "#clients" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="font-display text-2xl font-bold tracking-wider text-foreground">
          NEW <span className="text-gradient-gold">FIAB</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
