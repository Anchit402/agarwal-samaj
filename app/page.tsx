import { NavbarWrapper } from "./_shared_components/NavbarWrapper";
import Footer from "./_shared_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { EventsSection } from "./_components/EventsSection";
import { AboutSection } from "./_components/AboutSection";
import { ValuesSection } from "./_components/ValuesSection";

export default function Home() {
  return (
    <>
      <NavbarWrapper>
        <main className="flex flex-col">

          {/* HERO */}
          <HeroSection />

          {/* EVENTS */}
          <EventsSection />

          {/* ABOUT */}
          <AboutSection />

          {/* VALUES */}
          <ValuesSection />

        </main>
        <Footer />
      </NavbarWrapper>

    </>
  );
}




