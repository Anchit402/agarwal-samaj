import { Button } from "@/components/ui/button"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-card rounded-2xl p-12">

          <div className="space-y-6">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl font-bold">
              Preserving Heritage, Empowering Future
            </h2>

            <p className="text-muted-foreground">
              Founded on the principles of service and brotherhood, Agarwal
              Samaj has been a pillar of support since 1990. Our mission is to
              preserve our rich heritage while empowering the next generation.
            </p>

            <div className="flex gap-6">
              <div className="bg-muted rounded-lg p-6">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-muted-foreground text-sm">
                  Years of Service
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-muted-foreground text-sm">
                  Annual Events
                </p>
              </div>
            </div>

            <Button variant="outline">Read Full History</Button>
          </div>

          <Image
            src="/heritage.jpg"
            alt="Heritage"
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>

  )
}