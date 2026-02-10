import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Precision metal components" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 max-w-4xl mx-auto"
        >
          {t.hero.title}{" "}
          <span className="text-gradient-gold italic">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity duration-300 shadow-gold"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground font-body text-sm tracking-widest uppercase font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
