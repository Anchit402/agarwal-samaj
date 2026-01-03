"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";


const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
];


interface NavbarWrapperProps {
  children: React.ReactNode
}

export const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <nav className="flex items-center justify-between p-4 border-b">
        {/* Logo */}
        <Link href="/">
          <h3 className="text-xl font-bold">agarwal samaj</h3>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
          <Button onClick={() => router.push("/signin")}>Join Now</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <FiMenu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <SheetTitle className="sr-only">menu</SheetTitle>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className={cn("mt-4 bg-orange-500 hover:bg-orange-600 text-white")} onClick={() => router.push("/signin")}>
                  Join Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav >
      <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
        {children}
      </div>
    </div>
  )
}