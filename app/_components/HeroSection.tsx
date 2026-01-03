import { Button } from "@/components/ui/button"
import { Users } from "lucide-react";
import Image from "next/image";


export const HeroSection = () => {
  return <section className="bg-background">
    <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div className="space-y-6">
        <span className="inline-block bg-muted text-primary px-4 py-1 rounded-full text-sm font-medium">
          Community First
        </span>

        <h1 className="text-5xl font-bold leading-tight">
          Uniting the Agarwal Community for a{" "}
          <span className="text-primary">Better Tomorrow</span>
        </h1>

        <p className="text-muted-foreground max-w-xl">
          Join us in celebrating our heritage, fostering unity, and building
          a stronger future together through cultural events, social
          initiatives, and mutual support.
        </p>

        <div className="flex gap-4">
          <Button size="lg">Become a Member</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/hero.jpg"
            alt="Community"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-4 bg-card rounded-xl px-4 py-3 shadow-md flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Users className="text-primary w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Community Size</p>
            <p className="font-bold">5,000+ Members</p>
          </div>
        </div>
      </div>

    </div>
  </section>
}