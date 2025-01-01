"use client";

import { useEffect, useState } from "react";
import { Scene } from "@/components/scene";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import StarField from "@/components/starFlield";

import { useTheme } from "next-themes";
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { setTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative ">
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      {/* Scène 3D avec la fusée */}
      <div className="absolute inset-0 z-10">
        <Scene scrollProgress={scrollProgress} />
      </div>
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
