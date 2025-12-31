"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon, TwitterIcon, DownloadIcon } from "lucide-react"

const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Responsive UI Development", category: "frontend" },
  { name: "Component-Based Architecture", category: "frontend" },
  { name: "Frontend Performance Optimization", category: "frontend" },

  // Backend
  { name: "FastAPI", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "RESTful API Design", category: "backend" },
  { name: "Authentication & Authorization", category: "backend" },
  { name: "Backend System Design", category: "backend" },

  // Programming Languages
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Java", category: "language" },
  { name: "C", category: "language" },

  // AI / ML
  { name: "Machine Learning", category: "ai" },
  { name: "Deep Learning", category: "ai" },
  { name: "Feature Engineering", category: "ai" },
  { name: "Exploratory Data Analysis (EDA)", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "Scikit-learn", category: "ai" },
  { name: "Pandas", category: "ai" },
  { name: "NumPy", category: "ai" },
  { name: "Natural Language Processing", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "LangChain & RAG Systems", category: "ai" },
  { name: "Data Visualization", category: "ai" },

  // Databases
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Database Schema Design", category: "database" },
  { name: "Query Optimization", category: "database" },

  // DevOps / Cloud / Tools
  { name: "Docker", category: "devops" },
  { name: "Git", category: "tool" },
  { name: "GitHub Actions (CI/CD)", category: "devops" },
  { name: "Cloud Deployment (Vercel, Render)", category: "cloud" },
  { name: "Environment & Secrets Management", category: "devops" }
];


export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Standardized Header with White Text */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">About Me</h2>
            {/* Aurora glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 blur-2xl opacity-30 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Get to know more about my background, skills, and what drives me as a developer.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Profile Image and Social Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto aspect-square w-64 overflow-hidden rounded-2xl sm:w-80 lg:w-full lg:max-w-sm group"
            >
              <Image
                src="/blackbag.png"
                alt="Jayesh RL"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link href="https://github.com/Aspect022" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="GitHub"
                  className="hover:bg-muted/50 hover:border-blue-500/30"
                >
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jayesh-rl-748059291/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="LinkedIn"
                  className="hover:bg-muted/50 hover:border-blue-500/30"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/Jayesh25279350" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Twitter"
                  className="hover:bg-muted/50 hover:border-blue-500/30"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <Link href="/jayesh_resume.pdf" download>
                <Button className="w-full max-w-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Bio and Skills */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground dark:text-white">My Background</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-base">
                    I'm an AI and Full-Stack Developer passionate about building smart, impactful software solutions. My
                    tech journey kicked off with a curiosity for how digital systems think, work, and connect people.
                  </p>
                  <p className="text-base">
                    Right now, I focus on creating AI-powered applications and robust backend systems using Python,
                    FastAPI, and modern JavaScript frameworks like React and Next.js. Clean code, performance, and
                    meaningful user experiences are at the core of everything I build.
                  </p>
                  <p className="text-base">
                    When I'm not coding, you'll find me exploring new AI trends, brainstorming startup ideas, or guiding
                    peers through tech challenges and college projects.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground dark:text-white">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-2 text-sm bg-muted/40 hover:bg-muted/60 transition-colors border border-border/50 hover:border-blue-500/30"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
