import { HeartHandshake, Users, Landmark } from "lucide-react";

const CORE_VALUES = [
  {
    title: "Charity & Service",
    description: "Extending a helping hand to those in need.",
    icon: <HeartHandshake className="text-primary" />,
  },
  {
    title: "Unity & Brotherhood",
    description: "Strengthening bonds within our community.",
    icon: <Users className="text-primary" />,
  },
  {
    title: "Cultural Heritage",
    description: "Preserving traditions for future generations.",
    icon: <Landmark className="text-primary" />,
  },
];





export const ValuesSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center space-y-12">
        <div>
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The pillars that uphold our community and guide our actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-xl p-8 shadow-sm space-y-4"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                {v.icon}
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-muted-foreground text-sm">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}