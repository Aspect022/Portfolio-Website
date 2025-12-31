"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface AnimatedRobotAssistantProps {
  onChatOpen?: () => void
}

const speechMessages = [
  "Need help exploring the site?",
  "Ask me anything!",
  "Wanna know about Jayesh?",
  "I'm Jayesh's AI assistant 👋",
]

export function AnimatedRobotAssistant({ onChatOpen }: AnimatedRobotAssistantProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


useEffect(() => {
  const loadAnimation = async () => {
    try {
      const response = await fetch("/assets/robot.json")
      const data = await response.json()
      setAnimationData(data)
    } catch (error) {
      console.error("Failed to load robot animation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  loadAnimation()
}, [])


  // Rotate through speech bubble messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % speechMessages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Subtle floating animation for the robot
  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <div className="fixed bottom-5 right-5 z-[1000] flex flex-col items-end max-w-[20%] sm:max-w-none">
      {/* Speech Bubble */}
      <div className="mb-3 mr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 max-w-[200px] sm:max-w-[220px]">
              <p className="text-sm font-medium text-center leading-relaxed whitespace-nowrap">
                {speechMessages[currentMessageIndex]}
              </p>
              {/* Speech bubble tail pointing to robot */}
              <div className="absolute bottom-[-6px] right-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-gray-800"></div>
              <div className="absolute bottom-[-7px] right-8 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-gray-200 dark:border-t-gray-600"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Robot Animation Container */}
      <motion.div
        animate={floatingAnimation}
        className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        onClick={onChatOpen}
        style={{ width: "120px", height: "120px" }}
      >
        {/* Loading state */}
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl animate-bounce">🤖</div>
          </div>
        )}

        {/* Lottie Animation */}
        {!isLoading && animationData && typeof window !== "undefined" && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        )}

        {/* Fallback if animation fails to load */}
        {!isLoading && !animationData && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-5xl animate-bounce hover:animate-pulse">🤖</div>
          </div>
        )}
      </motion.div>

      {/* Responsive adjustments for mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .robot-container {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  )
}
