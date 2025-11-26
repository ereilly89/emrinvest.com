const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Countries Served" },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/90" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
