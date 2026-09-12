import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/lib/portfolio";

export const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="03"
          title="Skills"
          lede="The tools and practices I reach for across research and production work."
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mono-label">{group.name}</h3>
              <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
