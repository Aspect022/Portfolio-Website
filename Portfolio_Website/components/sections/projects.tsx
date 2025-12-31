"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/data"

type FilterOption = "all" | "frontend" | "backend" | "fullstack" | "AI"

export function Projects() {
  const [filter, setFilter] = useState<FilterOption>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Filter projects based on selected filter
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "frontend")
      return project.tags.some((tag) =>
        ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "CSS", "HTML"].includes(tag),
      )
    if (filter === "backend")
      return project.tags.some((tag) =>
        ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "API", "Java", "FastAPI"].includes(tag),
      )
    if (filter === "AI")
      return project.tags.some((tag) =>
        ["Python", "Joblib", "TensorFlow", "Scikit-learn", "OpenCV", "PyTorch"].includes(tag),
      )
    if (filter === "fullstack")
      return (
        project.tags.some((tag) => ["React", "Next.js", "Vue.js", "Angular"].includes(tag)) &&
        project.tags.some((tag) => ["Node.js", "Express", "MongoDB", "Java", "FastAPI", "Python"].includes(tag))
      )
    return true
  })

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Professional Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Featured Projects</h2>
            {/* Subtle background accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 blur-xl opacity-50 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A curated selection of my latest work, showcasing innovative solutions and cutting-edge technologies.
          </motion.p>

          {/* Professional Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {(["all", "frontend", "backend", "AI", "fullstack"] as const).map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(option)}
                className={`capitalize transition-all duration-200 px-4 py-2 font-medium ${
                  filter === option
                    ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                    : "border-border/60 hover:bg-muted/50 hover:border-primary/30"
                }`}
              >
                {option}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 text-center">
            <p className="text-muted-foreground text-lg">No projects match the selected filter.</p>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pt-3">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted/60 hover:bg-muted/80 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </DialogDescription>
              </DialogHeader>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/20">
                <Image
                  src={selectedProject.imageUrl || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-base">{selectedProject.description}</p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="outline" asChild className="flex-1 hover:bg-muted/50">
                    <Link href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <Link href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </motion.div>
    </div>
  )
}

type ProjectCardProps = {
  project: Project
  onClick: () => void
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <Card className="h-full overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-lg hover:border-border transition-all duration-300 group-hover:shadow-xl">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden bg-muted/20">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-sm font-medium">
                <StarIcon className="mr-1 h-3 w-3" />
                Featured
              </Badge>
            </div>
          )}

          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Action */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ArrowRightIcon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardHeader className="p-6 space-y-4">
          <div className="space-y-3">
            <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">{project.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-1 bg-muted/30 hover:bg-muted/50 transition-colors border-border/50 font-normal"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs px-2 py-1 bg-muted/30 border-border/50 font-normal">
                +{project.tags.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="flex-1 hover:bg-muted/50 transition-colors border-border/60"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-3 w-3" />
                Code
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="flex-1 bg-primary hover:bg-primary/90 border-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-3 w-3" />
                Demo
              </Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
