import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { identity } from "@/lib/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-colors ${
        isScrolled || isMobileMenuOpen ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <a
          href="#"
          onClick={goTop}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          {identity.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </button>
          ))}
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            GitHub ↗
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="py-2 text-left font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </button>
            ))}
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 font-mono text-sm text-foreground"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
