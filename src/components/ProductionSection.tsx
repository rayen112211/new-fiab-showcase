import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import productionImage from "@/assets/production-image.jpg";

const ProductionSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="production" className="py-32 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">{t.production.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {t.production.title} <span className="italic text-gradient-gold">{t.production.titleHighlight}</span>
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20 overflow-hidden shadow-elevated"
        >
          <img
            src={productionImage}
            alt="Precision metal components collection"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {t.production.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="flex gap-6 md:gap-10 py-8 border-b border-border/50 last:border-b-0 group hover:border-primary/30 transition-colors duration-500"
            >
              <span className="font-display text-3xl md:text-4xl font-semibold text-primary/30 group-hover:text-primary transition-colors duration-500 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
