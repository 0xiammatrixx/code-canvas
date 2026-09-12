import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { identity } from "@/lib/portfolio";

const inputClasses =
  "w-full rounded-sm border-b border-border bg-transparent px-1 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xjknpgzw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="04"
          title="Contact"
          lede="Have a project in mind, or want to discuss the boundary between language and execution? My inbox is open."
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            {isSuccess ? (
              <div className="border border-border p-8">
                <p className="font-serif text-xl font-semibold">Message sent.</p>
                <p className="mt-2 font-mono text-sm text-muted-foreground">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="mono-label block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`${inputClasses} mt-2`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mono-label block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`${inputClasses} mt-2`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mono-label block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClasses} mt-2 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {error && (
                  <p className="font-mono text-sm text-destructive">{error}</p>
                )}

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <aside className="md:col-span-5">
            <h3 className="mono-label">Direct</h3>
            <a
              href={`mailto:${identity.email}`}
              className="mt-4 block font-mono text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
            >
              {identity.email}
            </a>

            <h3 className="mono-label mt-10">Elsewhere</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={identity.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={identity.zenodo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                  Zenodo
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
