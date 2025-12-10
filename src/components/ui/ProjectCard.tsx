import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  screenshots: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  screenshots,
  techStack,
  githubUrl,
  demoUrl,
  index,
}: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden hover-lift group"
    >
      {/* Image Carousel */}
      <div className="relative aspect-video overflow-hidden bg-secondary/50">
        <motion.img
          key={currentImage}
          src={screenshots[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Image Navigation Dots */}
        {screenshots.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImage
                    ? "bg-primary w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`View screenshot ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
          </Button>
          {demoUrl && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Play size={16} />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
