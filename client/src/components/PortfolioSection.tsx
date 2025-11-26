import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@assets/generated_images/e-commerce_project_showcase.png";
import corporateImg from "@assets/generated_images/corporate_website_showcase.png";
import mobileImg from "@assets/generated_images/mobile_app_showcase.png";

const projects = [
  {
    image: ecommerceImg,
    title: "Modern E-Commerce Platform",
    description: "Complete online shopping experience with cart and checkout",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    image: corporateImg,
    title: "Corporate Business Site",
    description: "Professional website for B2B services company",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    image: mobileImg,
    title: "Mobile-First Web App",
    description: "Progressive web application for mobile users",
    tags: ["React", "PWA", "Firebase"],
  },
  {
    image: ecommerceImg,
    title: "Restaurant Management",
    description: "Online ordering and reservation system",
    tags: ["Vue.js", "Express", "MongoDB"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-portfolio-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            A showcase of our recent work and successful client partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-white/20 text-white border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
