import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Decentralized Messaging App",
    description: "A proof-of-concept decentralized messaging application running on a smart contract (blockchain technology), with a wallet dashboard, secure decentralized messaging, tipping functionality,trust score system and trust ranking. Built on the Arbitrum Sepolia chain.",
    screenshots: [
      "assets/5.svg",
      "assets/4.svg",
      "assets/1.svg",
      "assets/2.svg",
      "assets/3.svg",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Web3Auth", "Solidity"],
    githubUrl: "https://github.com/0xiammatrixx/flutter_quick_start.git",
    //demoUrl: "https://youtube.com",
  },
  {
    title: "Mp3 Downloader, mp4 to mp3 converter, YT video downloader",
    description: "An application that allows users to download music from various sources, such as YTMusic, Amazon, Apple Music, Deezer and Spotify, and save them to their device using a cunning workaround with youtube and cookie sessions. YOu can also convert mp4 to mp3 and download youtube videos with a 100mb file limit.",
    screenshots: [
      "assets/sd1.png",
      "assets/sd2.png",
      "assets/sd3.png",
      "assets/sd4.png",
    ],
    techStack: ["Flutter", "Dart", "Python"],
    githubUrl: "https://github.com/0xiammatrixx/songdownloader.git",
    //demoUrl: "https://youtube.com",
  },
  {
    title: "Duration Formatting Flutter Library",
    description: "A tiny Dart utility for formatting Duration objects into clean, human-friendly strings. This was a personal task done to understand package structure, publishing flow and to develop for developers even if it's very minimal.",
    screenshots: [
      "assets/duration_dev1.png",
      "assets/duration_dev2.png",
    ],
    techStack: ["Dart",],
    githubUrl: "https://github.com/0xIammatrixx/pretty_duration",
  },
  {
    title: "PayWallet",
    description: "A Flutter-based fintech wallet application that supports secure wallet funding, transfers, withdrawals, and transaction tracking using a Paystack-backed payment flow.",
    screenshots: [
      "assets/IMG_1.PNG",
      "assets/IMG_2.PNG",
      "assets/IMG_3.PNG",
      "assets/IMG_4.PNG",
      "assets/IMG_5.PNG",
      "assets/IMG_6.PNG",
      "assets/IMG_7.PNG",
      "assets/IMG_8.PNG",
      "assets/IMG_9.PNG",
    ],
    techStack: ["Dart", "Flutter", "Python", "Hive", "Provider"],
    githubUrl: "https://github.com/0xiammatrixx/fintech_frontend.git",
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
            A collection of mobile applications I've built as personal projects, showcasing my expertise
            in Flutter development. PS these were done without UI designs 
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
