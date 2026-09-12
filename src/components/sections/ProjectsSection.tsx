import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { projects, type Project } from "@/lib/portfolio";

const ProjectLinks = ({ links }: { links: Project["links"] }) => {
  if (links.length === 0) {
    return (
      <span className="font-mono text-xs text-muted-foreground">
        Private · in development
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        >
          {link.label}
          <ArrowUpRight size={12} />
        </a>
      ))}
    </div>
  );
};

export const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="02"
          title="Selected work"
          lede="Research first, then the engineering range that supports it."
        />

        {/* Featured research */}
        <article className="border border-border">
          <div className="grid md:grid-cols-12">
            <div className="p-6 md:col-span-7 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {featured.kind}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-5 font-serif text-base leading-relaxed text-foreground/90 md:text-lg">
                {featured.description}
              </p>
              {featured.detail && (
                <p className="mt-4 font-serif text-base leading-relaxed text-muted-foreground">
                  {featured.detail}
                </p>
              )}
            </div>

            <div className="border-t border-border bg-secondary/50 p-6 md:col-span-5 md:border-l md:border-t-0 md:p-10">
              <h4 className="mono-label">Results</h4>
              <ul className="mt-4 space-y-3">
                {featured.results?.map((result) => (
                  <li
                    key={result}
                    className="font-mono text-xs leading-relaxed text-foreground/80"
                  >
                    {result}
                  </li>
                ))}
              </ul>

              <h4 className="mono-label mt-8">Stack</h4>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                {featured.stack.join(" · ")}
              </p>

              <div className="mt-8">
                <ProjectLinks links={featured.links} />
              </div>
            </div>
          </div>
        </article>

        {/* Other work */}
        <ul className="mt-16 divide-y divide-border border-b border-border">
          {rest.map((project) => (
            <li
              key={project.title}
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-7">
                <h3 className="font-serif text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl font-serif text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <p className="mono-label">{project.kind}</p>
                <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                  {project.stack.join(" · ")}
                </p>
                <div className="mt-4 md:flex md:justify-end">
                  <ProjectLinks links={project.links} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
