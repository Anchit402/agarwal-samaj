import Link from "next/link";
import { Facebook, Globe, ThumbsUp, Share2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="bg-primary/10 p-2 rounded-full">
              <UsersIcon />
            </div>
            Agarwal Samaj
          </div>

          <p className="text-muted-foreground text-sm">
            A community organization dedicated to unity, service, and cultural
            preservation. Join us in making a difference.
          </p>

          <div className="flex gap-4 text-muted-foreground">
            <Globe className="w-5 h-5 hover:text-primary cursor-pointer" />
            <ThumbsUp className="w-5 h-5 hover:text-primary cursor-pointer" />
            <Share2 className="w-5 h-5 hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events Calendar</Link>
            <Link href="/membership">Membership Benefits</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold">Contact Us</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              123 Maharaja Agrasen Marg, New Delhi, India 110001
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-primary" />
              +91 98765 43210
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4 text-primary" />
              info@agarwalsamaj.org
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 Agarwal Samaj. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function UsersIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}
