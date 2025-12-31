"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeIcon, EyeOffIcon, ShieldCheckIcon } from "lucide-react"

export function EasterEgg() {
  const [isTriggered, setIsTriggered] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount >= 4) {
      setIsTriggered(true)
      setClickCount(0)
    }
  }

  const handleDismiss = () => {
    setIsTriggered(false)
  }

  return (
    <>
      {/* Hidden trigger area */}
      <div
        className="fixed bottom-0 left-0 w-16 h-16 cursor-pointer opacity-0 hover:opacity-5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-opacity duration-300"
        onClick={handleClick}
        title="🎉 Secret developer area! Click me 5 times..."
      />

      {/* Easter egg modal */}
      <AnimatePresence>
        {isTriggered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleDismiss}
          >
            {/* Dark translucent background */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-4 bg-gradient-to-br from-muted/30 to-muted/10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                  >
                    <CodeIcon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-foreground">Developer Mode Activated</CardTitle>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Developer joke */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-muted/50 rounded-lg p-4 border border-border/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-green-500 font-mono text-sm">{">"}</div>
                      <div className="font-mono text-sm text-foreground leading-relaxed">
                        <span className="text-blue-500">console</span>
                        <span className="text-muted-foreground">.</span>
                        <span className="text-yellow-500">log</span>
                        <span className="text-muted-foreground">(</span>
                        <span className="text-green-500">"You weren't supposed to see this... 😳"</span>
                        <span className="text-muted-foreground">);</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional developer humor */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-center space-y-2"
                  >
                    <p className="text-muted-foreground text-sm">
                      Congratulations! You've discovered the secret developer portal.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80">
                      <ShieldCheckIcon className="h-3 w-3" />
                      <span>This area is totally not in production... 👀</span>
                    </div>
                  </motion.div>

                  {/* Fun stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="grid grid-cols-2 gap-4 text-center"
                  >
                    <div className="bg-muted/30 rounded-lg p-3 border border-border/20">
                      <div className="text-lg font-bold text-primary">∞</div>
                      <div className="text-xs text-muted-foreground">Bugs Fixed</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 border border-border/20">
                      <div className="text-lg font-bold text-primary">404</div>
                      <div className="text-xs text-muted-foreground">Coffee Cups</div>
                    </div>
                  </motion.div>

                  {/* Dismiss button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="pt-2"
                  >
                    <Button
                      onClick={handleDismiss}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                      <EyeOffIcon className="mr-2 h-4 w-4" />
                      Shhh… I won't tell anyone
                    </Button>
                  </motion.div>

                  {/* Secret message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="text-center"
                  >
                    <p className="text-xs text-muted-foreground/60 italic">Thanks for exploring! - Jayesh RL 🚀</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
