"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrophyIcon,
  BrainIcon,
  CodeIcon,
  RocketIcon,
  StarIcon,
  AwardIcon,
} from "lucide-react"

type GitHubStats = {
  public_repos: number
  followers: number
  following: number
}

type LeetCodeStats = {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
}

const achievements = [
  {
    id: "achievement-1",
    title: "LeetCode Problem Solving",
    organization: "LeetCode",
    description: "Consistent problem-solver with live LeetCode submission counts fetched via API.",
    date: "2024 - Present",
    type: "profile",
    icon: BrainIcon,
    highlights: [], // replaced by live stats
  },
  {
    id: "achievement-2",
    title: "GitHub Profile Highlights",
    organization: "GitHub",
    description: "Active open-source contributor with live stats pulled directly from GitHub’s API.",
    date: "2023 - Present",
    type: "profile",
    icon: CodeIcon,
    highlights: [], // replaced by live stats
  },
  {
    id: "achievement-3",
    title: "DSU × Tempête – Club Coordinator",
    organization: "Dayananda Sagar University",
    description:
      "Leading technical and departmental events as Club Coordinator, engaging 100+ students in high-impact activities and fostering a collaborative learning environment.",
    date: "Aug 2024 - Present",
    type: "leadership",
    icon: TrophyIcon,
    highlights: [
      "Event Coordination",
      "100+ Student Engagement",
      "Technical Events",
      "Departmental Activities"
    ]
  },
  {
    id: "achievement-4",
    title: "Hackathon Participations",
    organization: "Multiple Competitions",
    description:
      "Active participant in competitive hackathons, consistently ranking in top positions and demonstrating excellence in rapid prototyping and full-stack development.",
    date: "2024 - 2025",
    type: "skill",
    icon: StarIcon,
    highlights: [
      "1st Place – DASHACK Data Visualization Hackathon (DSU)",
      "2nd Place – Quizathon, IEEE DSU Student Branch",
      "TECNOCOGNITION – Certificate of Appreciation ($100 USD)",
      "Top 15 – 24-Hour Hackathon, TEDxDSU (Apr 2025)"
    ],
  },
  {
    id: "achievement-5",
    title: "Open Source Contributions",
    organization: "Open Source Programs",
    description: "Active contributor to major open source initiatives, participating in prestigious programs that foster collaboration and innovation in the developer community.",
    date: "2025 - 2026",
    type: "contribution",
    icon: AwardIcon,
    highlights: [
      "OSI 2025 Open Source Connect India",
      "Social Winter of Code 2025/2026",
      "Global Open Source Connect 2026"
    ],
  },
  {
    id: "achievement-6",
    title: "Research Publications",
    organization: "Academic Research",
    description:
      "Contributing to cutting-edge research in AI and healthcare, with focus on neural architectures and medical signal processing for real-world applications.",
    date: "2025",
    type: "research",
    icon: BrainIcon,
    highlights: [
      "Lightweight Spiking Neural Architecture with Dynamic Quantization for Real-Time Schizophrenia Screening using Single-Channel EEG (Submitted)"
    ],
  },
]

const typeColors = {
  internship: "bg-blue-600 hover:bg-blue-700",
  project: "bg-purple-600 hover:bg-purple-700",
  skill: "bg-green-600 hover:bg-green-700",
  contribution: "bg-orange-600 hover:bg-orange-700",
  leadership: "bg-amber-600 hover:bg-amber-700",
  profile: "bg-teal-600 hover:bg-teal-700",
  research: "bg-indigo-600 hover:bg-indigo-700",
}

const typeLabels = {
  internship: "Internship",
  project: "Project",
  skill: "Skills",
  contribution: "Open Source",
  leadership: "Leadership",
  profile: "Profile",
  research: "Research",
}
export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null)
  const [leetStats, setLeetStats] = useState<LeetCodeStats | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/Aspect022")
      .then((res) => res.json())
      .then((data: GitHubStats) => setGithubStats(data))
      .catch(() => { })

    fetch("https://leetcode-stats-api.herokuapp.com/Aspect022")
      .then((res) => res.json())
      .then((data: LeetCodeStats) => setLeetStats(data))
      .catch(() => { })
  }, [])

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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Achievements & Highlights
            </h2>
            {/* Subtle background accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-600/5 blur-xl opacity-50 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Key milestones, internships, and notable accomplishments that define my journey as a developer.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group h-full"
              >
                <Card className="h-full border border-border/60 bg-card shadow-sm hover:shadow-lg hover:border-border transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted/70 transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <Badge
                        className={`${typeColors[achievement.type as keyof typeof typeColors]} text-white border-0 shadow-sm font-medium`}
                      >
                        {typeLabels[achievement.type as keyof typeof typeLabels]}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{achievement.organization}</p>
                      <p className="text-xs text-muted-foreground/80">{achievement.date}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <p className="text-sm leading-relaxed">{achievement.description}</p>

                    {/* Live Stats Blocks */}
                    {achievement.id === "achievement-2" && githubStats && (
                      <div className="text-sm space-y-1">
                        <h4 className="font-semibold">Live GitHub Stats:</h4>
                        <p>Repos: {githubStats.public_repos}</p>
                        <p>Followers: {githubStats.followers}</p>
                        <p>Following: {githubStats.following}</p>
                      </div>
                    )}

                    {achievement.id === "achievement-1" && leetStats && (
                      <div className="text-sm space-y-1">
                        <h4 className="font-semibold">Live LeetCode Stats:</h4>
                        <p>Total Solved: {leetStats.totalSolved}</p>
                        <p>Easy: {leetStats.easySolved}</p>
                        <p>Medium: {leetStats.mediumSolved}</p>
                        <p>Hard: {leetStats.hardSolved}</p>
                      </div>
                    )}

                    {/* Static highlights for other cards */}
                    {!["achievement-1", "achievement-2"].includes(achievement.id) && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.highlights.map((h, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs bg-muted/40 hover:bg-muted/60 font-normal"
                            >
                              {h}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
