"use client"

import { useState } from "react"
import { AnimatedRobotAssistant } from "./animated-robot-assistant"
import { RobotChatInterface } from "./robot-chat-interface"

export function RobotAssistantWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleChatOpen = () => {
    setIsChatOpen(true)
  }

  const handleChatClose = () => {
    setIsChatOpen(false)
  }

  return (
    <>
      <AnimatedRobotAssistant onChatOpen={handleChatOpen} />
      <RobotChatInterface isOpen={isChatOpen} onClose={handleChatClose} />
    </>
  )
}
