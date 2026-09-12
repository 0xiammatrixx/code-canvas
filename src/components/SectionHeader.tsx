type SectionHeaderProps = {
  index: string;
  title: string;
  lede?: string;
};

export const SectionHeader = ({ index, title, lede }: SectionHeaderProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
        {index}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground">
          {lede}
        </p>
      )}
    </div>
  );
};
