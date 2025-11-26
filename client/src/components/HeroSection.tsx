import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/hero_workspace_background.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Build Your Digital Presence
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Custom websites and web applications designed to help your business thrive online
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary/90 backdrop-blur-sm border border-primary-border hover:bg-primary text-lg px-8"
            data-testid="button-start-project"
          >
            Start Your Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("portfolio")}
            className="bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20 text-lg px-8"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
