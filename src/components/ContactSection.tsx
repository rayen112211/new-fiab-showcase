import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with backend
    alert("Thank you for your inquiry. We will be in touch shortly.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-dark">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">{t.contact.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {t.contact.title} <span className="italic text-gradient-gold">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">{t.contact.info.location}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.contact.info.locationValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">{t.contact.info.email}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.contact.info.emailValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">{t.contact.info.phone}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.contact.info.phoneValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder={t.contact.form.namePlaceholder}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t.contact.form.companyPlaceholder}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder={t.contact.form.messagePlaceholder}
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase font-medium hover:opacity-90 hover:shadow-gold transition-all duration-300 mt-4 shadow-gold"
            >
              {t.contact.form.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
