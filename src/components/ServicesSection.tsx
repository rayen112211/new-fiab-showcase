import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cog, Layers, Wrench, Gem, Sparkles } from "lucide-react";

const iconMap = [Cog, Layers, Wrench, Gem, Sparkles];

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">{t.services.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {t.services.title} <span className="italic text-gradient-gold">{t.services.titleHighlight}</span>
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-background p-10 hover:bg-secondary/30 hover:shadow-gold transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium mb-4">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
