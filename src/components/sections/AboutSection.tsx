import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Zap } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Specialized in building cross-platform mobile apps with Flutter",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, smooth animations, and great UX",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <img
            src="assets/profile.jpg"
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />

          <div className="glass rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a 21 year old Software Engineering graduate. I'm a dedicated Flutter mobile developer with a passion for creating
              beautiful, high-performance applications. With expertise in Dart and
              the Flutter framework, I build cross-platform apps that deliver
              native-like experiences on both iOS and Android, building clean, scalable apps with additional skiil in blockchain and smart contract integration.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey in mobile development has equipped me with skills in
              problem-solving, clean code, and modern UI/UX
              principles. I'm constantly exploring new technologies and best
              practices to deliver exceptional mobile experiences. I’m currently open to mobile development opportunities, collaborations, and exciting technical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass rounded-xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
