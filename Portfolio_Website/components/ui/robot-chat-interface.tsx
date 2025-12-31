"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { XIcon, SendIcon, Loader2 } from "lucide-react"
import { groqService } from "@/lib/groq-service"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface RobotChatInterfaceProps {
  isOpen: boolean
  onClose: () => void
}

export function RobotChatInterface({ isOpen, onClose }: RobotChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Jayesh's AI Assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsLoading(true)

    try {
      // Prepare conversation history for context (excluding system messages)
      const conversationHistory = messages
        .filter(msg => msg.id !== "1") // Exclude initial greeting
        .map(msg => ({
          role: msg.isUser ? 'user' as const : 'assistant' as const,
          content: msg.text
        }))

      const aiResponse = await groqService.generateResponse(currentInput, conversationHistory)
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Error generating AI response:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble processing your request right now. Please try again in a moment!",
        isUser: false,
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-end p-4 md:items-center md:justify-center"
          onClick={onClose}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md h-[600px] md:h-[500px] bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30 bg-muted/20">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span>🤖</span>
                Jayesh's Assistant
              </h3>
              <Button onClick={onClose} className="hover:bg-muted/50 rounded-full">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-muted/50 text-foreground border border-border/30"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-muted-foreground"}`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

              {/* Input Footer */}
              <div className="p-4 border-t border-border/30 bg-muted/10">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Jayesh's skills, projects, or experience..."
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-4 border-0 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <SendIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Press Enter to send • Powered by Groq AI
                </p>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
