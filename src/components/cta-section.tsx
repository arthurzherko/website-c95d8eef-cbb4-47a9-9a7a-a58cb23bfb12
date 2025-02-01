import { ArrowRight, Smartphone } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <Typography.H2 className="text-primary-foreground">
          Start Your Fitness Journey Today
        </Typography.H2>
        <Typography.Lead className="mt-4 text-primary-foreground/90">
          Download our app and transform your workouts with smart tracking and
          personalized insights
        </Typography.Lead>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            Download Now <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Learn More
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/90">
          <Smartphone className="h-5 w-5" />
          <Typography.Small>Available for iOS and Android</Typography.Small>
        </div>
      </div>
    </section>
  );
}