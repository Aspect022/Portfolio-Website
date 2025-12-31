"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"
import { ScrollLink } from "@/components/ui/scroll-link"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 dark:from-background/90 dark:via-background/70 dark:to-background/95" />

      <div className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-20 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <h1 className="floating text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Jayesh RL
              </span>
            </h1>
            {/* Aurora glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-30 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 h-16 text-xl sm:text-2xl md:text-3xl text-muted-foreground"
          >
            {isMounted ? (
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "AI/ML Engineer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Innovation Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            ) : (
              <span>Full-Stack Developer</span>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed"
          >
            I build intelligent AI-driven applications, craft robust backend systems, and explore emerging technologies
            to create impactful, future-ready software solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ScrollLink href="#projects">
              <Button
                size="lg"
                className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
              >
                View My Work
              </Button>
            </ScrollLink>
            <ScrollLink href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="font-medium border-2 hover:bg-muted/50 hover:border-blue-500/30 transition-all duration-300 px-8 py-3"
              >
                Let's Connect
              </Button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ScrollLink href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 dark:hover:bg-white/5 transition-colors rounded-full"
            aria-label="Scroll down"
          >
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </ScrollLink>
      </motion.div>
    </div>
  )
}
