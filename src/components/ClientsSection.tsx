import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const brands = [
  "CHANEL",
  "DIOR",
  "BURBERRY",
  "PRADA",
  "GUCCI",
  "HERMÈS",
  "LOUIS VUITTON",
  "FENDI",
];

const ClientsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">{t.clients.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {t.clients.title} <span className="italic text-gradient-gold">{t.clients.titleHighlight}</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mt-6">
            {t.clients.description}
          </p>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="flex items-center justify-center py-12 md:py-16 bg-background hover:bg-secondary/20 transition-all duration-500 group"
            >
              <span className="font-display text-lg md:text-xl tracking-[0.3em] text-muted-foreground/40 group-hover:text-muted-foreground/70 group-hover:scale-105 transition-all duration-500">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
