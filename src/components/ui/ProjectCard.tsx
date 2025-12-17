import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

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
  const [aspectRatios, setAspectRatios] = useState<number[]>([]);

  // Detect aspect ratio for each image
  useEffect(() => {
    const fetchRatios = async () => {
      const ratios = await Promise.all(
        screenshots.map(
          (src) =>
            new Promise<number>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                resolve(img.height / img.width); // >1 = tall phone image
              };
            })
        )
      );
      setAspectRatios(ratios);
    };

    fetchRatios();
  }, [screenshots]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden hover-lift group"
    >
      {/* Carousel */}
      <Carousel className="relative">
        <div className="absolute top-3 right-3 z-10 px-2 py-1 text-[10px] rounded-full bg-black/40 text-white backdrop-blur-sm">
          Swipe →
        </div>

        <CarouselContent>
          {screenshots.map((src, idx) => {
            const isPortrait = aspectRatios[idx] > 1.2;

            return (
              <CarouselItem key={idx}>
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: isPortrait ? 1 : 1 }}
                  transition={{ duration: 1.2 }}
                  className="w-full h-full"
                >
                  <motion.img
                    src={src}
                    className={`w-full h-[300px] object-contain bg-secondary/40`}
                    alt={`Screenshot ${idx + 1}`}
                    initial={{ scale: 1.3 }}
                    animate={{ scale: isPortrait ? 1 : 1.1 }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Content Area */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
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

        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={githubUrl} target="_blank">
              <Github size={16} />
              GitHub
            </a>
          </Button>

          {demoUrl && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={demoUrl} target="_blank">
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
