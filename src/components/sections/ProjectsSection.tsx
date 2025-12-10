import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce application with product browsing, cart management, secure checkout, and order tracking. Built with Flutter and Firebase.",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Stripe"],
    githubUrl: "https://github.com",
    demoUrl: "https://youtube.com",
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness app with workout plans, progress tracking, and social features. Integrates with health APIs for accurate data.",
    screenshots: [
      "https://images.unsplash.com/photo-1461896836934- voices?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
    ],
    techStack: ["Flutter", "Dart", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://youtube.com",
  },
  {
    title: "Crypto Wallet App",
    description: "A secure cryptocurrency wallet with multi-chain support, real-time price tracking, and Web3 authentication integration.",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=450&fit=crop",
    ],
    techStack: ["Flutter", "Dart", "Web3Auth", "Solidity"],
    githubUrl: "https://github.com",
  },
  {
    title: "Food Delivery App",
    description: "A feature-rich food delivery application with real-time order tracking, restaurant discovery, and seamless payment integration.",
    screenshots: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps"],
    githubUrl: "https://github.com",
    demoUrl: "https://youtube.com",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of mobile applications I've built, showcasing my expertise
            in Flutter development and modern app architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
