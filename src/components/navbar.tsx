"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Home,
  Menu,
  Package,
  PhoneCall,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 py-1 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-15">
        <Link href="/" className="flex items-center space-x-3 pl-1">
          <Image
            src="/wovera-secondary.svg"
            alt="Wovera Logo"
            width={150}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className={cn(
            "hidden md:flex items-center bg-white/75 backdrop-blur-sm rounded-full px-2 py-1 border border-green-100/40 shadow-sm",
            isScrolled && "shadow-none bg-transparent border-none"
          )}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/products"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Wovera Suite
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our growing collection of proven, scalable
                            SaaS products.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/products#abal"
                        >
                          <div className="text-sm font-medium leading-none">
                            Abal
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Gym Management & Access Control System
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/products#fidel"
                        >
                          <div className="text-sm font-medium leading-none">
                            Fidel
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            School Management System
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/products#woverafund"
                        >
                          <div className="text-sm font-medium leading-none">
                            WoveraFund
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Crowdfunding Platform
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#custom"
                        >
                          <div className="text-sm font-medium leading-none">
                            Custom Software Development
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tailored software solutions for your business needs.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#saas"
                        >
                          <div className="text-sm font-medium leading-none">
                            B2B SaaS Development
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            End-to-end development of scalable SaaS solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#ai"
                        >
                          <div className="text-sm font-medium leading-none">
                            AI Workflow Solutions
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Customized AI workflows to grow your business
                            revenue.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#consultancy"
                        >
                          <div className="text-sm font-medium leading-none">
                            Technology Consultancy
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic guidance for technology decisions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div></div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-0 bg-white from-background p-4"
          >
            <nav className="flex flex-col space-y-1 mt-8">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-lg font-medium transition-all hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 group relative overflow-hidden"
                onClick={handleNavItemClick}
              >
                <div className="absolute left-0 w-1 h-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Home className="h-5 w-5 text-primary" />
                <span>Home</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
              </Link>

              <Link
                href="/products"
                className="flex items-center gap-3 p-3 text-lg font-medium transition-all hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 group relative overflow-hidden"
                onClick={handleNavItemClick}
              >
                <div className="absolute left-0 w-1 h-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Package className="h-5 w-5 text-primary" />
                <span>Products</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-3 p-3 text-lg font-medium transition-all hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 group relative overflow-hidden"
                onClick={handleNavItemClick}
              >
                <div className="absolute left-0 w-1 h-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Settings className="h-5 w-5 text-primary" />
                <span>Services</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 p-3 text-lg font-medium transition-all hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 group relative overflow-hidden"
                onClick={handleNavItemClick}
              >
                <div className="absolute left-0 w-1 h-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Package className="h-5 w-5 text-primary" />
                <span>Projects</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
              </Link>

              <div className="p-3">
                <Link href="/contact" onClick={handleNavItemClick}>
                  <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                    <PhoneCall className="h-4 w-4" />
                    <span>Contact Us</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
