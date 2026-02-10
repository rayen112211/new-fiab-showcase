import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t.about.stats.experience.value, label: t.about.stats.experience.label },
    { value: t.about.stats.partners.value, label: t.about.stats.partners.label },
    { value: t.about.stats.components.value, label: t.about.stats.components.label },
    { value: t.about.stats.quality.value, label: t.about.stats.quality.label },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-dark">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">{t.about.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {t.about.title} <span className="italic text-gradient-gold">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Precision CNC machining"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 transition-all duration-500 group-hover:border-primary/40" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              {t.about.paragraph1}
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              {t.about.paragraph2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors duration-300"
                >
                  <p className="font-display text-3xl font-semibold text-gradient-gold">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
