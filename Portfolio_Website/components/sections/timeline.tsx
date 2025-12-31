"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experiences } from "@/lib/data"
import { CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import type { ExperienceItem } from "@/lib/data"

type TimelineItemProps = {
  experience: ExperienceItem
  index: number
  isInView: boolean
}

export function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Standardized Header with White Text */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Experience</h2>
            {/* Aurora glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 blur-2xl opacity-30 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            My professional journey and the skills I've developed along the way.
          </motion.p>
        </div>

        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px -translate-x-1/2 bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function TimelineItem({ experience, index, isInView }: TimelineItemProps) {
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`md:w-1/2 ${isEven ? "md:ml-auto md:pl-8" : "md:pr-8"}`}
      >
        <div className="relative rounded-lg bg-card p-6 shadow-sm">
          {/* Company and Role */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{experience.role}</h3>
                <p className="text-muted-foreground">{experience.company}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>
                {experience.startDate} — {experience.endDate || "Present"}
              </span>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Description */}
          <p className="mt-2 text-muted-foreground">{experience.description}</p>

          {/* Achievements */}
          <div className="mt-4">
            <h4 className="font-semibold text-sm">Key Achievements:</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Timeline Dot */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background ${
              isEven
                ? "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                : "left-0 -translate-x-1/2 md:right-0 md:left-auto md:translate-x-1/2"
            }`}
          />
        </div>
      </motion.div>
    </div>
  )
}
