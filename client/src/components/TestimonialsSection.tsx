import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import client1 from "@assets/generated_images/client_testimonial_headshot_1.png";
import client2 from "@assets/generated_images/client_testimonial_headshot_2.png";
import client3 from "@assets/generated_images/client_testimonial_headshot_3.png";
import client4 from "@assets/generated_images/client_testimonial_headshot_4.png";

const testimonials = [
  {
    image: client1,
    quote: "EmrInvest transformed our online presence. The website they built has significantly increased our customer engagement and sales.",
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    initials: "SJ",
  },
  {
    image: client2,
    quote: "Professional, responsive, and delivered exactly what we needed. The team went above and beyond our expectations.",
    name: "Michael Chen",
    company: "Global Marketing Group",
    initials: "MC",
  },
  {
    image: client3,
    quote: "Working with EmrInvest was a seamless experience. They truly understood our vision and brought it to life beautifully.",
    name: "Emma Rodriguez",
    company: "Creative Design Studio",
    initials: "ER",
  },
  {
    image: client4,
    quote: "The e-commerce platform they developed has streamlined our operations and doubled our online revenue. Highly recommend!",
    name: "David Thompson",
    company: "Retail Innovations Inc",
    initials: "DT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Hear from businesses we've helped grow their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base mb-6 italic text-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
