import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Flutter", category: "primary" },
  { name: "Dart", category: "primary" },
  { name: "React", category: "secondary" },
  { name: "TypeScript", category: "secondary" },
  { name: "Firebase", category: "primary" },
  { name: "Node.js", category: "secondary" },
  { name: "Web3Auth", category: "tertiary" },
  { name: "Solidity", category: "tertiary" },
  { name: "REST APIs", category: "primary" },
  { name: "GraphQL", category: "secondary" },
  { name: "Git", category: "primary" },
  { name: "CI/CD", category: "secondary" },
  { name: "Figma", category: "tertiary" },
  { name: "Bloc/Provider", category: "primary" },
  { name: "GetX", category: "primary" },
  { name: "SQLite", category: "secondary" },
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "primary":
      return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40";
    case "secondary":
      return "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80 hover:border-primary/30";
    case "tertiary":
      return "bg-muted text-muted-foreground border-border hover:bg-muted/80 hover:text-foreground";
    default:
      return "bg-secondary text-secondary-foreground border-border";
  }
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 cursor-default ${getCategoryStyles(
                skill.category
              )}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40" />
            <span>Core Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary border border-border" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted border border-border" />
            <span>Familiar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
