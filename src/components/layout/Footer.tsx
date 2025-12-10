import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Your Name. Built with React & TailwindCSS.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with <span className="text-primary">♥</span> for great experiences
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
