"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DownloadIcon, MessageCircleIcon, XIcon } from "lucide-react"
import Link from "next/link"

export function FloatingHireButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 flex flex-col gap-2"
          >
            <Link href="/jayesh_resume.pdf" download>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 shadow-lg"
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-950 dark:hover:to-blue-950 shadow-lg"
                onClick={() => setIsExpanded(false)}
              >
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`rounded-full w-14 h-14 shadow-lg transition-all duration-300 ${
            isExpanded
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          }`}
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XIcon className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="hire"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="text-xs font-bold leading-tight">
                  HIRE
                  <br />
                  ME
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}
