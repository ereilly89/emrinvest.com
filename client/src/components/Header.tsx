import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";
import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <span className="text-xl font-bold text-primary">EMR Invest</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-services"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-portfolio"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-process"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            {!isAuthenticated && (
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            )}
            <UserMenu />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-mobile-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-mobile-process"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            {!isAuthenticated ? (
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            ) : (
              <div className="pt-2 border-t">
                <UserMenu />
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
