import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";


const UPCOMING_EVENTS = [
  {
    title: "Diwali Grand Gala 2024",
    description: "Celebrate the festival of lights with music, dance and food.",
    time: "6:00 PM - 10:00 PM",
    location: "City Convention Center",
    image: "/event1.jpg",
  },
  {
    title: "Annual General Meeting",
    description: "Discuss the future roadmap of our Samaj.",
    time: "10:00 AM - 2:00 PM",
    location: "Agarwal Bhavan",
    image: "/event2.jpg",
  },
  {
    title: "Winter Community Picnic",
    description: "A fun-filled family outing with games and food.",
    time: "9:00 AM - 4:00 PM",
    location: "City Central Park",
    image: "/event3.jpg",
  },
];


export const EventsSection = () => {
  return <section className="bg-background">
    <div className="mx-auto max-w-7xl px-6 py-20 space-y-10">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="text-muted-foreground">
            Join us at our next gathering and meet the community.
          </p>
        </div>
        <a href="#" className="text-primary font-medium">
          View All Events →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {UPCOMING_EVENTS.map((event) => (
          <div
            key={event.title}
            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={250}
              className="object-cover"
            />

            <div className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-muted-foreground text-sm">
                {event.description}
              </p>

              <div className="flex items-center text-sm text-muted-foreground gap-2">
                <CalendarDays className="w-4 h-4" />
                {event.time}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <a className="text-primary font-medium" href="#">
                  Register
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>
}
