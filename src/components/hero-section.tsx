import { ArrowRight, Smartphone, Activity } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="grid min-h-[80vh] grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <Typography.H1>
          Transform Your Fitness Journey with Smart Tracking
        </Typography.H1>
        <Typography.Lead>
          Track workouts, set goals, and achieve results with our comprehensive
          fitness tracking app. Your personal trainer in your pocket.
        </Typography.Lead>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2">
            Download Now <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="text-foreground">
            Learn More
          </Button>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Smartphone className="h-5 w-5" />
          <Typography.Small>Available for iOS and Android</Typography.Small>
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-xl justify-self-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
        <div className="h-full w-full rounded-2xl bg-background p-2">
          <div className="flex h-full items-center justify-center">
            <Activity className="h-24 w-24 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}