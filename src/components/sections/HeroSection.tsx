import { ArrowUpRight, ArrowDown } from "lucide-react";
import { identity } from "@/lib/portfolio";

export const HeroSection = () => {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
          {identity.role}
        </p>

        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          {identity.name}
        </h1>

        <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
          I build deterministic software around large language models —
          architecture first, models second. My work sits at the boundary where
          natural language meets validated, compiled execution.
        </p>

        <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          Independent author of a published research paper · mobile and
          critical-infrastructure work as supporting range.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={identity.zenodo}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link group"
          >
            Read the research
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a href="#work" className="arrow-link group">
            Selected work
            <ArrowDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link group"
          >
            GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
