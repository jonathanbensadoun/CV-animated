"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../themeButton";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background/60 to-accent/1">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ModeToggle />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Développeur Full Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Passionné par le développement web et les nouvelles technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity"
          >
            <LinkedinIcon className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/50 hover:border-primary transition-colors"
          >
            <MailIcon className="mr-2 h-5 w-5" />
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
