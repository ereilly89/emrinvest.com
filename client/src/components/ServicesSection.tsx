import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingCart, Code, Bot, Search, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Tailored websites that perfectly represent your brand and engage your audience with modern design and functionality.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment processing, inventory management, and seamless customer experiences.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Powerful web applications built with cutting-edge technology to solve complex business challenges.",
  },
  {
    icon: Bot,
    title: "AI & Automations",
    description: "Intelligent automation solutions powered by AI to streamline your workflows and boost productivity.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to improve your search rankings and drive organic traffic to your website.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Reliable maintenance and support to keep your website running smoothly and up-to-date.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive web development solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
