import { SectionHeader } from "@/components/SectionHeader";

const focus = [
  "LLM integration with deterministic guardrails",
  "Semantic IR design & validation",
  "Independent research & publication",
];

const range = [
  "Mobile — Flutter & Dart",
  "Fintech & payments",
  "Smart contracts & critical infrastructure",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader index="01" title="About" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="space-y-6 font-serif text-base leading-relaxed text-foreground/90 md:col-span-8 md:text-lg">
            <p>
              I'm a software engineer with a foundation in software architecture
              and a focus on the safe integration of large language models into
              deterministic software. My default position is that models
              translate and code decides — so I design systems with a clear
              boundary between the probabilistic and the provable.
            </p>
            <p>
              I independently authored and published the research paper{" "}
              <span className="italic">A Validated Semantic Boundary Between
              Natural Language and Database Execution</span> (Zenodo, 2026). It
              presents a database-instruction system in which an LLM maps
              natural language onto a formally specified JSON intermediate
              representation, while validation, compilation, and execution
              remain pure, verifiable code — a boundary that held across five
              controlled experiments where a direct code-generation baseline did
              not.
            </p>
            <p>
              Around that core sits broader engineering range: mobile
              applications in Flutter and Dart, fintech wallet systems, and
              blockchain work touching smart contracts and critical
              infrastructure — across personal projects, freelance engagements,
              and early-stage startup work.
            </p>
          </div>

          <aside className="md:col-span-4">
            <div>
              <h3 className="mono-label">Focus</h3>
              <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                {focus.map((item) => (
                  <li key={item} className="font-mono text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="mono-label">Range</h3>
              <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                {range.map((item) => (
                  <li key={item} className="font-mono text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
