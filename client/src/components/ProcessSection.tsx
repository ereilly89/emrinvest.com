import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create the perfect strategy.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design",
    description: "Our designers create beautiful, user-friendly interfaces that align with your brand.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "We build your website using modern technologies for optimal performance and security.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your website and provide ongoing support to ensure continued success.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-process-title">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
            A proven approach to delivering exceptional web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative" data-testid={`card-step-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
