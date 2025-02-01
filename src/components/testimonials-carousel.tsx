import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "This app has completely transformed my workout routine. The tracking features are intuitive and the progress analytics keep me motivated.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Personal Trainer",
    content:
      "As a trainer, I recommend this app to all my clients. It's the perfect tool for tracking progress and maintaining accountability.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon Runner",
    content:
      "The training plans are fantastic! I've improved my running times significantly since using this app.",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="bg-muted/50 px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H2>What Our Users Say</Typography.H2>
          <Typography.Lead className="mt-4">
            Join thousands of satisfied users who have transformed their fitness
            journey
          </Typography.Lead>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <Card className="border-2">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <Typography.P>{testimonial.content}</Typography.P>
                    <div>
                      <Typography.H4>{testimonial.name}</Typography.H4>
                      <Typography.Muted>{testimonial.role}</Typography.Muted>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground" />
          <CarouselNext className="text-foreground" />
        </Carousel>
      </div>
    </section>
  );
}