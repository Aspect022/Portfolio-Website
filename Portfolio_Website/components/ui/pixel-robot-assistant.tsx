"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface PixelRobotAssistantProps {
  onChatOpen?: () => void
}

const pixelMessages = ["Ask me anything!", "Wanna know more?", "Let's chat, human 🤖", "Need help exploring?"]

export function PixelRobotAssistant({ onChatOpen }: PixelRobotAssistantProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [fontLoaded, setFontLoaded] = useState(false)

  // Load robot animation from local file
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/assets/robot.json")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setAnimationData(data)
      } catch (error) {
        console.log("Using fallback robot emoji - Lottie animation not available:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAnimation()
  }, [])

  // Load Google Font
  useEffect(() => {
    const loadFont = async () => {
      try {
        await document.fonts.load("12px 'Press Start 2P'")
        setFontLoaded(true)
      } catch (error) {
        console.log("Font loading failed, using fallback")
        setFontLoaded(true) // Still set to true to show content
      }
    }

    // Add font link to head if not already present
    if (!document.querySelector('link[href*="Press+Start+2P"]')) {
      const link = document.createElement("link")
      link.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }

    loadFont()
  }, [])

  // Cycle through pixel messages every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % pixelMessages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 right-0 z-[1000] flex flex-col items-end">
      {/* Pixel Speech Bubble */}
      <div className="mb-2 mr-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative"
          >
            {/* Pixel-style speech bubble with enhanced styling */}
            <div
              className="relative px-3 py-2 rounded-lg shadow-2xl max-w-[160px] sm:max-w-[180px] border-2"
              style={{
                background: "rgba(0, 0, 0, 0.95)",
                backdropFilter: "blur(10px)",
                borderColor: "#2563eb",
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Gradient glow background */}
              <div
                className="absolute inset-0 rounded-lg opacity-20 blur-sm -z-10"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)",
                }}
              />

              <p
                className="text-white text-center leading-tight break-words"
                style={{
                  fontFamily: fontLoaded ? "'Press Start 2P', monospace" : "monospace",
                  fontSize: window.innerWidth < 640 ? "8px" : "9px",
                  textShadow: "1px 1px 0px rgba(59, 130, 246, 0.8), 0 0 10px rgba(59, 130, 246, 0.4)",
                  lineHeight: "1.4",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {pixelMessages[currentMessageIndex]}
              </p>

              {/* Speech bubble tail */}
              <div className="absolute bottom-[-8px] right-6">
                <div
                  className="w-3 h-3 transform rotate-45 border-r-2 border-b-2"
                  style={{
                    background: "rgba(0, 0, 0, 0.95)",
                    borderColor: "#2563eb",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Robot Animation - positioned to "sit" on the edge */}
      <motion.div
        className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        onClick={onChatOpen}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "120px",
          height: "120px",
          marginBottom: "-10px",
          marginRight: "-5px",
        }}
      >
        {/* Loading state */}
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🤖
            </motion.div>
          </div>
        )}

        {/* Lottie Robot Animation */}
        {!isLoading && animationData && typeof window !== "undefined" && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        )}

        {/* Enhanced Fallback Robot Emoji */}
        {!isLoading && !animationData && (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="text-5xl select-none"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                textShadow: "2px 2px 0px rgba(59, 130, 246, 0.3)",
              }}
            >
              🤖
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
