import {
  Activity,
  Calendar,
  LineChart,
  Users,
  Trophy,
  Heart,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Workout Tracking",
    description: "Log exercises, sets, reps, and weights with ease",
    icon: Activity,
  },
  {
    title: "Smart Planning",
    description: "AI-powered workout plans tailored to your goals",
    icon: Calendar,
  },
  {
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed insights",
    icon: LineChart,
  },
  {
    title: "Community Support",
    description: "Connect with like-minded fitness enthusiasts",
    icon: Users,
  },
  {
    title: "Achievement System",
    description: "Earn badges and rewards for hitting milestones",
    icon: Trophy,
  },
  {
    title: "Health Integration",
    description: "Sync with health apps and wearable devices",
    icon: Heart,
  },
];

export function FeaturesGrid() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H2>Powerful Features for Your Fitness Goals</Typography.H2>
          <Typography.Lead className="mt-4">
            Everything you need to track, analyze, and improve your fitness journey
          </Typography.Lead>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}