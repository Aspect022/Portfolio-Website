"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ScrollLink } from "@/components/ui/scroll-link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine which section is currently in view
      const sections = ["hero", "about", "projects", "experience", "contact"]
      let currentSection = "hero"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <ScrollLink href="#hero" className="text-xl font-bold transition-colors hover:text-primary">
          Jayesh RL
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex md:items-center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.substring(1) && "text-primary font-semibold",
              )}
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "py-2 text-center text-lg font-medium transition-colors hover:text-primary",
                    activeSection === item.href.substring(1) && "text-primary font-semibold",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
