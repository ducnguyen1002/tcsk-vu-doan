"use client";

import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Showreel from "@/components/sections/Showreel";
import Portfolio from "@/components/sections/Portfolio";
import DanceTeam from "@/components/sections/DanceTeam";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Universal Scroll Reveal
    const ctx = gsap.context(() => {
      // Heading Reveal Animation
      gsap.utils.toArray<HTMLElement>('.heading-reveal').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.9,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      });

      // Simple Fade Reveal for other elements
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, 
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            }
          }
        )
      });
      
      // Initial ScrollTrigger Refresh
      ScrollTrigger.refresh();
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-white selection:bg-gold selection:text-white">
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 bg-white">
        <Stats />
        <Services />
        <Showreel />
        <Portfolio />
        <DanceTeam />
        <Process />
        <Testimonials />
        <Clients />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
