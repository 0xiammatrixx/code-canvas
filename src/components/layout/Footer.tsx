import { identity } from "@/lib/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {currentYear} {identity.name}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            GitHub
          </a>
          <a
            href={identity.zenodo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            Zenodo
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            Email
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Software engineer · applied AI &amp; research
        </p>
      </div>
    </footer>
  );
};
